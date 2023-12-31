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
    <div v-if="selectedCard" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <button @click="closeModal" class="modal-close is-large">X</button>
        <div class="card" :class="getCardClass(selectedCard.type)" :style="{ width: 600+'px', height: cardHeight*2.5 + 'px' }">
          <div class="card-content">
            <span class="card__name">{{ selectedCard.name }} ({{ selectedCard.number }}기)</span>
            <span class="card__message">{{ selectedCard.message }}</span>
          </div>
        </div>
        <button @click="removeCard(selectedCard.id)" class="button is-danger">Remove</button>
      </div>
    </div>
    <div class="title-section">
      <div class="flex space-x-1 md:space-x-4 pb-10 md:pb-20 md:pt-6 justify-center text-xs md:text-xl">
        <div @click="shuffleDeck" class="cursor-pointer px-6 py-2.5 bg-gray-800 text-white font-semibold leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Shuffle</div>
        <div @click="selectRandomCard" class="cursor-pointer px-6 py-2.5 bg-gray-800 text-white font-semibold leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Random Select</div>
      </div>

    </div>
    <transition-group :name="shuffleSpeed" tag="div" class="deck">
      <div v-for="card in cards" :key="card.id" class="card" :class="getCardClass(card.type)" :style="{ height: cardHeight + 'px' }" @click="selectCard(card)">
        <div class="card-content">
          <span class="card__name">{{ card.name }} ({{ card.number }}기)</span>
          <span class="card__message">{{ card.message }}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  data() {
    return {
      name: 'PageIndex',
      mixins: [aosMixin],
      cards: [],
      api_cards: null,
      shuffleButtonActive: 1,
      shuffleSpeed: 'shuffleMedium',
      shuffleCount: 0,
      shuffledDeck: false,
      selectedCard: null,
    };
  },
  created() {
    this.displayInitialDeck();
    this.shuffleSpeed = 'shuffleMedium';
  },
  mounted() {
    this.displayInitialDeck();
  },
  computed: {
    cardHeight() {
      const maxLength = Math.max(...this.cards.map(card => card.message.length));
      return Math.max(160,  maxLength/18*25+160);
    }
  },

  methods: {
    displayInitialDeck() {
      this.cards = [];
      this.api_cards = null;
      this.shuffledDeck = false;
      this.shuffleCount = 0;
      this.loadDeck();
    },
    async loadDeck() {
      const { default: axios } = await import('axios');

      try {
        const baseUrl = process.env.baseUrl;
        const response = await axios.get(`${baseUrl}/messages`);
        this.cards = [];
        this.api_cards = null;
        this.api_cards = response.data;

        for (let i = 0; i < this.api_cards.length; i++) {
          this.cards.push({
            id: i+1,
            user_id: this.api_cards[i].user_id,
            name: this.api_cards[i].name,
            number: this.api_cards[i].number,
            message: this.api_cards[i].message,
            password: this.api_cards[i].password,
            type: i%2 === 0 ? 'purple' : 'blue'
          });
        }
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        // 오류 처리 로직을 추가할 수 있습니다.
      }
    },

    selectShuffleSpeed(n) {
      this.shuffleButtonActive = n;
      if (n === 0) this.shuffleSpeed = 'shuffleSlow';
      if (n === 1) this.shuffleSpeed = 'shuffleMedium';
      if (n === 2) this.shuffleSpeed = 'shuffleFast';
    },
    shuffleDeck() {
      let counter = this.cards.length;
      while (counter > 0) {
        let randomIndex = Math.floor(Math.random() * counter);
        counter--;
        let temp = this.cards[counter];
        this.$set(this.cards, counter, this.cards[randomIndex]);
        this.$set(this.cards, randomIndex, temp);
      }
      this.shuffledDeck = true;
      this.shuffleCount++;
    },
    getCardClass(type) {
      return {
        'gradient-one': type === 'purple',
        'gradient-two': type === 'blue'
      };
    },
    selectCard(card) {
      this.selectedCard = card;
      window.scrollTo(0, 0);
    },
    selectRandomCard() {
      if (this.cards.length === 0) return;
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      this.selectCard(this.cards[randomIndex]);
    },
    closeModal() {
      this.selectedCard = null;
    },
    removeCard(cardId) {
      this.closeModal();
      this.deleteMessage(cardId)
    },
    /*async deleteMessage(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (!card) {
        console.error('카드를 찾을 수 없습니다.');
        return;
      }

      // 삭제 확인 대화 상자 추가 (옵션)
      const confirmed = window.confirm("이 메시지를 정말 삭제하시겠습니까?");
      if (!confirmed) {
        return;
      }

      try {
        const baseUrl = process.env.baseUrl;
        const payload = {
          user_id: card.user_id,
          message: card.message,
          password: card.password
        };

        // axios 라이브러리를 이용해 API 호출
        const { default: axios } = await import('axios');
        const response = await axios.delete(`${baseUrl}/messages/delete`, { data: payload });
        console.log(response.data);

        // 삭제된 카드 제거
        this.cards = this.cards.filter(c => c.id !== cardId);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        // 오류 메시지 표시
        alert("삭제 중 오류가 발생했습니다.");
      }
    },*/


  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700');

html, body, #app {
  height: 100%;
  background: black;
}

.title-section {
  font-family: 'Roboto Slab', sans-serif;
  text-align: center;
  margin-top: 30px;
}

.speed-buttons .button {
  height: 2.50em;
  color: white;
}

.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  color: white;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
}

.deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 2400px;
  margin: 0 auto;
}

.card {
  width: 250px;
  height: 160px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.23);
}
.card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%; /* 내용이 카드 내부에서 차지할 너비 */
  word-wrap: break-word;
}

.card__name {
  display: block; /* 줄바꿈을 위해 block 속성 사용 */
  font-size: 25px; /* 폰트 크기 조절 */
  margin-bottom: 10px; /* 이름과 메시지 사이 간격 조절 */
}

.card__message {
  font-size: 18px; /* 메시지 폰트 크기 조절 */
  word-wrap: break-word; /* 긴 텍스트 줄바꿈 */
  overflow-wrap: break-word; /* 필요 시 단어 내에서도 줄바꿈 */
  white-space: normal; /* 줄바꿈을 위해 필요 */
  display: block; /* 블록 요소로 설정 */
  width: 100%; /* 컨테이너의 전체 너비를 사용 */
}
.gradient-one {
  background: linear-gradient(0deg, #3961db, #953ff7);
}

.gradient-two {
  background: linear-gradient(0deg, #32bf61, #3f64f7);
}
.gradient-text{
  color: #79c0ff;
  background: linear-gradient(92.7deg,#32bf61 -1.37%,#3f64f7 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 500;
}
.shuffleSlow-move, .shuffleMedium-move, .shuffleFast-move {
  transition: transform 2s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-background {
  position: fixed;
  top: -3000px;
  left: -3000px;
  right: -3000px;
  bottom: -2000px;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  position: relative;
  padding: 20px;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
}
.button.is-danger {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.modal-close, .button.is-danger {
  color: white; /* 버튼 텍스트 색상 변경 */
}
.modal .card__name {
  font-size: 60px; /* modal 내부의 card__name 폰트 크기 증가 */
}

.modal .card__message {
  font-size: 40px; /* modal 내부의 card__message 폰트 크기 증가 */
}

@media(max-width: 2500px) {
  .deck {
    position: initial;
    top: 0;
  }

}
</style>
