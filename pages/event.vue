<template>
    
    <div class="w-full z-0 bg-black section h-content md:pb-20" >

        <div data-aos="fade-right" class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6 text-center">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-white">
                Event 
            </div>
            <div class="font-normal text-base md:text-xl text-slate-400">
                ZeroPage의 행사를 알아보아요 
            </div>
        </div>


        <EventCategory data-aos="fade-up" class="md:pt-10 md:pb-20"/>
    </div>

</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'PageIndex',
  mixins: [aosMixin]
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

</style>
