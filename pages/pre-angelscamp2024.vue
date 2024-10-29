
<template>
    <div class="w-full z-0 bg-black section h-content" >
        <div data-aos="zoom-in" class="pt-16 md:pt-40 pb-8 md:pb-20 max-w-7xl mx-auto text-6xl md:text-8xl text-white text-center">
            <div class="opacity-70 text-2xl  md:text-5xl font-semibold md:font-bold tracking-tight pb-1 md:pb-6">ZeroPage Angels Camp 2024</div>
            <div class="gradient-one font-extrabold tracking-tight md:text-8xl text-4xl">
                <vue-typer
                    :text='[
                    "Do whatever you want",
                    "ZP의 3번째 정규행사",
                    "ZP가 모여 펼치는 코딩 축제"
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

            <div class="pt-4 md:pt-8 font-medium text-white text-xl md:text-3xl ">11월 22일 20시 | 서울 서초구 방배동 528-82 B1층 오션스타</div>


        </div>
        <div  data-aos="zoom-in" class="max-w-4xl mx-auto pb-20 pt-4" style="text-align:center">
            <a href="https://forms.gle/3XpddhyQoMNJKMKD6" target="blank" class="button1">신청하기</a>
        </div>

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">About</div>
        <div data-aos="zoom-in" class="max-w-7xl mx-auto px-6 md:px-10">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 pb-16 md:pb-24 px-8 ">
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">Who</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">ZeroPage 회원이라면 누구나 참석 가능합니다! </div>
                </div>
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">When & Where</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">11월 22일 20시 </br>서울 서초구 방배동 528-82 B1층 오션스타</div>
                </div>
                <div class="h-content">
                    <div class="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-3">What</div>
                    <div class="text-base md:text-lg text-slate-400 keep-all">평소에 아이디어가 떠올라서 만들었으면 좋겠다라는 생각은 했으나 바쁘다고, 혹은 어렵다고 하지 못 했던 것들을 공부하고 만드는 자리입니다. </div>
                </div>
            </div>
        </div>

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">TimeTable</div>
        <Timetable data-aos="zoom-in" class="md:mb-20 mb-0"/>

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-2xl pt-20 pb-20 md:text-3xl text-white font-medium px-6 md:px-10 text-center ">
            <a href="https://wiki.zeropage.org/wiki.php/AngelsCamp/2023" class="hover:underline" target="blank">더 많은 정보가 궁금하신가요?</a>
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
  background: linear-gradient(92.7deg,#32bf61 -1.37%,#3f64f7 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.keep-all{
  word-break: keep-all;
}
.button1{
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #3f64f7;
  color: white;
  font-size: 16pt;
  font-weight: bold;
  border-radius: 10px;
}
.button1:hover{
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #3f64f7;
  background: white;
  color:#3f64f7;
  font-size: 16pt;
  font-weight: bold;
  border-radius: 10px;
}

>>> .vue-typer .custom.char.selected {
  @apply bg-blue-400 text-white;
}
</style>
