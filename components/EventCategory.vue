<template>
    <div>
        <div class="max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-4 sm:gap-4 pb-18 md:pb-8">
            <div class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="oms">
                    <div>
                        <img :src="require(`~/assets/resources/category/oms.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">OMS</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="sprouthon">
                    <div>
                        <img :src="require(`~/assets/resources/category/sprouthon.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">새싹톤</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/devilscamp">
                    <div>
                        <img :src="require(`~/assets/resources/category/devilscamp.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">Devils Camp</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/angelscamp">
                    <div>
                        <img :src="require(`~/assets/resources/category/angelscamp.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">Devils Camp</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl border-2 border-zinc-900 hover:border-white cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/jigeumgeuddae">
                    <div>
                        <img :src="require(`~/assets/resources/category/jigeumgeuddae.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">Devils Camp</p>
                    </div> -->
                </nuxt-link>
            </div>
             
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>