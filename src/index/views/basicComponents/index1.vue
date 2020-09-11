<template>
    <div>
    
        <!-- 基础组件 -->
        <div class="showDiv">
            <div class="showC">
                <label class="mgslab">输入框:</label>
                <el-input v-model="input" placeholder="请输入内容" style="width:250px"></el-input>
            </div>
            <div class="showC">
                <label class="mgslab">下拉框:</label>
                <el-select v-model="input1" placeholder="请选择" style="width:250px">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="showC">
                <label class="mgslab">级联下拉框:</label>
                <el-cascader style="width:250px"
                    v-model="input2"
                    :options="options1">
                </el-cascader>
            </div>
            <div class="showC">
                <label class="mgslab">日期控件:</label>
                <el-date-picker  style="width:250px"
                    v-model="input3"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="showC">
                <label class="mgslab">单选控件:</label>
                <el-radio v-model="value1" label="1">备选项</el-radio>
                <el-radio v-model="value1" label="2" disabled>备选项</el-radio>
            </div>
            <div class="showC">
                <label class="mgslab">多选控件:</label>
                <el-checkbox v-model="value2">备选项1</el-checkbox>
                <el-checkbox v-model="value2" disabled>备选项2</el-checkbox>
            </div>
            <div class="showC">
                <label class="mgslab">开关控件:</label>
                <el-switch
                    v-model="value3"
                    active-color="#0364FF"
                    inactive-color="#7F8FA4">
                </el-switch>  
            </div>
            <div class="showC">
                <label class="mgslab">计数器控件:</label>
                <el-input-number v-model="value" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
            <div class="showC">
                <label class="mgslab">按钮1:</label>
                <el-button class="btn" size="medium" type="primary">查询</el-button>
                <el-button class="btn" size="medium">重置</el-button>
            </div>
            <div class="showC">
                <label class="mgslab">按钮2:</label>
                <el-button class="btn btn1" size="small" type="primary"><i class="el-icon-plus"></i>增加</el-button>
                <el-button class="btn btn1" size="small"><i class="el-icon-upload2"></i>导出</el-button>
            </div>
        </div>

        <div class="showM">
            <!-- 描述 -->
            <div class="showM_t">
                <label class="showM_ttit">基础样式</label>
                <div class="showM_tdiv">
                    <li><label class="stLab">宽/高</label><label class="stVal">12</label></li>
                    <li><label class="stLab">背景颜色</label><label class="stVal">2312</label></li>
                    <li><label class="stLab">圆角</label><label class="stVal">12</label></li>
                    <li><label class="stLab">字号</label><label class="stVal"></label></li>
                    <li><label class="stLab">字体颜色</label><label class="stVal"></label></li>
                    <li><label class="stLab">dada</label><label class="stVal"></label></li>
                </div>
            </div>
            <!-- css -->
            <div class="showM_b">
                <label class="showM_btit">代码</label>
                <div class="showM_bdiv">
                    <p>width: 1044px;</p>
                    <p>height: 22px;</p>
                    <p>font-size: 14px;</p>
                    <p>font-family: PingFangSC-Medium, PingFang SC;</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data () { 
        return {
            input:"",
            input1:"",
            input2:"",
            input3:"",
            pickinput:'',
            value:true,
            value1:'',
            value2:'',
            value3:'',
            activeName:'first',
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
            

            data:{
                input:[
                    {label:"高",value:"36px"},
                    {label:"宽",value:"250px"},
                    {label:"背景",value:"#fff"},
                    {label:"边框",value:"1px solid #CAD2DD"},
                    {label:"圆角",value:"4px"},
                    {label:"字号",value:"14px"},
                    {label:"字体颜色",value:"#606266"},
                    ],
                    button1:[
                        {label:"高",value:"36px"},
                        {label:"宽",value:"80px"},
                        {label:"背景",value:"#0364FF"},
                        {label:"主要按钮边框",value:"1px solid #0364FF"},
                        {label:"次要按钮边框",value:"1px solid #CAD2DD"},
                        {label:"圆角",value:"4px"},
                        {label:"字号",value:"14px"},
                        {label:"字体颜色",value:"#fff"},
                    ],
                    button2:[
                        {label:"高",value:"32px"},
                        {label:"宽",value:"80px"},
                        {label:"背景",value:"#0364FF"},
                        {label:"主要按钮边框",value:"1px solid #0364FF"},
                        {label:"次要按钮边框",value:"1px solid #CAD2DD"},
                        {label:"圆角",value:"2px"},
                        {label:"字号",value:"12px"},
                        {label:"字体颜色",value:"#fff"},
                    ]
            }
        };
    },
    mounted () {
       
    },
    methods: {
       
    }
};
</script>
<style scoped>
.mgslab{
    width: 90px;
    padding-right: 15px;
    text-align: right;
    display: inline-block;
}
.showC {
    margin: 10px;
    height: 46px;
    line-height: 46px;
}
.showM {
    width: 270px;
    position: absolute;
    top: 59px;
    bottom: 0px;
    right: 0px;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0px 8px 7px 0px rgb(143 141 141 / 46%), 0px 2px 4px 0px rgb(0 0 0 / 0%);
}
.showM_t {
    border-bottom: 3px solid #f2f2f4;
    box-sizing: border-box;
    padding: 10px;
}

.showM_b {
    padding: 10;
    padding: 10px;
}
.showM_bdiv {
    background-color: #cdc2b23d;
    padding: 5px 0px 5px 14px;
    line-height: 23px;
}
label.showM_btit,label.showM_ttit {
    color: #777574;
    margin-bottom: 10px;
    display: block;
}
.showM_tdiv li {
    list-style: none;
}

.showM_tdiv li label.stLab {
    width: 100px;
    display: inline-block;
    line-height: 40px;
    color: #777675;
}

.showM_tdiv li label.stVal {
    background-color: #c9dce84a;
    width: 120px;
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
}
</style>