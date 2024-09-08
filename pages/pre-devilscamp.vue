
<template>
    <div class="w-full z-0 bg-black section h-content" >
        <div data-aos="zoom-in" class="pt-16 md:pt-24 pb-8 md:pb-20 max-w-7xl mx-auto text-6xl md:text-8xl text-white text-center">
            <div class="opacity-70 text-2xl  md:text-5xl font-semibold md:font-bold tracking-tight pb-1 md:pb-2">ZeroPage DevilsCamp 2024</div>
            <span class="gradient-one pt-8 font-extrabold tracking-tight ">Ignite Your Passion</span>
            <div class="pt-8 font-medium text-white text-xl md:text-3xl">다양한 주제를 만나보아요!</div>

        </div>

        

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">About</div>
        <div data-aos="zoom-in" class="max-w-7xl mx-auto px-6 md:px-10">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 pb-16 md:pb-24 px-8 ">
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">Who</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">ZeroPage 회원 뿐만 아니라 중앙대학교 소프트웨어학부 모든 재학생과 ZeroPage 출신 선배님들은 모두 참석 가능합니다! </div>
                </div>
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">When & Where</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">6월 28일부터 6월 30일까지 중앙대학교 208관 415호 실습실에서 진행됩니다. </div>
                </div>
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">What</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">전공과 관련 있는 다양한 주제로 ZeroPage의 재학생들과 졸업하신 선배님들께서 지식과 경험을 공유합니다.  </div>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto pb-14 px-6 md:px-10 ">
            <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-10 mt-20 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">Conference</div>
            <div data-aos="zoom-in" class="mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 pb-16 md:pb-24 items-start">
                <Card1 class="mx-auto w-100 md:w-100" />
                <Card2 class="mx-auto w-100 md:w-100" />
                <Card3 class="mx-auto w-100 md:w-100" />
            </div>
            
        </div>

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-2xl pt-20 pb-20 md:text-3xl text-white font-medium px-6 md:px-10 text-center ">
            <a href="https://wiki.zeropage.org/wiki.php/%EB%8D%B0%EB%B8%94%EC%8A%A4%EC%BA%A0%ED%94%84/2023" class="hover:underline" target="blank">더 많은 정보가 궁금하신가요?</a>
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
.gradient-one{
  color: #79c0ff;
  background: linear-gradient(92.7deg,#e251ef -1.37%,#2929f6 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.keep-all{
  word-break: keep-all;
}

</style>