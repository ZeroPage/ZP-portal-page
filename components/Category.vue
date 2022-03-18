<template>
    <div>
        <div class="max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 sm:gap-7 pb-18 md:pb-8">
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 ">
                <nuxt-link to="wiki">
                    <div>
                        <img :src="require(`~/assets/resources/category/zero-wiki.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Wiki</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 ">
                <nuxt-link to="main">
                    <div>
                        <img :src="require(`~/assets/resources/category/zero-main.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark font-semibold mb-2">Main</p>
                    </div> -->
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 ">
                <nuxt-link to="github">
                    <div>
                        <img :src="require(`~/assets/resources/category/zero-github.jpg`)" class="rounded-t-xl border-none rounded-b-xl"/>
                    </div>
                    <!-- <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">GitHub</p>
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