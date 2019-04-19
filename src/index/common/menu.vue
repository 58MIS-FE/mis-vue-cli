<template>
  <div :class="{leftSideOpen:!navOpen,leftSideClose:navOpen}">
    <div class="tit">
      <p v-if="!navOpen">后台管理系统</p>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="navOpen"
      :collapse-transition="false"
      :default-active="nowPage"
    >
      <el-menu-item index="/homepage">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="/upload">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>上传文件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/upload1">
            <i class="el-icon-tickets"></i>
            <span>点击上传</span>
          </el-menu-item>
          <el-menu-item index="/upload2">
            <i class="el-icon-document"></i>
            <span>用户上传</span>
          </el-menu-item>
          <el-menu-item index="/upload3">
            <i class="el-icon-goods"></i>
            <span slot="title">照片墙</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/table">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span>table表格</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/table1">
            <i class="el-icon-menu"></i>
            <span slot="title">基础表格</span>
          </el-menu-item>
          <el-menu-item index="/table2">
            <i class="el-icon-menu"></i>
            <span slot="title">展开行表格</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/tabs">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>tab切换</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tabs1">
            <i class="el-icon-star-on"></i>
            <span slot="title">基础tab</span>
          </el-menu-item>
          <el-menu-item index="/tabs2">
            <i class="el-icon-star-on"></i>
            <span slot="title">自定义增加tab</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/form">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span>form表单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/form1">
            <i class="el-icon-date"></i>
            <span slot="title">基础form表单</span>
          </el-menu-item>
          <el-menu-item index="/form2">
            <i class="el-icon-date"></i>
            <span slot="title">自定义对齐方式表单</span>
          </el-menu-item>
          <el-menu-item index="/form3">
            <i class="el-icon-date"></i>
            <span slot="title">自带校验表单</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
     data() {
    return {
      isShowArrow: true, //判断用户名下拉栏上三角和下三角展示的变量
      isCollapse: false, //控制左侧导航栏展开或者收起的变量
      nowPage:'/homepage' //进行菜单高亮设置的变量
    };
  },
  //接收父组件传递过来的参数
  props:{navOpen:false},
    methods:{

    }

};
</script>

<style>
.tit {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
  text-align: center;
}
.leftSideOpen {
  height: 100%;
  width: 208px;
}
.leftSideClose {
  height: 100%;
  width: 65px;
}
.el-menu {
  border: 0 none;
}
</style>
