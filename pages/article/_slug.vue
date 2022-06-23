<template>
<div class="w-full bg-zinc-900">
    <div class="related max-w-5xl mx-auto pt-28 pb-12 md:pb-24 md:pt-44">
        
        <div class="max-w-3xl mx-auto">
            <p class="text-base md:text-xl text-white text-center mb-2">
                <nuxt-link :to="{path: `/${article.category}`}" class="hover:underline">
                    {{article.category}}
                </nuxt-link>
            </p>
            <p class="custom-text leading-snug md:leading-normal px-5 md:px-0 mb-2 text-2xl md:text-4xl text-center text-white title font-semibold">{{article.title}}</p>
            <p class="text-base md:text-xl text-white text-center mb-16">
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
            content: 'https://raw.githubusercontent.com/ZeroPage/ZP-portal-page/main/static/og_image1.jpg'
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: 'https://raw.githubusercontent.com/ZeroPage/ZP-portal-page/main/static/og_image1.jpg'
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