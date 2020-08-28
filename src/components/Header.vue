<!--
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 16:49:13
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-27 17:53:34
-->
<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Hello World!',
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
