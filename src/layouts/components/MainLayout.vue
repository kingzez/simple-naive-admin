<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
  setup() {

  }
})
</script>
<style lang="scss" scoped>
.main {
  height: calc(100% - 50px);
}
</style>