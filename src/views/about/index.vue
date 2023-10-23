<template>
  <div class="flex-column-page-wrap">
    <div class="test">我是m_testIndex About页面 测试... mobile 和 pc</div>
  </div>
</template>

<script setup lang="ts" name="About">
/* name: 不需要 增加 m || p 前缀 */
</script>

<style scoped lang="less">
/* 通用 */
.test {
  width: 375mpx;
  /*height: 20px;*/
  height: 187.5mpx;
  background: pink;
  font-size: 12mpx;
}
/* mobile 专用 */
.page-wrapper-mobile {
}
/* pc 专用 */
.page-wrapper-pc {
  .test {
    width: 1920dpx;
    height: 960dpx;
    background: green;
  }
}
</style>
