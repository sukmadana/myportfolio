<template>
    <div>
        <div class="py-[90px] dark:bg-slate-800 dark:text-slate-100">
            <div class="container">
                <div class="text-center mb-[60px]">
                    <h2 class="text-green-700">Skills</h2>
                </div>
                <div class="flex flex-wrap -mx-[15px]">
                    <div class="w-4/12 px-[15px]">
                        <div>
                            <div class="relative flex justify-end">
                                <Laravel class="h-[100px]" />
                            </div>
                            <div class="content-header border-b border-green-700 mb-[24px]">
                                <h3>Laravel</h3>
                            </div>
                            <div>
                                I've been using Laravel since 2017, and I've just completed a few freelance projects.
                            </div>
                        </div>
                    </div>
                    <div class="w-4/12 px-[15px]">
                        <div>
                            <div class="relative flex justify-end">
                                <Wordpress class="!h-[100px] !w-[100px]" />
                            </div>
                            <div class="content-header border-b border-green-700 mb-[24px]">
                                <h3>Wordpress</h3>
                            </div>
                            <div>
                                Working with Wordpress for three years while working at a multi-national agency
                            </div>
                        </div>
                    </div>
                    <div class="w-4/12 px-[15px]">
                        <div>
                            <div class="relative flex justify-end">
                                <Javas class="h-[100px]" />
                            </div>
                            <div class="content-header border-b border-green-700 mb-[24px]">
                                <h3>Javascript</h3>
                            </div>
                            <div>
                                Aside from javascript libraries like vue js, I'm also interested of animation libraries like GSAP, Sal js, and others.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import Laravel from "~/assets/svg/laravel.svg?component";
    import Wordpress from "~/assets/svg/wordpress.svg?componentext";
    import Javas from "~/assets/svg/javascript.svg?component";
</script>