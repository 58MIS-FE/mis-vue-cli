<template>
  <div>

    <!-- 筛选表格 -->
    <div class="container">
      <div class="c_tit">基础数据列表3</div>
      <!-- 筛选项 -->
      <div class="query_container">
        <div class="query_div">
          <label class="q_d_lab">输入框</label>
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </div>
        <div class="query_div">
          <label class="q_d_lab">年月选择框</label>
          <el-date-picker class="w100"
            v-model="input2"
            type="month"
            placeholder="选择年月">
          </el-date-picker>
        </div>
        <div class="query_div">
          <label class="q_d_lab">日期选择框</label>
          <el-date-picker class="w100"
            v-model="input3"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>

        <div class="query_div">
          <label class="q_d_lab">下拉框选择</label>
          <el-select v-model="input4" placeholder="请选择" class="w100">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="query_div">
          <label class="q_d_lab">下拉框多选选择</label>
          <el-select v-model="input5" multiple placeholder="请选择" class="w100">
            <el-option 
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="query_div">
          <label class="q_d_lab">级联选择</label>
          <el-cascader class="w100"
            v-model="input6"
            :options="options1"></el-cascader>
        </div>
        <div class="query_div w400">
          <label class="q_d_lab">日期范围选择框</label>
          <el-date-picker
            v-model="input7"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
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
          <el-button class="btn btn1" size="small"><i class="el-icon-download"></i>下载</el-button>
          <el-button class="btn btn1" size="small"><i class="el-icon-refresh"></i>刷新</el-button>
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

export default {
  data() {
    return {
      input:"",
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      input5:"",
      input6:"",
      input7:"",
      activeName: 'second',
      options1: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
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
      tableData: [{
            id:"2344100",
            date: '2016-05-02',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-04',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-01',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }, {
            id:"2344100",
            date: '2016-05-03',
            name: '王小虎',
            address: '模板样式文字文案'
          }]
      

    };
  },
  mounted() {

},
  methods: {
   
  }
};
</script>
<style scoped>



</style>
