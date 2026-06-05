<template>
  <div class="user-list-container">
    <div class="toolbar">
      <el-button type="primary" @click="handleAdd">新增用户</el-button>
    </div>
    <el-table :data="users" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === 'active' ? 'success' : 'info'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { User } from '@/types/user'
import { getUsers } from '@/api/user'

const users = ref<User[]>([])

onMounted(async () => {
  try {
    const response = await getUsers()
    users.value = response.data
  } catch (error) {
    ElMessage.error('获取用户列表失败')
  }
})

const handleAdd = () => {
  ElMessage.info('新增用户功能开发中')
}

const handleEdit = (row: User) => {
  ElMessage.info(`编辑用户 ${row.name}`)
}

const handleDelete = (row: User) => {
  ElMessage.warning(`删除用户 ${row.name}`)
}
</script>

<style scoped lang="scss">
@import '@/styles/user-list.scss';
</style>