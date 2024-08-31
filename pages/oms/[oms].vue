<template>
    
    <div class="w-full z-0 bg-black section h-content" >

        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white ">
                {{oms.title}} 
            </div>
            <div class="font-normal text-base md:text-xl text-white pb-12">
                by {{oms.speaker}}
            </div>

            <div class="py-10 grid justify-items-stretch">
                <embed :src="`/pdf/${oms.pdf}`" height="750px"/>
            </div>
        </div>

        
    </div>

</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  let oms = queryContent().where({ _path: path }).findOne();
  

  return {
    oms: await oms,
    
  };
});

</script>

<style scoped>

</style>
