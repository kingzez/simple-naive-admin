<template>
  <div class="app-container">
    <n-layout has-sider>
      <sidebar />
      <n-layout>
        <div class="main-container">
          <navbar />
          <AppMain />
        </div>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NLayout } from 'naive-ui'
import AppMain from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    NLayout,
    AppMain,
    Sidebar,
    Navbar
  },
  setup() {
    return {

    }
  }
})
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;
}
</style>