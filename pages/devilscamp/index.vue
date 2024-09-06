<template>
    <div class="w-full z-0 bg-black section h-content" >

        <div class="pt-20 md:pt-15 pb-3 md:pb-12 max-w-7xl mx-auto px-6 ">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white text-center">
                Devils Camp
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400 text-center">
                2024 ZP의 데블스캠프 기록입니다.
            </div>
            <div class="font-normal text-base md:text-xl text-blue-300 text-right hover:text-blue-500 hover:underline">
                <nuxt-link :to="{path: '/pre-devilscamp'}" replace>2024 데블스캠프 포스터 보러가기</nuxt-link>
            </div>
        </div>

        <div class="max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mx-auto px-6 sm:gap-10 pb-18 md:gap-12">
            <div  class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-8 py-8 group " v-for="devilscamp in formattedData" :key="devilscamp.path">
                <nuxt-link :to='`/devilscamp/${devilscamp.path}`'>

                    <div class="">
                        <!-- <img class="rounded-t-xl border-none rounded-b-xl" :src="require(`/devilscamp/${devilscamp.img}`)" alt=""> -->
                        <NuxtImg
                        class="rounded-t-xl border-none rounded-b-xl"
                        :src="(`/devilscamp/${devilscamp.img}`)"
                        />
                    </div>
                    

                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/devilscamp').sort({ order: 1 }).find())
const formattedData = computed(() => {
  return data.value?.map((articles:any) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      speaker: articles.speaker || 'no-speaker available',
      img: articles.img || 'no-img-available',
      youtube: articles.youtube || 'no-img-available',
      order: articles.order || 'no-order-available',
    }
  }) || []
})
</script>

<style scoped>
.keepall{
    word-break: keep-all;
}

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
