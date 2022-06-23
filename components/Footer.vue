<template>
    <footer class="w-full bg-zinc-900 py-11 md:py-14 md:pt-20 md:pb-24 px-2 md:px-5">
        
        <div class="max-w-7xl mx-auto block md:flex relative px-0 md:px-4">

            <div class="justify-around md:justify-start px-8 md:px-0 items-start flex">
                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-semibold text-white">관련 사이트</li>
                    <li class="mb-1.5 font-normal text-white hover:underline"><a href="https://zeropage.org/">Main</a></li>
                    <li class="mb-1.5 font-normal text-white hover:underline"><a href="https://wiki.zeropage.org/wiki.php">Wiki</a></li>
                </ul>

                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-semibold text-white">문의</li>
                    <li class="mb-1.5 font-normal text-white hover:underline"><a href="http://pf.kakao.com/_Exoxcxib">카카오톡</a></li>
                </ul>
            </div>

            <nuxt-link to="/" class="hidden md:block flex justify-center md:absolute md:top-0 md:right-0 md:items-center md:m-0">
                <div class=""><HeaderLogo/></div>
            </nuxt-link>

            <ul class="flex justify-center md:absolute md:bottom-0 md:right-0 md:block mt-10 md:mt-0">
                <li class="text-xs md:text-sm font-normal text-white">Developed by 
                    <a class="underline" href="https://github.com/minjun0430">MinJun Choi</a>, 
                    <a class="underline" href="https://github.com/ktasha45">ktasha45</a></li>
            </ul>

        </div>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
</style>