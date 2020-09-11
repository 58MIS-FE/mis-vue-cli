<template>
  <div>

    <!-- 筛选表格 -->
    <div class="container">
      <div class="c_tit">基础数据列表1</div>
      <!-- 筛选项 -->
      <div class="query_container">
        <div class="query_div">
          <label class="q_d_lab">筛选条件1</label>
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </div>
        <div class="query_div">
          <label class="q_d_lab">筛选条件2</label>
          <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </div>
        <div class="query_div">
          <el-button class="btn" size="medium" type="primary">查询</el-button>
          <el-button class="btn" size="medium">重置</el-button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table_container border_t1">
        <div class="padding16_0">
          <el-button class="btn btn1" size="small" type="primary"><i class="el-icon-plus"></i>增加</el-button>
          <el-button class="btn btn1" size="small"><i class="el-icon-upload2"></i>导出</el-button>
        </div>

        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="卡片id"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="描述"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="更新时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
          </el-table-column>
        </el-table>
        <div class="pagination_div">
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        
      </div>

    </div>


  </div>
</template>

<script>
import {getList} from './server.js';

export default {
  data() {
    return {
      input1:"",
      input2:"",
      tableData: []
      

    };
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList(){
      let res = await getList()
      if (res) {
        this.tableData = res.data
      }
    }
   
  }
};
</script>
<style scoped>



</style>
