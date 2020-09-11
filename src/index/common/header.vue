<template>
  <div class="header-content">
    <!-- <label class="logoLab">交易UI模板库</label> -->

    <div class="headerleft">
      <el-dropdown trigger="click" >
        <span class='h-name'>
          <i class="el-icon-user-solid"></i>
          交易前端部
          <i class="el-icon-arrow-down" ></i>
          <!-- <i class="el-icon-arrow-up"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown" class="selAds">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  watch: {
  },
  mounted() {
   
  },
  methods: {
    
  }
};
</script>

<style scoped>
label.logoLab {
    font-size: 16px;
}
.h-name{
  cursor: pointer;
}
.header-content .headerleft {
    display: inline-block;
    float: right;
}
</style>
