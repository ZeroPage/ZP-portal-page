<template>
    
    <div class="w-full z-0 bg-zinc-900 section h-content" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
                Manual 
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400">
                무엇이 궁금하신가요? 
            </div>
        </div>

        <Category data-aos="fade-up" class="md:pt-10 md:pb-20 "/>
        <div data-aos="fade-up" class="py-60 text-white text-2xl font-semibold text-center"> 
            더 궁금한 게 있나요? ZP 회장님께 요청해봐요! 😀
        </div>
    </div>

</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'PageIndex',
  mixins: [aosMixin],
  async asyncData({ $content, params }) {
    const articles = await $content('article', params.slug)
      // .sortBy('createdAt', 'desc')
      .fetch();
    return {
      articles
    }
  },

    head: {
        title: 'Manual',
        htmlAttrs: {
        lang: 'ko'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'ZeroPage Manual' },
        { name: 'format-detection', content: 'telephone=no' }
        ]
    },

}
</script>

<style scoped>
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
