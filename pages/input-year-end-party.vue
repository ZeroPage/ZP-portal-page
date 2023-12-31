<template>
  <div class="w-full z-0 bg-black section h-content" >
    <div class="pt-16 md:pt-40 pb-8 md:pb-20 max-w-7xl mx-auto text-6xl md:text-8xl text-white text-center">
      <div class="opacity-70 text-2xl  md:text-5xl font-semibold md:font-bold tracking-tight pb-1 md:pb-6">ZeroPage 기년회 2023</div>
      <div class="gradient-text font-extrabold tracking-tight md:text-8xl text-4xl">
        <vue-typer
          :text='[
                    "Share your 2023 with ZP!!",
                    "ZP의 마지막 정규행사",
                    "ZP가 모여 공유하는 2023년"
                    ]'
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2000'
          :erase-delay='300'
          erase-style='clear'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>
      </div>
    </div>
    <div class="title-section">
      <div class="flex space-x-1 md:space-x-4 pb-10 md:pb-20 md:pt-6 justify-center text-xs md:text-xl">
        <div @click="showSubmitForm" class="cursor-pointer px-6 py-2.5 bg-gray-800 text-white font-semibold leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">작성</div>
        <div @click="showQueryForm" class="cursor-pointer px-6 py-2.5 bg-gray-800 text-white font-semibold leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">조회</div>
      </div>

      <!-- 작성 폼 -->
      <div v-if="submitForm" class="submit-form">
        <input type="text" v-model="name" placeholder="이름">
        <input type="text" v-model="generation" placeholder="기수(숫자만)">
        <input type="text" v-model="content" placeholder="올해 있었던 일(한 줄 요약)">
        <input type="password" v-model="password" placeholder="비밀번호">
        <button class="submit-button" @click="summitMessage">작성</button>
      </div>

      <!-- 조회 폼 -->
      <div v-if="queryForm" class="query-form">
        <input type="text" v-model="name" placeholder="이름">
        <input type="text" v-model="generation" placeholder="기수">
        <button @click="loadMessage(name,generation)" class="query-button">조회</button>
      </div>

      <!-- 조회 결과 -->
      <div v-if="queryForm && messageList.length !== 0" class="query-result">
        <div class="wheel-picker" :style="{ height: wheelPickerHeight + 'px' }">
          <div v-for="message in messageList" :key="message.id" class="wheel-picker-item"
               :class="{ 'selected': selectedMessage === message }"
               @click="selectMessage(message)">
            {{ message.content }}
          </div>
        </div>
      </div>


      <!-- 수정 또는 삭제 폼 -->
      <div v-if="selectedMessage && queryForm" class="modify-form">
        <!-- 수정 메시지 입력 폼 -->
        <input type="text" v-model="updatedContent" class="input-field" placeholder="수정할 내용">

        <!-- 비밀번호 입력폼 -->
        <input type="password" v-model="password" class="input-field" placeholder="비밀번호">

        <div>
          <!-- 수정 버튼 -->
          <button @click="updateMessage" class="modify-button">수정</button>
          <!-- 삭제 버튼 -->
          <button @click="deleteMessage" class="delete-button">삭제</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      submitForm: false,
      queryForm: false,
      messageList: [],
      selectedMessage: null,
      updatedContent: '',
      name: '',
      generation: '',
      content: '',
      password: '',
    };
  },
  created() {
    this.submitForm = false;
    this.queryForm = false;
    this.initiaize();
  },
  mounted() {
    this.submitForm = false;
    this.queryForm = false;
    this.initiaize();
  },
  computed: {
    wheelPickerHeight() {
      const itemHeight = 50; // 각 메시지 항목의 높이
      const maxHeight = 300; // 최대 높이
      const dynamicHeight = this.messageList.length * itemHeight;
      return dynamicHeight > maxHeight ? maxHeight : dynamicHeight;
    },
  },

  methods: {
    initiaize() {
      this.messageList = [];
      this.selectedMessage = null;
      this.updatedContent = '';
      this.name = '';
      this.generation = '';
      this.content = '';
      this.password = '';
    },
    // 작성 폼
    showSubmitForm() {
      this.initiaize();
      console.log("showSubmitForm");
      this.submitForm = true;
      this.queryForm = false;
      this.messageList = [];
    },
    // 조회 폼
    showQueryForm() {
      this.initiaize();
      console.log("showQueryForm");
      this.submitForm = false;
      this.queryForm = true;
    },
    // 작성
    async summitMessage() {
      //generation이 숫자인지 확인
      if (isNaN(this.generation)) {
        window.alert('기수는 숫자만 입력 가능합니다.');
        return;
      }
      //name이 빈 문자열인지 확인
      if (this.name === '') {
        window.alert('이름을 입력해주세요.');
        return;
      }
      //generation이 빈 문자열인지 확인
      if (this.generation === '') {
        window.alert('기수를 입력해주세요.');
        return;
      }
      //content가 빈 문자열인지 확인
      if (this.content === '') {
        window.alert('내용을 입력해주세요.');
        return;
      }
      //password가 빈 문자열인지 확인
      if (this.password === '') {
        window.alert('비밀번호를 입력해주세요.');
        return;
      }
      //content가 250자 이하 인지 확인 - 최대 250자
      if (this.content.length > 250) {
        window.alert('내용은 250자 이하로 입력해주세요.');
        return;
      }

      console.log("summitMessage");
      const user_id = await this.checkAndAddUser(this.name, this.generation);
      //console.log(typeof user_id)
      await this.addMessage(user_id, this.content, this.password);

      this.submitForm = false;
      this.initiaize();
    },
    // 수정
    updateMessage() {
      console.log("updateMessage");
      this.adjustMessage();
      this.initiaize();
      this.submitForm = false;
      this.queryForm = false;
    },
    // 삭제
    deleteMessage() {
      console.log("deleteMessage");
      this.delMessage();
      this.initiaize();
      this.submitForm = false;
      this.queryForm = false;
    },
    selectMessage(message) {
      this.selectedMessage = message;
      this.updatedContent = message.content; // 수정 폼에 메시지 내용을 채움
    },
    async checkAndAddUser(name, generation) {
      const { default: axios } = await import('axios');
      const baseUrl = process.env.baseUrl;

      try {
        // 먼저 사용자가 존재하는지 확인
        const findResponse = await axios.get(`${baseUrl}/users/id`, {
          params: {name, generation}
        });
        const result = findResponse.data.id

        console.log('alreadyExist');
        return result;
      } catch (error) {
        // 사용자가 존재하지 않을 경우 (404 오류) 새로운 사용자 추가
        if (error.response && error.response.status === 404) {
          try {
            const addResponse = await axios.post(`${baseUrl}/users/add`, {name, generation});
            const result = addResponse.data.id

            console.log('addComplete');
            return result;
          } catch (addError) {
            console.error('Error adding user:', addError);
          }
        } else {
          console.error('Error checking user:', error);
        }
      }
    },
    async addMessage(user_id, message, password) {
      const { default: axios } = await import('axios');
      const { SHA3 } = await import('crypto-js');
      const baseUrl = process.env.baseUrl;

      const saltedPassword = `${password}zeropagesince1991`;
      const hashedPassword = SHA3(saltedPassword).toString();
      console.log(user_id, message, hashedPassword);
      try {
        // 메시지 추가를 위한 POST 요청
        await axios.post(`${baseUrl}/messages/add`, { user_id, message, password:hashedPassword }, {
          headers: {
            'Content-Type': 'application/json',
          }} );

        console.log('addMessageComplete');
        window.alert('작성 완료');
      } catch (error) {
        console.error('Error adding message:', error);
        window.alert('작성 실패');
      }
    },
    async loadMessage(name, generation) {
      const { default: axios } = await import('axios');

      try {
        const baseUrl = process.env.baseUrl;
        const response = await axios.get(`${baseUrl}/messages`);
        this.messageList = [];
        const api_cards = response.data;
        for (let i = 0; i < api_cards.length; i++) {
          if (api_cards[i].name !== name || api_cards[i].number !== parseInt(generation)) {
            continue;
          }
          this.messageList.push({
            id: i+1,
            user_id: api_cards[i].user_id,
            name: api_cards[i].name,
            number: api_cards[i].number,
            content: api_cards[i].message,
            password: api_cards[i].password
          });
        }
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        // 오류 처리 로직을 추가할 수 있습니다.
      }
    },
    async delMessage() {
      // 삭제 확인 대화 상자 추가 (옵션)
      const confirmed = window.confirm("이 메시지를 정말 삭제하시겠습니까?");
      if (!confirmed) {
        return;
      }

      //이름 입력 확인
      if (this.name === '') {
        window.alert('이름을 입력해주세요.');
        return;
      }
      // content 입력 확인
      if (this.updatedContent === '') {
        window.alert('내용을 입력해주세요.');
        return;
      }
      //비밀번호 입력 확인
      if (this.password === '') {
        window.alert('비밀번호를 입력해주세요.');
        return;
      }

      const NAME = this.name;
      const GENERATION = this.generation;
      const CONTENT = this.updatedContent;
      const PASSWORD = this.password;
      const { SHA3 } = await import('crypto-js');
      const saltedPassword = `${PASSWORD}zeropagesince1991`;
      const hashedPassword = SHA3(saltedPassword).toString();

      const user_id = await this.checkAndAddUser(NAME, GENERATION);
      try {
        const baseUrl = process.env.baseUrl;
        const payload = {
          user_id: user_id,
          message: CONTENT,
          password: hashedPassword

        };

        // axios 라이브러리를 이용해 API 호출
        const { default: axios } = await import('axios');
        await axios.delete(`${baseUrl}/messages/delete`, {data: payload});
        console.log("deleteMessageComplete");
        window.alert('삭제 완료');

      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        // 오류 메시지 표시
        alert("삭제 중 오류가 발생했습니다.");
      }
    },
    async adjustMessage() {
      // 수정 확인 대화 상자 추가
      const confirmed = window.confirm("이 메시지를 정말 수정하시겠습니까?");
      if (!confirmed) {
        return;
      }

      // 이름 입력 확인
      if (this.name === '') {
        window.alert('이름을 입력해주세요.');
        return;
      }
      // content 입력 확인
      if (this.updatedContent === '') {
        window.alert('내용을 입력해주세요.');
        return;
      }
      //content가 250자 이하 인지 확인 - 최대 250자
      if (this.updatedContent.length > 250) {
        window.alert('내용은 250자 이하로 입력해주세요.');
        return;
      }
      // 비밀번호 입력 확인
      if (this.password === '') {
        window.alert('비밀번호를 입력해주세요.');
        return;
      }

      const NAME = this.name;
      const GENERATION = this.generation;
      const OLD_MESSAGE = this.selectedMessage.content;
      const NEW_MESSAGE = this.updatedContent;
      const PASSWORD = this.password;
      const { SHA3 } = await import('crypto-js');
      const saltedPassword = `${PASSWORD}zeropagesince1991`;
      const hashedPassword = SHA3(saltedPassword).toString();

      const user_id = await this.checkAndAddUser(NAME, GENERATION);
      try {
        const baseUrl = process.env.baseUrl;
        const payload = {
          user_id: user_id,
          oldMessage: OLD_MESSAGE,
          newMessage: NEW_MESSAGE,
          password: hashedPassword
        };

        // axios 라이브러리를 이용해 API 호출
        const { default: axios } = await import('axios');
        await axios.put(`${baseUrl}/messages/adjust`, payload);
        console.log("adjustMessageComplete");
        window.alert('수정 완료');

      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        // 오류 메시지 표시
        alert("수정 중 오류가 발생했습니다.");
      }
    }

  }
};
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700');

html, body, .section {
  height: 100%;
  background: black;
}

.gradient-text{
  color: #79c0ff;
  background: linear-gradient(92.7deg,#32bf61 -1.37%,#3f64f7 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 500;
}
.submit-form, .query-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 각 항목 사이의 간격 */
}

.submit-form input, .query-form input {
  width: 80%;
  height: 50px;
  border-radius: 50px;
  padding: 10px 15px;
}

.submit-button, .query-button {
  width: 80px;
  height: 30px;
  border-radius: 50px;
  background-color: #953ff7;
  color: white;
}
.modify-form, .query-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

}

.selected-message-info, .input-field{
  width: 80%;
  height: 50px;
  border-radius: 50px;
  padding: 10px 15px;
}
.modify-button{
  width: 80px;
  height: 30px;
  border-radius: 50px;
  background-color: #3f64f7;
  color: white;
}
.delete-button {
  width: 80px;
  height: 30px;
  border-radius: 50px;
  background-color: #32bf61;
  color: white;
}
.wheel-picker {
  margin-top: 20px;
  width: 70%;
  height: 300px; /* 높이 조정 */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  background-color: black; /* 배경색 */
  color: white; /* 글자색 */
}

.wheel-picker-item {
  margin: 10px 0;
  font-size: 1.2rem;
  line-height: 2.5rem; /* 항목 높이 */
  text-align: center;
}

/* 스크롤바 커스텀 */
.wheel-picker::-webkit-scrollbar {
  width: 8px;
}

.wheel-picker::-webkit-scrollbar-thumb {
  background: white; /* 스크롤바 색상 */
  border-radius: 4px;
}

.wheel-picker::-webkit-scrollbar-track {
  background: transparent;
}
.selected {
  font-weight: bold; /* 선택된 항목 강조 */
  color: #4CAF50; /* 선택된 항목 색상 변경 */
}
@media(max-width: 2500px) {
  .section {
    background: black;
  }
}
</style>
