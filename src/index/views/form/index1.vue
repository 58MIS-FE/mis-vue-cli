<template>
  <div>

    <div class="container">
      <div class="c_tit">单列表单1</div>

      <!-- 表单 -->
      <div class="form_container">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="文本输入框">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="下拉框单选">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="下拉框多选">
                <el-select v-model="form.region2" multiple placeholder="请选择活动区域">
                <el-option label="区域一" value="区域一"></el-option>
                <el-option label="区域二" value="区域二"></el-option>
                <el-option label="区域三" value="区域三"></el-option>
                <el-option label="区域四" value="区域四"></el-option>
                <el-option label="区域五" value="区域五"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开关">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="日期选择框">
                <el-date-picker
                v-model="form.data1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="日期和时间范围">
                <el-date-picker
                v-model="form.data2"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="多选框">
                <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="单选框">
                <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="文本域输入">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="btn" size="medium" @click="addfun" type="primary">保存</el-button>
                <el-button class="btn" size="medium" >取消</el-button>
            </el-form-item>
        </el-form>        
      </div>
    

    </div>
  </div>
</template>

<script>
import {add} from './../table/server.js';

export default {
  data() {
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
  mounted() {

},
  methods: {

      async addfun(){
          let res = await add({name:"aaa"})
          if (res.code == 200){
              this.$message.success('保存成功');

          }
      }
   
  }
};
</script>
<style scoped>

.form_container {
    width: 500px;
    margin: 25px auto;
}
.form_container .el-select{
    width: 100%;
}
.form_container .el-date-editor.el-input {
    width: 100%;
}
.form_container .el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
    width: 380px;
}

</style>
