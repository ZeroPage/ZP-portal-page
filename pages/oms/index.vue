<template>
    <div class="w-full z-0 bg-black section h-content" >
      <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
          <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
              OMS
          </div>
          <div class="font-normal text-base md:text-xl text-slate-400">
              ZP의 매주 수요일 OMS 발표자료를 볼 수 있어요!
          </div>
      </div>

      <div class="max-w-6xl mx-auto shadow-sm md:shadow rounded-2xl flex items-center mb-4 py-3 md:py-3.5 px-5 bg-white">
        <input
          v-model="searchTest"
          placeholder="Search"
          type="text"
          class="ml-3 bg-white flex-auto text-base text-gray-800 pr-3.5 md:pr-6 flex items-center placeholder-text-gray-400"
        >
      </div>
        

      <div  class="max-w-7xl grid grid-cols-1 colspan pb-10 md:pb-24 mx-auto px-6">
        <div class="group px-0 py-3 md:px-5 md:py-5 bg-transparent hover:bg-zinc-800 rounded-xl transition hover:duration-200" v-for="oms in paginatedData" :key="oms.path">
            <nuxt-link :to='`${oms.path}`'>
                <div class="block md:flex items-center md:justify-between px-4 md:px-6" >
                    <div class="text-white text-lg md:text-xl font-medium w-full md:w-3/6">{{oms.title}} </div>
                    <div class="text-slate-400 text-base w-2/6 text-left hidden md:block"> {{oms.date}}</div>
                    <div class="text-slate-400 text-sm md:text-base w-auto md:w-1/6 text-left md:text-right"> {{oms.speaker}}</div>
                </div>
            </nuxt-link>
        </div>
      </div>
        
      <div class="flex justify-center items-center space-x-6 text-white">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-400 ': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
        <Icon name="mdi:code-greater-than" size="30" :class="{ 'text-sky-400 ': pageNumber < totalPage }" />
      </button>
    </div>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/oms').sort({ _id: -1 }).find())

const elementPerPage = ref(10)
const pageNumber = ref(1)
const searchTest = ref('')

const formattedData = computed(() => {
  return data.value?.map((articles:any) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      speaker: articles.speaker || 'no-speaker available',
      date: articles.date || 'not-date-available',
    }
  }) || []
})

const searchData = computed(() => {
  return formattedData.value.filter((data:any) => {
    const lowerTitle = data.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedData = computed(() => {
  return searchData.value.filter((data:any, idx:any) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}





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
