<template>
    <div class="w-full z-40  shadow-lg">
        <div class="max-w-screen-2xl px-3 md:px-7 py-3 md:py-9 border-gray-400 h-16 mx-auto flex items-center justify-between">
            
            <nuxt-link to='/'> <HeaderLogo class="drop-shadow-sm pl-2" /> </nuxt-link>
            
            <div>
                <ul class="flex space-x-2 items-center">
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-black transition hover:duration-300 font-normal">
                        <a href="https://wiki.zeropage.org/wiki.php" target="blank">Wiki</a>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-black transition hover:duration-300 font-normal">
                        <a href="https://zeropage.org/" target="blank">Main</a>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-black transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/recruit'}" replace>Recruit</nuxt-link>
                    </li>
                    <li class="py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-black transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/manual'}" replace>Manual</nuxt-link>
                    </li>
                    <!-- <li class="py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-black transition hover:duration-300 font-normal">
                        <a href="https://github.com/ZeroPage" target="blank">GitHub</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.lgtoxl{
    font-size: 1.145rem;
}
</style>