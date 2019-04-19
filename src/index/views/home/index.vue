<template>
  <div class="home-index">
    <el-container>
      <!-- 侧边栏部分 -->
      <el-aside width>
          <Menu :navOpen="isCollapse" />
      </el-aside>

       <!-- 右侧部分 -->
      <el-container>
        <!-- 顶部 -->
        <el-header>
            <Headers @childByValue="childByValue" />
        </el-header>


       <!-- 渲染主要区域 -->
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getMethods, postMethods } from "./server.js";
// 引入左侧菜单导航组件
import Menu from "../../common/menu.vue";
// 引入顶部组件
import Headers from "../../common/header.vue";

export default {
  components: {
    Menu,
    Headers
  },
  data() {
    return {
      isShowArrow: true, //判断用户名下拉栏上三角和下三角展示的变量
      isCollapse: false, //控制左侧导航栏展开或者收起的变量
    };
  },
  mounted() {
    // 初始化函数
    this.init();
  },
  methods: {
    /**
     *  [init 初始化获取数据]
     *  @param  {[type]} e   [事件源]
     *
     */
    async init() {
      let res = await postMethods({
        des: "发送post请求"
      });
      console.log(res, "请求回来的结果");
    },

    /**
     *  [isShowArrow 头像旁三角号 展开与收起]
     *  @param  {[type]} e   [事件源]
     *
     */

    isShowArrowMethods(e) {
      this.isShowArrow = !e;
    },
    /**
     * 点击消息图标触发的弹框的事件
     *
     */
    open2() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "查看消息",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
 
    // 接受子组件传来的参数
     childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.isCollapse = childValue;
      }
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.home-index .el-aside {
  background-color: rgb(48, 65, 86);
  min-width: 65px;
  text-align: left;
  height: 100%;
  overflow: hidden;
}

.el-main {
  background-color: #fff;
  color: #333;
  padding:20px;
}

.el-container {
  height: 100%;
}
.home-index {
  height: 100%;
}
</style>