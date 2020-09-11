<template>
  <div>
    <div class="container">   
      
        <div class="details_container">
            <div class="c_tit">资料详情</div>

            <div class="tablediv">
                <table class="bortable">
                    <tr>
                        <td class="backgcoltit" colspan='2' >
                            基本信息
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <span>商户名称：</span> 
                            <label>xxxx</label>                            
                        </td>
                    </tr>
                    <tr>
                        <td width="50%"><span>最多展示七个字：</span> <label>xxxx</label></td>
                        <td width="50%"><span>最多展示七个字：</span> 
                        <label>xxxx</label>
                        </td>
                    </tr>
                    <tr>
                        <td><span>登录密码：</span> <label>xxxx</label> </td>
                        <td><span>安全手机号：</span> <label>xxxx</label> </td>
                    </tr>
                    <tr>
                        <td><span>企业实名认证：</span> <span class="spanblue">"已通过"</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td colspan='2' class="uploadtd">
                            <span>补充材料：</span>
                            <div class="tableimgdiv">
                                <img width="100%" :src="url" v-for="index of [1,2,3]" :key="index" alt="">
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'><span>备注：</span>  <label>这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长这是一个备注，内容很长很长</label></td>
                    </tr>

                </table>

                <table class="bortable">
                    <tr><td class="backgcoltit" colspan='2'>开票信息</td></tr>
                    <tr>
                        <td width="50%"><span>开户名：</span> <label>xxxx</label></td>
                        <td width="50%"><span>开户银行：</span> <label>xxxx</label></td>
                    </tr>
                    <tr>
                        <td><span>开户银行卡号：</span> <label>xxxx</label></td>
                        <td><span>纳税人识别号：</span> <label>xxxx</label></td>
                    </tr>
                    <tr>
                        <td><span>企业地址：</span> <label>xxxx</label></td>
                        <td><span>企业电话：</span> <label>xxxx</label></td>
                    </tr>
                </table>

            </div>

        </div>    
    </div>
  </div>
</template>
<script>
export default {
    name: 'role',
    components: {

},
    data () {
       
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            fit:'contain',//['fill', 'contain', 'cover', 'none', 'scale-down'],
            // 预览上传的照片
            dialogImageUrl: '',
            dialogimgVisible: false,
            dialogPwdVisible:false,
            dialogPhoneVisible:false,
            dialogVisible:false,
            // 编辑临时存储数据
            name:"",
            linkMan:"",
            linkTel:"",
            linkEmail:"",
            remark:"",
            fileList:[],
            dialogImageUrl: '',
        };
    },
    mounted () {
    },
    methods: {
       
    }
};
</script>
<style scoped>

</style>