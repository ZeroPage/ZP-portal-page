<template>
    
    <div class="w-full z-0 bg-black section h-content" >

        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white ">
                {{devilscamp.title}} 
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400 pb-12">
                by {{devilscamp.speaker}}
            </div>

            <div class="my-10 grid ">
                <iframe class="rounded-lg w-full md:w-content h-60 sm:h-72 md:h-screen" :src="`${devilscamp.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        
    </div>

</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const devilscamp = await $content('devilscamp', params.slug)
        .fetch();
        return { devilscamp }
    },
    head: {
        title: 'ZeroPage | 데블스캠프',
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

</style>
