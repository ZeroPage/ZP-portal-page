<template>
<div class="w-full bg-gray-50">
    <div class="w-full z-40 bg-gray-100 shadow-lg">
        <div class="max-w-screen-2xl px-3 md:px-7 py-3 md:py-9 border-gray-400 h-16 mx-auto flex items-center justify-between">
            
            <nuxt-link to='/'> <HeaderLogo class="drop-shadow-sm pl-2" /> </nuxt-link>
            
            <div>
                <ul class="flex space-x-4 items-center">
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-gray-800 lgtoxl hover:text-gray-500 transition hover:duration-300 font-normal">
                        <a href="https://wiki.zeropage.org/wiki.php" target="blank">Wiki</a>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-gray-800 lgtoxl hover:text-gray-500 transition hover:duration-300 font-normal">
                        <a href="https://zeropage.org/" target="blank">Main</a>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-gray-800 lgtoxl hover:text-gray-500 transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/recruit'}" replace>Recruit</nuxt-link>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block ttext-gray-800 lgtoxl hover:text-gray-500 transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/manual'}" replace>Manual</nuxt-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div class="related max-w-5xl mx-auto pt-28 pb-12 md:pb-24 md:pt-44">
        
        <div class="max-w-3xl mx-auto">
            <p class="text-base md:text-xl text-gray-400 text-center mb-2">
                <nuxt-link :to="{path: `/${article.category}`}" class="hover:underline">
                    {{article.category}}
                </nuxt-link>
            </p>
            <p class="custom-text leading-snug md:leading-normal px-5 md:px-0 mb-2 text-2xl md:text-5xl text-center text-gray-800 title font-semibold">{{article.title}}</p>
            <p class="text-base md:text-xl text-gray-500 text-center mb-16">
                by ZeroPage
            </p>
        </div>

        <nuxt-content :document="article" class="prose max-w-5xl custom-text px-6"/>


        <Prevnext :prev="prev" :next="next" />

    </div>
</div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('article', params.slug)
        .fetch();

        const [prev, next] = await $content('article')
        .only(['title', 'slug'])
        // .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch();
        
        return { article, prev, next }
    },
    methods: {
        // formatDate(date) {
        // const options = { year: 'numeric', month: 'long', day: 'numeric' }
        // return new Date(date).toLocaleDateString('en', options)
        // }
    },
    head() {
        return {
            title: this.article.title,
            desciption: this.article.description,
            htmlAttrs: {
            lang: 'ko'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 't-type',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
            hid: 'og-type',
            property: 'og:type',
            content: 'website'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: this.article.title
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: this.article.description
            },
            {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://raw.githubusercontent.com/ZeroPage/ZP-portal-page/tree/main/static/card_image.png'
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: 'https://raw.githubusercontent.com/ZeroPage/ZP-portal-page/tree/main/static/card_image.png'
            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.article.title
            },
            {
            hid: 'og:url',
            name: 'og:url',
            content: `https://zp-portal.org/manual/${this.$route.params.slug}`
            },
            ],
        }
    },
}
</script>

<style scpoed>
img {
    margin-left: auto;
    margin-right: auto;
}
.custom-text{
    word-break: keep-all;
}
.box {
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.lgtoxl{
    font-size: 1.145rem;
}
</style>