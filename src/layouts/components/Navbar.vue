<template>
  <header class="navbar">
    <div class="navbar-left">
      <n-breadcrumb>
        <n-breadcrumb-item
          v-for="{ label, path } in breadcrumbs"
          :key="path"
          @click="routeTo(path)"
        >
          {{ label }}
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="navbar-right">
      <n-dropdown trigger="hover" @select="handleSelect" :options="options">
        <div class="user-dropdown">
          <n-avatar
            circle
            size="small"
            :src="user.avatar"
          />
          <span class="username">{{ user.username }}</span>
        </div>
      </n-dropdown>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { NBreadcrumb, NBreadcrumbItem, NAvatar, NDropdown, useMessage } from 'naive-ui'

export default defineComponent({
  name: 'Navbar',
  components: {
    NBreadcrumb,
    NBreadcrumbItem,
    NAvatar,
    NDropdown
  },
  setup() {
    const message = useMessage()
    const router = useRouter()
    return {
      // todo get current router data
      breadcrumbs: reactive([
        {
          label: '首页',
          path: '/'
        },
        {
          label: '分析页',
          path: '/analysis'
        }
      ]),
      // todo get user data from store
      user: reactive({
        username: 'Vincent W',
        avatar: 'https://kingzez.com/images/header.png'
      }),
      options: [
        {
          label: '退出系统',
          key: 'logout',
        }
      ],
      routeTo(path: string) {
        router.push({ path })
      },
      handleSelect(key: string) {
        message.info(key)
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.navbar {
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  &-left {
    padding: 0 20px;
  }
  &-right {
    padding: 0 20px;
    .user-dropdown {
      display: flex;
      align-items: center;
    }
    .username {
      margin-left: 10px;
    }
  }
}
</style>