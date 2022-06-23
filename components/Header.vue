<template>
    <div class="w-full z-40 bg-zinc-900 shadow-lg">
        <div class="max-w-screen-2xl px-3 md:px-7 py-3 md:py-9 border-gray-400 h-16 mx-auto flex items-center justify-between">
            <nuxt-link to='/'> <HeaderLogo class="drop-shadow-sm pl-2" /> </nuxt-link>
            
            <div>
                <ul class="flex space-x-2 items-center">
                    <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-blue-500 lgtoxl border-2 border-blue-500 hover:border-blue-100 hover:text-blue-100 transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/devils'}" replace>Devils Camp</nuxt-link>
                    </li>
                    <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-yellow-300 transition hover:duration-300 font-normal">
                        <a href="https://wiki.zeropage.org/wiki.php" target="blank">Wiki</a>
                    </li>
                    <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-green-400 transition hover:duration-300 font-normal">
                        <a href="https://zeropage.org/" target="blank">Main</a>
                    </li>
                    <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-white lgtoxl hover:text-orange-400 transition hover:duration-300 font-normal">
                        <nuxt-link :to="{path: '/manual'}" replace>Manual</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="md:hidden flex content-center">
                <button @click="drawer">
                <Menu class="mr-0.5"/>
                </button>
            </div>

            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                    <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
                </div>
            </transition>

            <aside class="p-5 transform top-0 left-0 w-64 bg-zinc-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
                
                <div class="close">
                <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
                    <Close />
                </button>
                </div>

                <div @click="isOpen = false" class="flex w-full pt-12 pb-8 items-center justify-center">
                    <HeaderLogo class="h-6" />
                </div>

                <ul class="mt-4">
                    <li><nuxt-link :to="{path: '/devils'}" replace @click="isOpen = false" class="text-white my-3 inline-block w-full text-center">Devils Camp</nuxt-link></li>
                    <li><a href="https://wiki.zeropage.org/wiki.php" @click="isOpen = false" class="text-white my-3 inline-block w-full text-center">Wiki</a></li>
                    <li><a href="https://zeropage.org/" @click="isOpen = false" class="text-white my-3 inline-block w-full text-center">Main</a></li>
                    <li><nuxt-link :to="{path: '/manual'}" replace @click="isOpen = false" class="text-white my-3 inline-block w-full text-center">Manual</nuxt-link></li>
                </ul>

            </aside>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        isOpen: false
        };
    },
    methods: {
        drawer() {
        this.isOpen = !this.isOpen;
        }
    },
    watch: {
        isOpen: {
        immediate: true,
        handler(isOpen) {
            if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
            }
        }
        }
    },
    mounted() {
        document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    }
    };
</script>

<style scoped>
.lgtoxl{
    font-size: 1.145rem;
}
</style>