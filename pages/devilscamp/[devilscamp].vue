<template>
    
    <div class="w-full z-0 bg-black section h-content" >

        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white ">
                {{data.title}} 
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400 pb-12">
                by {{data.speaker}}
            </div>

            <div class="my-10 grid ">
                <iframe class="rounded-lg w-full md:w-content h-60 sm:h-72 md:h-screen" :src="`${data.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        
    </div>

</template>

<script setup lang="ts">

const { path } = useRoute()
const { data: articles } = await useAsyncData(`devilscamp-${path}`, () => queryContent(path).findOne())


const data = computed(() => {
    return {
      title: articles.value?.title || 'no-title available',
      speaker: articles.value?.speaker || 'no-speaker available',
      img: articles.value?.img || 'no-img-available',
      youtube: articles.value?.youtube || 'no-img-available',
      order: articles.value?.order || 'no-order-available',
    }
})
</script>

<style scoped>

</style>
