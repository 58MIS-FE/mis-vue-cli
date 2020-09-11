<template>
  <div class="leftSideOpen">
    <el-menu 
      default-active="2"
      :unique-opened="true"
      :router="true"
      :collapse="navOpen"
      :collapse-transition="false">
      <div class="lefttit">
        <i class="titlogo"></i><label>交易UI模板库</label>
        <!-- <label class="closeMenu" @click="()=>{navOpen=!navOpen}"><i class="el-icon-s-fold"></i></label> -->
      </div>
      <template v-for="(item,index) in menudata">
        <el-submenu :index="index+'a'" :key='index'>
          <template slot="title">
            <i :class="item.icon"></i>
            <!-- <span>{{ item.name }}</span> -->
            <i>{{item.name}}</i>
          </template>
          <el-menu-item-group>
            <template v-for="(item_,index_) in item.childMenuList">
              <el-menu-item  :key="index_" :index="item_.url">
                <span>{{ item_.name }}</span>
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
    <div class="bottondiv">
      <label class="closeMenu" @click="()=>{navOpen=!navOpen}"><i class="el-icon-s-fold"></i></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen:false,
      menudata:[
        {
          name:"组件看板",
          icon:"el-icon-data-line",
          childMenuList:[
            {name:"基础组件数据",url:"/basicComponents"},
            // {name:"工作台",url:"/workbench"},
            // {name:"多种布局",url:"/layout1"},
            // {name:"等分布局",url:"/layout2"},
          ]
        },
        {
          name:"表单页",
          icon:"el-icon-edit-outline",
          childMenuList:[
            {name:"单列表单1",url:"/form1"},
            // {name:"单列表单2",url:"/form2"},
            // {name:"二列表单",url:"/form3"},
            // {name:"三列表单",url:"/6"},
          ]
        },
        {
          name:"列表页",
          icon:"el-icon-notebook-2",
          childMenuList:[
            {name:"基础数据列表1",url:"/table1"},
            {name:"基础数据列表2",url:"/table2"},
            {name:"基础数据列表3",url:"/table3"},
            // {name:"高级筛选列表",url:"/table3"},
            // {name:"高级表格图表分析",url:"/table4"},
          ]
        },
        {
          name:"详情页",
          icon:"el-icon-tickets",
          childMenuList:[
            {name:"基本详情1",url:"/details1"},
            {name:"基本详情2",url:"/details2"},
          ]
        },
        // {
        //   name:"登录注册",
        //   icon:"el-icon-s-custom",
        //   childMenuList:[
        //     {name:"登录",url:"/8"},
        //     {name:"注册",url:"/9"},
        //     {name:"忘记密码",url:"/10"},
        //   ]
        // },
        // {
        //   name:"弹窗",
        //   icon:"el-icon-chat-square",
        //   childMenuList:[
        //     {name:"弹窗1",url:"/11"},
        //   ]
        // },
      ]
    };
  },
  mounted(){
  },
  methods:{

  }

};
</script>

<style>
/* ======左侧菜单样式 menu====== */
  .leftSideOpen {
    height: 100%;
    /* width: 238px; */
    box-shadow: 0px 0px 12px 0px rgb(24 43 80 / 46%);
    background-color: #182b50;
    border-right:none;
  }
  .leftSideOpen .el-submenu__title span {
    vertical-align: top;
  }
  .leftSideOpen li.el-menu-item {
    padding-left: 64px!important;
    background: #203456;
    color:#a6b4cd
  }
  .el-menu-item-group__title{
    display: none;
  }
  .el-menu-item {
    color: #9dacc5;
  }
  .leftSideOpen li.el-menu-item.is-active {
    padding-left: 64px !important;
  }
  .leftSideOpen >.el-menu {
    height: calc(100% - 30px);
    width: 208px;
    /* width: 238px;
    box-shadow: 0px 0px 12px 0px rgb(24 43 80 / 46%);
    background-color: #182b50;
    border-right:none; */
  }
  .leftSideOpen .el-menu .el-submenu__title {
    background: #182b50;
    color: #9dacc5;
    height: 44px;
    line-height: 44px;
  }
  .leftSideOpen .el-menu-item.is-active {
    color: #ebfbff;
    background-color: #0363ff;
  }
  .leftSideOpen .el-menu-item-group__title {
    padding: 0px ;
  }
  .leftSideOpen .el-submenu__title i {
    margin: -5px 11px 0 5px;
  }
  .leftSideOpen .lefttit {
    height: 64px;
    margin-top: 10px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
    color:#fff
  }
  .leftSideOpen .lefttit label{
    margin-left: 9px;
    height: 32px;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    vertical-align: middle;
    animation: fade-in;
    animation-duration: .2s;
  }
  .leftSideOpen ul.el-menu--collapse.el-menu {
    width: 64px;
  }
  ul.el-menu--collapse.el-menu .lefttit label {
    font-size: 0;
  }
  label.closeMenu {
    vertical-align: middle;
    /* float: right; */
    /* margin-right: 5px; */
    color: #8f9299;
  }
  .bottondiv {
    width: 100%;
    margin: auto;
    height: 30px;
    text-align: center;
  }
  .el-menu--collapse label.closeMenu {
    float: none;
    margin: 0;
  }
  .el-menu--collapse li.el-submenu.is-active i {
    color: #0363ff;
  }
  .closeMenu i {
      font-size: 20px;
      cursor: pointer;
  }
  .titlogo {
    width: 30px;
    height: 31px;
    margin-right: -4px;
    margin-top: -1px;
    display: inline-block;
    background-size: contain;
    vertical-align: middle;
    background-image: url('../assets/imgs/LOGO@2x.png');
  }
  .el-menu--collapse .titlogo {
    /* display: none; */
  }
  .el-menu {
    background-color: #182b50;
    border-right: solid 1px #182b50;
  }

  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #13316d;
}
</style>
