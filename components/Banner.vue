<template>
    <div>
        <div class="py-[120px] dark:bg-slate-800 dark:text-neutral-100">
            <div class="container">
                <div class="w-9/12">
                    <div class="mb-[32px] overflow-hidden">
                        <h1 class="title">
                            Hi, I'm a <span class="text-green-700">Fullstack</span> Web Developer
                        </h1>
                    </div>
                    <div class="mb-[48px] w-10/12 overflow-hidden">
                        <p class="text-2xl text">
                            Please do not hesitate to contact me if you need assistance with your projects or in resolving a problem.
                        </p>
                    </div>
                    <div class="flex items-center button-wrapper">
                        <NuxtLink to="mailto:sukmadana2212@gmail.com" target="_blank" class="btn-primary mr-10">
                            <span>Contact Me</span> <UIcon class="font-base align-middle font-bold" name="i-heroicons-chevron-right-solid"/>
                        </NuxtLink>
                        <NuxtLink to="https://github.com/sukmadana" target="_blank" class="text-green-700 font-bold flex items-center cursor-pointer hover:text-cyan-800 dark:hover:text-neutral-100 transition-colors">
                            <UIcon name="i-mdi-github text-2xl mr-2" /> <span>Github</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {$gsap} = useNuxtApp()
    onMounted(() => {
        $gsap.from('.title',{y:'100%', duration: 1, stagger: {grid: 'auto', amount: 0.1}})
        $gsap.from('.text',{y:'100%', duration: 1,delay: 0.5 })
        $gsap.from('.button-wrapper',{opacity: 0, duration: 0.6,delay: 1 })
    });
</script>