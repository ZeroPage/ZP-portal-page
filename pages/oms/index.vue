<template>
    <div class="w-full z-0 bg-zinc-900 section h-content" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
                OMS
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400">
                ZP의 매주 수요일 정모 기록을 볼 수 있어요!
            </div>
        </div>

        <div data-aos="fade-left" class="max-w-7xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-10 md:pb-24 mx-auto px-6">
            <div class="group " v-for="oms of omss" :key="oms">
                <nuxt-link :to='`oms/${oms.slug}`'>
                    <div class="article-inner flex items-center my-2 md:py-4 bg-gray-800 rounded-3xl">
                        <div class="px-0 md:px-6 md:pl-9 md:py-0  pl-8 py-4">
                            <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-blue-400 font-semibold">{{oms.date}}</p>
                            <h2 class="mb-1 md:mb-1.5 text-lg md:text-xl font-semibold  text-white transition group-hover:text-blue-300 group-hover:duration-500">{{ oms.title }}</h2>
                            <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-white">{{oms.speaker}} · ZeroPage</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>

        
    </div>

</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
    name: 'PageIndex',
  mixins: [aosMixin],
  async asyncData({ $content, params }) {
    const omss = await $content('oms', params.slug)
      .sortBy("date", "desc")
      .fetch();
    return {
      omss
    }
  },
    head: {
        title: 'ZeroPage OMS',
        htmlAttrs: {
        lang: 'ko'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'ZeroPage OMS' },
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