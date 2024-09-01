<template>
    
    <div class="w-full z-0 bg-black section h-content" >

        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white ">
                {{data.title}} 
            </div>
            <div class="font-normal text-base md:text-xl text-white pb-12">
                by {{data.speaker}}
            </div>

            <div class="py-10 grid justify-items-stretch">
                <embed :src="`/oms/${data.pdf}`" height="750px"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const { path } = useRoute()
const { data: articles } = await useAsyncData(`oms-${path}`, () => queryContent(path).findOne())



const data = computed(() => {
  return {
    title: articles.value?.title || 'no-title available',
    date: articles.value?.date || 'no-date-available',
    speaker: articles.value?.speaker || 'no-speaker-available',
    pdf: articles.value?.pdf || 'no-pdf-available',
  }
})
</script>

<style scoped>

</style>