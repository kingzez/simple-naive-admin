<template>
  <div class="logo">
    <img :src="logo" alt="logo" />
    <div class="logo-title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Logo from '@/assets/img/logo.svg'

export default defineComponent({
  name: 'Logo',
  setup() {
    return {
      logo: ref(Logo),
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
  transition: all 0.2s ease;
  img {
    height: 32px;
    margin-left: 12px;
    margin-right: 14px;
    width: 32px;
  }
  &-title {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
  }
}
</style>
