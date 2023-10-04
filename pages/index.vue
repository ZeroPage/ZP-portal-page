
<template>
    <!-- <div class="w-full z-0 bg-black section h-content" > -->
    <div class="z-0 bg-img section h-content" style="background-image: url(backgroundImage4.jpg)">
        <div class="pt-16 pb-10 md:pt-24  md:pb-10 max-w-7xl mx-auto text-6xl md:text-9xl text-white text-center">
            <span class=" pt-8 font-extrabold tracking-tight ">ZeroPage</span>
        </div>

        <Search class="max-w-3xl"/>

        <div class=" flex space-x-1 md:space-x-4 pb-10 md:pb-20 md:pt-6 justify-center text-xs md:text-xl">
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#중앙대학교</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#소프트웨어학부</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#학술연구회</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#since1991</div>
        </div>

        <!-- 제로페이란? -->
        <div data-aos="fade-up" class="max-w-6xl mx-auto text-3xl md:text-4xl pt-24 mt-24 text-white mb-10 md:mb-10 tracking-tight font-extrabold px-6  text-left">What is ZeroPage?</div>
        <div data-aos="fade-up" class="max-w-6xl md:mx-auto  pb-24 mb-4 text-lg font-normal text-white leading-loose text-justify break-all px-6 mx-6 " role="alert">
            <strong>제로페이지는 공부하고자하는 뜻이 있는 사람들이 모인 일종의 인력의 장입니다. </strong>그 안에서 뜻이 같은 사람들을 만날수 있기를, 또는 자신이 아는 것에 대해 다른 사람들에게 전달해줄수 있기를, 또는 자신의 부족한 점을 다른 사람들로부터 얻어갈 수 있었으면 합니다. 개인의 이익들이 모여서 집단의 이익을 만들어가며, 집단의 이익을 추구하는 것이 곧 개개인들에게 이익이 되는 경지가 되었으면 합니다.
        </div>

        <!-- 모집 -->
        <div data-aos="fade-up" class="max-w-6xl mx-auto text-3xl md:text-4xl pt-20 mt-24 text-white mb-10 md:mb-10 tracking-tight font-extrabold px-6  text-left">Recents</div>
        <div data-aos="fade-up" class="max-w-6xl mx-auto px-6" role="alert">
           
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-12 md:mb-24">
              <div class="rounded-lg h-80 md:h-96 section bg-img group" style="background-image: url(recent1.png)">
                <div class="block rounded-lg w-full h-full ">
                  <div class="px-6 md:px-11 py-6 md:py-10 absolute bottom-0 drop-shadow-xl text-white">
                    <div class="text-2xl md:text-3xl font-semibold keep-all">2022 엔젤스캠프</div>
                    <div class="pt-2">
                      <nuxt-link :to="{path: '/pre-angelscamp'}" class="text-base md:text-lg text-slate-300 font-normal group-hover:underline keep-all">보러가기</nuxt-link>
                      <!-- <span class="text-xs md:text-sm text-slate-300 font-normal pl-0.5 keep-all"> 안녕하세요</span>  -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded-lg h-80 md:h-96 section bg-img " style="background-image: url(recent2.png)">
                <div class="block rounded-lg w-full h-full  group">
                  <div class="px-6 md:px-11 py-6 md:py-10 absolute bottom-0 drop-shadow-xl text-white">
                    <div class="text-2xl md:text-3xl font-semibold keep-all">2022 지금그때</div>
                    <div class="pt-2">
                      <nuxt-link :to="{path: '/pre-jigeumgeuddae'}" class="text-base md:text-lg text-slate-300 font-normal group-hover:underline keep-all">보러가기</nuxt-link>
                      <!-- <span class="text-xs md:text-sm text-slate-300 font-normal pl-0.5 keep-all">하이하이</span>  -->
                    </div>
                  </div> 
                </div>
              </div>
            </div>
         </div>
        

        <!-- 연중행사 소개 -->
        <div data-aos="fade-up" class="max-w-6xl mx-auto text-3xl md:text-4xl pt-24 mt-24 tracking-tight text-white mb-10 md:mb-14 font-extrabold px-6  text-left">Events</div>
        <!-- <Tabs data-aos="fade-up" class="max-w-5xl mx-auto px-6 pb-18"/> -->

        <div data-aos="fade-up" class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 pb-16 md:pb-24 px-6  ">
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">정모 & OMS</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">함께하는 성장! 매주 수요일 정모에 참여하여 앎을 공유하고 다른 제로페이지 회원들을 만나보아요! </div>
          </div>
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">새싹교실 & 새싹톤</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">선후배간의 친목을 도모하고 학술 교류의 장입니다. 관심분야별 클래스 속에서 혼자서는 알 수 없었던 내용을 배우고 이를 뽐내보아요.</div>
          </div>
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">데블스캠프</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">제로페이지의 컨퍼런스 행사! 1기 선배님부터 여러분까지 다양한 사람의 경험과 현재 시장의 트렌드까지 배우고 공유할 수 있어요.</div>
          </div>
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">엔젤스캠프</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">평소에 갖고 있던 기발한 아이디어를 결과물로 만들어볼 수 있는 시간이에요!  시도하지 못한 아이디어를 서로 도와 뽐내볼까요?</div>
          </div>
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">지금그때</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">여러분의 지금이 우리의 그때보다 낫길 바라며 선후배들이 모여 이야기를 나누고 서로의 시선에서 경험을 나눕니다.</div>
          </div>
          <div class="h-content">
            <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">기년회</div>
            <div class="text-base md:text-lg text-slate-400 keep-all">저녁에 술 약속을 잡는 송년회나 망년회가 아닌 밝을 때 조용한 곳에 모여 한 해를 되돌아보며 앞으로의 내일을 계획합니다.</div>
          </div>
          
        </div>

        <!-- FAQ -->
        <div data-aos="fade-up" class="max-w-6xl mx-auto text-3xl md:text-4xl pt-24 mt-24 text-white mb-10 md:mb-4 font-extrabold px-6 md:px-6 text-left">Frequently asked questions</div>
        <!-- <Accordion data-aos="fade-up" class="max-w-4xl mx-auto px-6 pb-24"/> -->
          <div data-aos="fade-up" class="py-8 px-4 max-w-6xl mx-auto lg:px-6">
        <div data-aos="fade-up" class=" grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
                <div class="mb-10">
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        동아리 가입은 어떻게 하나요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400"><a class="underline" href="https://zeropage.org/">메인 사이트</a>
                    에 접속하셔서 회원가입 후 인사게시판에 '준회원 신청합니다'라는 제목으로 양식에 맞춰 글을 올리시면 회장단이 1-3일 내에 확인하고, 카카오톡 채팅방에 초대해드리고 있습니다.</p>
                </div>
                <div class="mb-10">                        
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        프로그래밍 경험이 없어도 동아리 내에서 활동할 수 있나요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">스터디마다 스터디원들에게 요구하는 최소 수준이 있긴 하지만, 다양한 스터디가 존재하니 괜찮습니다. 처음부터 잘하는 사람은 없으니까요.
                    혹은 원하는 스터디나, 본인에게 맞는 스터디가 '없다!'면 축하드립니다. 그 분야에 대해서 가장 잘 아는 사람이군요! 직접 스터디를 만들어보시는 건 어떨까요?</p>
                </div>
                <div class="mb-10">
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        신입생이 아닌 고학년이어도 가입가능한가요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">저희는 학년에 무관하게 프로그래밍에 관심이 있는 누구라면 모두 제로페이지에 가입가능합니다!</p>
                </div>
                
            </div>
            <div>
              <div class="mb-10">
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        동아리에서는 무엇을 하나요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">제로페이지에서는 매주 수요일마다 정기 모임을 가집니다. 정기 모임에서는 동아리 주요 행사들(데블스캠프, 새싹교실 등)에 대한 공지, 진행상황 보고를 하고 OMS도 같이 진행합니다.
                    OMS는 제로페이지 회원들이 본인의 관심사에 대해 작은 세미나를 여는 것으로 흥미로운 주제들에 대해 10-30분 정도 발표하는 것입니다.
                    <a class="underline" href="https://wiki.zeropage.org/wiki.php">제로페이지 위키</a>에 'oms'라고 검색하시면 자세한 설명이 나오니 한번 읽어보세요!</p>
                </div>
              
                <div class="mb-10">
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        모든 행사에 필수적으로 참여해야하나요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">아닙니다! 본인의 스케줄에 맞게 원하는 행사만 골라서 참여하실 수 있습니다!</p>
                </div>
                <div class="mb-10">
                    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                        <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        동아리 회비가 있나요?
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">없습니다! 감사하게도 졸업하신 선배님들이 '지피지기'라는 이름으로 필요할 때마다 자금을 지원해주신 덕에 무리 없이 유익한 행사들을 진행할 수 있습니다.</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>    
</template>

<script>
import aosMixin from '~/mixins/aos';

export default {
  name: 'PageIndex',
  mixins: [aosMixin],
}
</script>

<style scoped>
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
        background-color: #000000;
 }
.keep-all{
  word-break: keep-all;
}
.section {
  position: relative;
}
</style>