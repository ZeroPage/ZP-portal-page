<template>
    <div class="w-full bg-black py-80 text-white font-bold text-center">
        <div class="text-3xl mb-4">아직 준비중인 공간이에요.</div>
        <nuxt-link :to="{path: '/pre-jigeumgeuddae'}" class="text-2xl text-slate-400 mb-2 md:mb-3 hover:underline">2022년 지금그때 포스터 보러가기</nuxt-link>
    </div>
</template>

<script>
export default {
    head: {
        title: 'ZeroPage | 지금그때',
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

<style>

</style>