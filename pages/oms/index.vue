<template>
    <div class="w-full z-0 bg-black section h-content" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
                OMS
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400">
                ZP의 매주 수요일 OMS 발표자료를 볼 수 있어요!
            </div>
        </div>

        <div  class="max-w-7xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-10 md:pb-24 mx-auto px-6">
        
            <div class="group px-0 py-3 md:px-5 md:py-5 bg-transparent hover:bg-zinc-800 rounded-xl transition hover:duration-200" v-for="oms of omss" :key="oms">
                <nuxt-link :to='`oms/${oms.slug}`'>
                    <div class="block md:flex items-center md:justify-between px-4 md:px-6" data-aos="fade-up">
                        <div class="text-white text-lg md:text-xl font-medium w-full md:w-3/6">{{oms.title}} </div>
                        <div class="text-slate-400 text-base w-2/6 text-left hidden md:block"> {{oms.date}}</div>
                        <div class="text-slate-400 text-sm md:text-base w-auto md:w-1/6 text-left md:text-right"> {{oms.speaker}}</div>
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
        title: 'ZeroPage | OMS',
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