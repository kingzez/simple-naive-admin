<template>
  <NButton>开关</NButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: {
    NButton
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
