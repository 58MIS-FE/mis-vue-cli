<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <div class="h-left">
          <div class="pointer" title="收缩/展开">
            <i class="el-icon-rank" @click="isOpenCloseF"></i>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
      <div class="h-right">
        <!-- 消息 -->
        <div class="notice-c" title="查看新消息">
          <div class="newMsg"></div>
          <i class="el-icon-bell" @click="open2"></i>
        </div>
        <!-- 用户头像 -->
        <div class="user-img-c">
          <img src="../assets/imgs/user.jpg">
        </div>
        <!-- 下拉菜单 -->
        <el-dropdown trigger="click" @visible-change="isShowArrowMethods($event)">
          <span class="el-dropdown-link">
            前端研发部
            <i class="el-icon-arrow-down" v-if="isShowArrow"></i>
            <i class="el-icon-arrow-up" v-if="!isShowArrow"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="selAds">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>基本资料</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      isShowArrow: true, //判断用户名下拉栏上三角和下三角展示的变量
      isCollapse: false, //控制左侧导航栏展开或者收起的变量
      classArr: "leftSideClose" //左侧导航栏宽度样式
    };
  },
  mounted() {
    //初始化函数
    // this.init();
  },
  methods: {
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
    /*
     *判断左侧导航栏展开或收起
     *进行组件间的传参
     */
    isOpenCloseF() {
      this.isCollapse = !this.isCollapse;
      // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.isCollapse)
    }
  }
};
</script>


<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.pointer {
  cursor: pointer;
  text-align: left;
  font-size: 20px;
}
.notice-c {
  cursor: pointer;
  position: relative;
  width: 18px;
}
.notice-c i {
  font-size: 18px;
}
.newMsg {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff5722;
  right: 0;
  top: 32%;
}
.user-img-c {
  width: 34px;
  height: 34px;
  background: #ddd;
  border-radius: 50%;
  margin: 0 20px;
  overflow: hidden;
  position: relative;
  top: 10px;
}
.user-img-c img {
  width: 34px;
}
.h-right > div {
  display: inline-block;
}
.el-dropdown {
  cursor: pointer;
}
.el-dropdown .selAds {
  position: relative;
}
</style>
