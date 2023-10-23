<template>
  <div
    class="page-wrapper"
    :class="`page-wrapper-${is_mobile ? 'mobile' : 'pc'}`"
  >
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { isMobile } from "@/utils";
const is_mobile = isMobile();
</script>
<style lang="less">

</style>
