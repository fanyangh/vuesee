<template>
  <el-container>
  <el-header>
    
    <navbar></navbar>
  </el-header>
  <el-container>
    <el-aside width="250px">
      
      <sidebar></sidebar>

    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>

</template>
<script>
import news from "../table/news"
import visitor from "../table/visitor"
import create from "../table/create"
import { Navbar, Sidebar, AppMain,ue } from './components'
export default {
  components:{
    visitor,
    news,
    create,
    Navbar, 
    Sidebar, 
    AppMain,
    ue
  }
}
</script>

<style rel="stylesheet/css">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin: 0;
    padding: 0;  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    min-height: 900px;
    max-height: 1500px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>





