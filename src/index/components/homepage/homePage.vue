<template>
    <div>
      <h1>主页</h1>
      <h4>欢迎大家使用</h4>
      <h4>{{data}}</h4>
      <a href='https://element.eleme.io/#/zh-CN/component/installation' target='_blank'>组件库地址</a>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
      
</template>

<script>
export default {
  data() {
      return {
        data: '有问题 请联系  BIC-前端研发组',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1:''
      };
    }
};
</script>

<style>

</style>
