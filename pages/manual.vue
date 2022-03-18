<template>
    
    <div class="w-full z-0 bg-img section h-content" style="background-image: url(bg-img3.jpg)">
        <Header />
        <div class="pt-10 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-gray-800">
                Manual
            </div>
            <div class="font-normal text-base md:text-xl text-gray-600">
                무엇이 궁금하신가요? 
            </div>
        </div>

        <Search />

        <Category class="pt-10"/>
        
        <Footer />
    </div>

</template>

<script>
export default {
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
        { hid: 'description', name: 'description', content: 'MinJun Choi\'s blog' },
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
