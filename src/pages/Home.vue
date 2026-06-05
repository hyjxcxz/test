<template>
  <div class="home-container">
    <el-header>
      <div class="header-content">
        <h1>首页</h1>
        <el-button type="danger" @click="handleLogout">退出登录</el-button>
      </div>
    </el-header>
    <el-main>
      <UserList />
    </el-main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import UserList from '@/components/UserList.vue'

const router = useRouter()

const handleLogout = () => {
  router.push('/login')
}
</script>

<style scoped lang="scss">
@import '@/styles/home.scss';
</style>