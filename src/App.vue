<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider, NMessageProvider } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: { NConfigProvider, NMessageProvider }
})
</script>
