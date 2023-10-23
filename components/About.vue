<template>
    <div>
        <div class="py-[90px] dark:bg-slate-800 dark:text-neutral-100">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-5/12 px-8">
                        <div class="relative h-[450px] w-full">
                            <div class="absolute -top-5 h-full w-[300px] left-16 border border-green-700"></div>
                            <div class="absolute -bottom-5 h-full w-[300px] left-10 border border-green-700"></div>
                            <div class="absolute right-0 top-1/2 transform -translate-y-1/2 overflow-hidden rounded-full z-10">
                                <img src="/image/about.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-7/12 pl-20">
                        <div class="w-9/12 h-full flex items-center">
                            <div class="">
                                <h3 class="text-green-700 mb-[12px]">About me</h3>
                                <h2 class="mb-[32px]">Let me introduce my self</h2>
                                <div class="text-base mb-[42px]">
                                    <p class="mb-2">
                                        I'm Sukmadana as a full-stack developer and UI designer based in Indonesia. I use Laravel, Wordpress, Vue/Nuxtjs and Figma. I solve problems through a combination of understanding user needs and creating interfaces in design or code, or both.
                                    </p>
                                    <p>
                                        As a website developer, I've had 6 years of experience in building websites and previously I worked in a multinational agency that focuses on creating websites or doing website maintenance for multi-national clients.
                                    </p>
                                </div>
                                <div class="flex items-center">
                                    <NuxtLink to="mailto:sukmadana2212@gmail.com" target="_blank" class="btn-icon">
                                        <UIcon name="i-simple-icons-gmail" />
                                    </NuxtLink>
                                    <NuxtLink to="https://instagram.com/sukma_dana" target="_blank" class="btn-icon">
                                        <UIcon name="i-simple-icons-instagram" />
                                    </NuxtLink>
                                    <NuxtLink to="https://www.linkedin.com/in/sukma-dana/" target="_blank" class="btn-icon">
                                        <UIcon name="i-simple-icons-linkedin" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>