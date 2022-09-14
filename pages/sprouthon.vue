<template>
    <div class="w-full z-0 bg-zinc-900 section h-content" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
                새싹톤
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400">
                새싹교실을 통해 배운 것들을 선보이는 자리입니다
            </div>
        </div>

        <div class="max-w-7xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-14 md:pb-24 mx-auto px-6">
            <div class="group hidden md:block">
              <div class=" flex items-center  py-5 md:py-8 ">
                <div class="sbox">
                  <img  class="profile" :src="require(`~/assets/resources/sprouthon/01.jpg`)" alt="">
                </div>
                <div class=" px-0 md:px-4 md:pl-9 ">
                  <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-green-400">TEAM-자바보시든지</p>
                  <a class="mb-1 md:mb-1.5 text-lg md:text-2xl font-semibold  text-white transition group-hover:text-green-300 group-hover:duration-500" href="https://github.com/hyun-hyang/SPROUTHON-YouCanGrabJAVA" target="blank">카페 키오스크 개발</a>
                  <p class=" text-sm md:text-base text-white custom-text">임지민 · 박창훈</p>
                </div>
              </div>
            </div>

            <div class="group hidden md:block">
              <div class=" flex items-center  py-5 md:py-8 justify-end">
                <div class=" px-0 md:px-4 md:pr-9 text-right">
                  <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-blue-400">TEAM-Champion</p>
                  <a class="mb-1 md:mb-1.5 text-lg md:text-2xl font-semibold  text-white transition group-hover:text-blue-300 group-hover:duration-500" href="https://github.com/Junyoungeun/GrowingBud" target="blank">새싹 키우기 (GrowingBud)</a>
                  <p class=" text-sm md:text-base text-white custom-text">전영은</p>
                </div>
                <div class="sbox">
                  <img  class="profile" :src="require(`~/assets/resources/sprouthon/02.jpg`)" alt="">
                </div>
              </div>
            </div>

            

            <div class="md:hidden">
              <img :src="require(`~/assets/resources/sprouthon/01.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
            </div>
            <div class="md:hidden text-center px-4 py-6">
              <a class="font-general-semibold text-xl text-white font-semibold mb-2 hover:text-green-400" href="https://github.com/hyun-hyang/SPROUTHON-YouCanGrabJAVA" target="blank">카페 키오스크 개발</a>
              <p class=" text-sm md:text-base text-white custom-text">임지민 · 박창훈</p>
            </div>

            <div class="md:hidden mt-4">
              <img :src="require(`~/assets/resources/sprouthon/02.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
              
            </div>
            <div class="md:hidden text-center px-4 py-6">
              <a class="font-general-semibold text-xl text-white font-semibold mb-2 hover:text-blue-400" href="https://github.com/Junyoungeun/GrowingBud" target="blank">새싹 키우기 (GrowingBud)</a>
              <p class=" text-sm md:text-base text-white custom-text">전영은</p>
            </div>

      </div>
    </div>
</template>

<style scoped>
.keepall{
    word-break: keep-all;
}

.profile {
  width: 100%;
  height: 100%;
  object-fit: 100%;
}
.sbox {
  width: 600px;
  height: 450px;
  border-radius: 0.75rem;
  overflow: hidden;
}

</style>