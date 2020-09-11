<template>
  <div>
    <div  class="mainbreadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="/">一级导航</a></el-breadcrumb-item>
        <el-breadcrumb-item>二级导航</el-breadcrumb-item>
        <el-breadcrumb-item>三级导航</el-breadcrumb-item>
      </el-breadcrumb>
      <label class="titbreadcrumb">二列表单</label>
    </div>

    <div class="maincontent">
      <div class='maincontent-content-header'>二列表单</div>
      
      <div class="form2">
         
      </div>

    </div>

  </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
           form: {
            name: '文本输入框',
            region: 'shanghai',
            region2: ['区域二','区域三'],
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            }
        };
    },
    mounted () {
        
    },
    methods: {
       
    }
};
</script>
<style>
.mainbreadcrumb {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    display: block;
}
.mainbreadcrumb .el-breadcrumb {
    height: 35px;
}
label.titbreadcrumb {
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(53,64,82,1);
  line-height:28px;
}
.maincontent {
    background-color: #fff;
    margin: 20px;
    padding: 20px 0;
}
.maincontent-content-header {
    font-size: 16px;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: rgba(53,64,82,1);
    padding-left: 24px;
    border-bottom: 1px solid rgba(240,242,245,1);
    padding-bottom: 16px;
}

</style>
<style scoped>

</style>