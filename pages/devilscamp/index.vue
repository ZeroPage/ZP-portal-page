<template>
    <div class="w-full z-0 bg-black section h-content" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-12 max-w-7xl mx-auto px-6 ">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white text-center">
                Devils Camp
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400 text-center">
                2023 ZP의 데블스캠프 기록입니다.
            </div>
            <div class="font-normal text-base md:text-xl text-blue-300 text-right hover:text-blue-500 hover:underline">
                <nuxt-link :to="{path: '/pre-devilscamp'}" replace>올해의 데블스캠프를 알아보아요!</nuxt-link>
            </div>
        </div>

        <div data-aos="fade-up" class="max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mx-auto px-6 sm:gap-7 pb-18 md:pb-8">
            <div  class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-4 py-4 group" v-for="devilscamp of devilscamps" :key="devilscamp">
                <nuxt-link :to='`devilscamp/${devilscamp.slug}`'>

                    <div class="">
                        <img class="rounded-t-xl border-none rounded-b-xl" :src="require(`~/assets/resources/devilscamp/${devilscamp.img}`)" alt="">
                    </div>
                    <div class="text-center px-4 py-6">
                        <h2 class="mb-1 md:mb-1.5 text-lg md:text-xl font-semibold  text-white transition group-hover:text-blue-400 group-hover:duration-500">{{ devilscamp.title }}</h2>
                        <p class=" text-sm md:text-base text-white custom-text">{{devilscamp.speaker}}</p>
                    </div>

                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const devilscamps = await $content('devilscamp', params.slug)
      .sortBy('order')
      .fetch();
    return {
      devilscamps
    }
  },
    head: {
        title: 'ZeroPage DevilsCamp',
        htmlAttrs: {
        lang: 'ko'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'ZeroPage DevilsCamp' },
        { name: 'format-detection', content: 'telephone=no' }
        ]
    },
}
</script>
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
  width: 212px;
  height: 141.33px;
  border-radius: 0.75rem;
  overflow: hidden;
}

</style>
