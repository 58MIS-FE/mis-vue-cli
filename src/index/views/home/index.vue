<template>
  <div class="home-index">    
    <el-container style="width:100%">
     
      <!-- 侧边栏部分 -->
      <el-aside width>
          <Menu/>
      </el-aside>

       <!-- 右侧部分 -->
      <el-container>

        <el-header>
          <Headers/>
        </el-header>

        <el-main>
            <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入左侧菜单导航组件
import Menu from "../../common/menu.vue";
// 引入顶部组件
import Headers from "../../common/header.vue";
export default {
  components: {
    Menu,
    Headers,
  },
  data() {
    return {
    };
  },
  mounted() {

    
  },
  methods: {
 
  }
};
</script>
<style scoped>
.el-header {
  background: #fffeff;
  height: 48px!important;
  line-height: 48px;
  -webkit-box-shadow: 0px 0px 7px 0px rgb(223, 223, 224);
  box-shadow: 0px 0px 7px 0px rgb(223, 223, 224);
}

.home-index .el-aside {
  background-color: rgb(250, 250, 253);
  min-width: 65px;
  /* width: 208px; */
  text-align: left;
  height: 100%;
  overflow: hidden;
}

.el-main {
  background: #f2f2f4;
  padding: 0px;
}

.home-index >.el-container {
  height: 100%;
}
.el-container.is-vertical {
  /* margin-left: -12px; */
}
.home-index {
  height: 100%;
  overflow: hidden;
}
</style>