
<template>
    <div class="w-full z-0 bg-black section h-content" >
        <div data-aos="zoom-in" class="pt-16 md:pt-40 pb-8 md:pb-20 max-w-7xl mx-auto text-6xl md:text-8xl text-white text-center">
            <div class="opacity-70 text-2xl  md:text-5xl font-semibold md:font-bold tracking-tight pb-1 md:pb-6">ZeroPage 지금그때</div>
            <div class="gradient-one pb-0 md:pb-2 font-extrabold tracking-tight md:text-8xl text-4xl">
                <vue-typer
                    :text='[
                    "TOGETHER, we get BETTER",
                    "ZP의 4번째 정규행사",
                    "모여라 ZeroPage!!",
                    "다같이 만드는 ZP 전통 행사",
                    ]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2500'
                    :erase-delay='300'
                    erase-style='clear'
                    :erase-on-complete='false'
                    caret-animation='blink'
                ></vue-typer>
            </div>
            
            <div class="pt-4 md:pt-8 font-medium text-white text-xl md:text-3xl ">중앙대학교 208관 101호</div>
            <div class="pt-4 md:pt-4 font-medium text-white text-xl md:text-3xl ">11월 26일(토) 14시</div>

        </div>
        <div  data-aos="zoom-in" class="max-w-4xl mx-auto pb-20 pt-4" style="text-align:center">
            <a href="https://forms.gle/CV9ib9DenG78EikEA" target="blank" class="button1">신청하기</a>
        </div>

        

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">About</div>
        <div data-aos="zoom-in" class="max-w-7xl mx-auto px-6 md:px-10">
            <p class="text-base md:text-2xl leading-loose md:leading-loose text-slate-300 keep-all text-center  ">
                "여러분의 지금이 우리의 그때보다 낫기를 바랍니다. 
                <br>곧 여러분의 지금은 그때가 될 것입니다." 
                <br>
                <br>"여러분이 후배의 지금을 위해 자신의 그때 이야기를 나눌 수 있길 바랍니다. 
                <br>우리의 그때보다는 그대들의 그때가 늘 좀 더 낫기를 바랍니다."
            </p>
        </div>

        <!-- <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">Info</div>
        <div data-aos="zoom-in" class="max-w-7xl mx-auto px-6 md:px-10">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pb-16 md:pb-24 px-8 text-center">
                <div class="h-content">
                    <div class="text-xl md:text-5xl text-slate-400 font-semibold mb-2 md:mb-3">신청</br>현황</div>
                    
                </div>
                <div class="h-content">
                    <div class="text-xl md:text-5xl text-slate-400 font-semibold mb-2 md:mb-3">34명</div>
                    
                </div>
                
            </div>
        </div> -->


        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-3xl md:text-4xl pt-16 mt-10 md:pt-20 md:mt-24 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">TimeTable</div>
        <Timetablej data-aos="zoom-in" class="md:mb-20 mb-0"/>

        <div data-aos="zoom-in" class="max-w-7xl mx-auto text-2xl pt-20 pb-20 md:text-3xl text-white font-medium px-6 md:px-10 text-center ">
            <a href="https://wiki.zeropage.org/wiki.php/%EC%A7%80%EA%B8%88%EA%B7%B8%EB%95%8C2022" class="hover:underline" target="blank">더 많은 정보가 궁금하신가요?</a>
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
  background: linear-gradient(92.7deg,#3961db -1.37%,#953ff7 90%);
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
  background: #953ff7;
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