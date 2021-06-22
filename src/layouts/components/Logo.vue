<template>
  <div class="logo">
    <img src="https://www.naiveui.com/assets/naivelogo.93278402.svg" alt="logo">
    <div class="logo-title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Logo',
  setup() {
    return {
      title: ref('SNAdmin') // todo make title config
    }
  }
})
</script>
<style lang="scss" scoped>
.logo {
  height: 48px;
  padding: 10px 7px 10px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .2s ease;
  img {
    height: 32px;
    margin-left: 12px;
    margin-right: 14px;
    width: 32px;
  }
  &-title {
    font-size: 16px;
    font-weight: 700;
    transition: all .5s;
  }
}
</style>