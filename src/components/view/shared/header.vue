<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item> 
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item>
      <el-submenu index="3" class="header-operations">
      <el-menu-item index="3-1">切换主题</el-menu-item>
      <el-menu-item index="3-2">下载主题</el-menu-item>
      <el-menu-item index="3-3">帮助</el-menu-item>
    </el-submenu>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
