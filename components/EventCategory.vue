<template>
    <div>
        <div class="max-w-7xl flex grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-auto px-4 sm:gap-8 pb-18 md:pb-8 md:gap-16">
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="oms">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/oms.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">OMS</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="sprouthon">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/sprouthon.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">새싹교실 & 새싹톤</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/devilscamp">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/devilscamp.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">데블스캠프</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/pre-angelscamp2023">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/angelscamp.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">엔젤스캠프</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/pre-jigeumgeuddae2023">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/jigeumgeuddae.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">지금그때</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl cursor-pointer mb-10 sm:mb-0 px-2 py-2">
                <nuxt-link to="/year-end-party">
                    <div class="hover:scale-110 transition duration-300">
                        <img src="/event/end-year-party.png" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-white font-semibold mb-2">기년회</p>
                    </div>
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
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
        background-color: #000000;
 }
</style>
