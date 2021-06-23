<template>
  <div class="result-page">
    <n-result status="404" title="404 资源不存在" description="">
      <template #footer>
        <n-button @click="backToHome">回到首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NResult, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: '404',
  components: {
    NResult,
    NButton
  },
  setup() {
    const router = useRouter()

    return {
      status: ref(404),
      title: ref('404 资源不存在'),
      description: ref('生活总归带点荒谬'),
      backToHome() {
        router.push('/')
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.result-page {
  padding-top: 240px;
}
</style>