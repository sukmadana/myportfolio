<script lang="ts" setup>
  import Logo from "~/assets/svg/logo.svg?component";
  import LogoDark from "~/assets/svg/logo-dark.svg?component";
</script>

<template>
  <div class="sticky z-30 top-0">
    <div class="header w-full dark:bg-slate-800 py-10 bg-white">
      <div class="container">
        <div class="flex justify-between w-full">
          <div class="header-logo">
            <Logo class="h-[40px] dark:hidden" :fontControlled="false" />
            <LogoDark class="h-[40px] hidden dark:block" :fontControlled="false" />
          </div>
          <div class="header-action">
            <ColorModeButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

