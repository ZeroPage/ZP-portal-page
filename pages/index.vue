
<template>
    <div class="w-full z-0 bg-zinc-900 section h-content" >
        <div class="pt-16 pb-10 md:pt-24  md:pb-10 max-w-7xl mx-auto text-6xl md:text-9xl text-white text-center">
            <span class=" pt-8 font-extrabold tracking-tight ">ZeroPage</span>
        </div>

        <Search class="max-w-2xl"/>

        <div class=" flex space-x-1 md:space-x-4 pb-10 md:pb-20 md:pt-6 justify-center text-xs md:text-xl">
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#중앙대학교</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#소프트웨어학부</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#학술연구회</div>
                <div type="" class="hidden md:block  px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">#since1991</div>
        </div>

        <!-- 제로페이란? -->
        <div data-aos="fade-up" class="max-w-4xl mx-auto text-3xl md:text-4xl pt-24 mt-24 text-white mb-10 md:mb-14  font-medium px-6 md:px-10 text-center">What is ZeroPage?</div>
        <div data-aos="fade-up" class="max-w-4xl md:mx-auto bg-gray-800 rounded-lg py-5 pb-24 mb-4 text-base font-normal text-white leading-loose text-justify break-all px-6 mx-6 " role="alert">
            <strong>제로페이지는 공부하고자하는 뜻이 있는 사람들이 모인 일종의 인력의 장입니다. </strong>그 안에서 뜻이 같은 사람들을 만날수 있기를, 또는 자신이 아는 것에 대해 다른 사람들에게 전달해줄수 있기를, 또는 자신의 부족한 점을 다른 사람들로부터 얻어갈 수 있었으면 합니다. 개인의 이익들이 모여서 집단의 이익을 만들어가며, 집단의 이익을 추구하는 것이 곧 개개인들에게 이익이 되는 경지가 되었으면 합니다.
        </div>

        <!-- 연중행사 소개 -->
        <div data-aos="fade-up" class="max-w-4xl mx-auto text-3xl md:text-4xl pt-24 mt-24 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">Events</div>
        <Tabs data-aos="fade-up" class="max-w-4xl mx-auto px-6 pb-18"/>

        <!-- FAQ -->
        <div data-aos="fade-up" class="max-w-4xl mx-auto text-3xl md:text-4xl pt-24 mt-24 text-white mb-10 md:mb-14 font-medium px-6 md:px-10 text-center">FAQ</div>
        <Accordion data-aos="fade-up" class="max-w-4xl mx-auto px-6 pb-24"/>
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

.keep-all{
  word-break: keep-all;
}
</style>