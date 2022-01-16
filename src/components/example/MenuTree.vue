<template>
  <div>
    <template v-for="menu in menuData">
      <el-menu-item
        class="menu-item"
        v-if="!menu.children"
        :key="menu.key"
        :index="menu.key"
      >
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
      <el-submenu
        class="submenu"
        :key="menu.key"
        :index="menu.key"
        v-if="menu.children"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.title }}</span>
        </template>
        <menu-tree :menuData="menu.children"></menu-tree>
      </el-submenu>
      <!-- <el-menu-item class="menu-item" v-else :key="menu.key" :index="menu.key">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item> -->
    </template>
  </div>
</template>
<script>
export default {
  name: "MenuTree",
  props: ["menuData"],
};
</script>
<style lang="scss" scoped>
.submenu,
.menu-item {
  text-align: left;
  i {
    margin-right: 10px;
  }
}
</style>
