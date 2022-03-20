<template>
    
    <div class="w-full z-0 bg-img section h-content" style="background-image: url(bg-img3.jpg)">
        <Header />
        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-gray-800">
                Manual 
            </div>
            <div class="font-normal text-base md:text-xl text-gray-600">
                무엇이 궁금하신가요? 
            </div>
        </div>

        <Search />

        <Category class="md:pt-10 md:pb-20"/>
        <div class="py-60 text-black text-2xl font-semibold text-center"> 
            더 궁금한 게 있나요? ZP 회장님께 요청해봐요! 😀
        </div>
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
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        background-size:  cover;
        background-color: #FFFFFF;
 }
 .section {
  position: relative;
}
</style>
