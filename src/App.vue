<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <el-container>
      <el-header class="header-style">
        <img src="./assets/logo.png">
        <div>node-server Test Demo</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar :item-list="routerList"></Sidebar>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  data () {
    return {
      routerList: [{
        name: 'index',
        url: '/'
      }, {
        name: 'requestTest',
        url: 'requestTest'
      }, {
        name: 'user',
        url: 'userTest'
      }]
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 900px;
}
.header-style {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #1f6b75;
  img {
    height: 100%;
  }
  div {
    color: #fff;
    font-size: 160%;
    font-weight: bold;
  }
}
</style>
