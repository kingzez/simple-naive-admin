<template>
  <n-config-provider :theme="darkTheme">
    <RouterView />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: { NConfigProvider}
})
</script>
