<template>
  <div class="menu-wrapper">
    <el-row class="tac">
  
  <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>访问者</span>
        </template>
        <el-menu-item-group>
          <template slot="title">访问者</template>
          <el-menu-item index="1-1" to="/visitor"><router-link to="/visitor">列表</router-link></el-menu-item>
          <!-- <el-menu-item index="1-2">显示</el-menu-item> -->
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">
            <el-menu-item >按条件显示</el-menu-item>
          </template>
          <el-menu-item index="1-4-1">终端</el-menu-item>
          <el-menu-item index="1-4-2">时间</el-menu-item>
          <el-menu-item index="1-4-3">城市</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <el-menu-item >
            <i class="el-icon-menu"></i>
            <span slot="title">新闻列表</span>
          </el-menu-item>

        </template>
          
        
        <el-menu-item-group>
          <template slot="title">新闻列表</template>
          <el-menu-item index="2-1"><router-link to="/news">最新新闻</router-link></el-menu-item>
          <!-- <el-menu-item index="2-1"><router-link to="/create">上传</router-link></el-menu-item> -->
          <!-- <el-menu-item index="2-2"></el-menu-item> -->
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">
            <el-menu-item >新闻操作</el-menu-item>
          </template>
          <!-- <el-menu-item index="2-4-1">修改</el-menu-item> -->
          <el-menu-item index="2-4-1"><router-link to="/create">上传</router-link></el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>

