<template>
  <div id="app">
    
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      goto(){
        this.$router.push({
          path:'/xxx'
        })
      },
      goRouter(path) {
        this.$router.go(0)
      },
    }
  }
</script>

<style  scoped>
*{
  padding: 0;
  margin: 0;
}
p{
  list-style: none;
}
#app{
  
}
.top{
  /* display: flex; */
  height: 96px;
}
.topImg{
  height: 48px;
    width: 128px;
    margin-left: 139px;
    margin-top: 20px;
    display: inline-block;
    position: absolute;
    cursor: pointer;
}
label.toptit {
    height: 47px;
    font-size: 42px;
    font-family: FZY3JW--GB1-0,FZY3JW--GB1;
    font-weight: normal;
    color: rgba(0, 0, 0, 1);
    line-height: 47px;
    width: 90px;
    /* margin-top: 27px; */
    margin-left: 216px;
    margin-right: 11px;
    display: inline-block;
    vertical-align: bottom;
}
.topOne{
    padding-top: 24px;
    display: inline-block;
    margin-left: 293px;

}
label.topOnel1 {
    height: 25px;
    font-size:18px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(17,17,17,1);
    line-height:25px;
}

label.topOnel2 {
    height: 18px;
    font-size:13px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
    display: block;
}
.topOne label{
  /* font-size:13px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:18px; */
}
.topTwo{

  display: inline-block;
  float: right;
  margin-right: 143px;
  margin-top: 28px;
}
.topTwo button:hover{
  background-color: #3f89ff!important;
}
.topTwo button{
  width: 104px;
  height: 40px;
  background:rgba(3,100,255,1);
  border-radius:4px;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:24px;
  outline: none;
  border: none;
  cursor: pointer;
}
.bjImg{
  width: 100%;
  height: 480px;
}
.serviceAdvantages{
  width:100%;
  /* width:1440px; */
  height:619px;
  background:rgba(242,242,242,1);
}
.serviceAdvantages .serviceAdvantages_title{
  padding-top: 80px;
  font-size:32px;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(40,51,69,1);
  line-height:38px;
  text-align: center;
}
.serviceAdvantages_title span{
  display: block;
  width:48px;
  height:7px;
  background:rgba(206,226,248,1);
  border-radius:100px;
  margin: 13px auto;
  /* text-align: center; */
}
.serviceAdvantages_content{
  display: flex;
  justify-content: space-around;
  padding-bottom: 86px;
}
.serviceAdvantages_content div{
  margin-top: 56px;
  width:310px;
  height:324px;
  background:rgba(255,255,255,1);
  box-shadow:0px 4px 12px 0px rgba(0,0,0,0.06);
  border-radius:12px;
  text-align: center;
  /* padding-bottom: 8px; */
}
.serviceAdvantages_content div h5{
  padding-top: 55px;
  text-align: center;
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(53,64,82,1);
  line-height:28px;
  text-shadow:0px 4px 12px rgba(0,0,0,0.06);
}
.serviceAdvantages_content p{
  padding-top: 28px;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(169,171,186,1);
  line-height:24px;
  text-shadow:0px 4px 12px rgba(0,0,0,0.06);
  text-align: center;
  margin-bottom: 20px;
  padding-left: 43px;
  padding-right: 43px;
}
.serviceAdvantages_content img{
  /* width: 147px;
  height: 134px; */
  /* padding-left: 82px; */
  /* padding-left: 107px; */
  /* text-align: center; */
}
.contact{
  width: 100%;
  height: 172px;
  display: flex;
  background:rgba(255,255,255,1);
  justify-content: space-around;
  /* line-height: 172px; */
}
.contact div{
  display: flex;
  line-height: 172px;
}
.contact div img{
  width: 60px;
  height: 60px;
  display: block;
  margin-top: 56px;
}
.contact div span{
  display: block;
  padding-left: 20px;
  font-size:20px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(53,64,82,1);

}
.bottom{
  width: 100%;
  height:364px;
  background:rgba(30,38,49,1);
 padding: 0 3%;
  color: rgba(255,255,255,1);
}
 .about{
  width: 100%;
  height: 274px;
  justify-content: space-around;
  display: flex;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  border-bottom: 1px rgba(255,255,255,0.09) solid;
}
.about>div{
  text-align: center;
    height: 120px;
    width: 33%;
    padding: 0 50px;
    padding-top: 64px;
    position: relative;
}
/* .about>div:nth-child(3){
  
  border-right: none;
} */
.about div h6{
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:28px;
  text-align: left;
}
.about div p{
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:22px;
  padding-top: 16px;
  text-align: left;
  /* border-right: 1px solid rgba(255,255,255,0.09); */
  
}
.about div span{
  display: block;
  width: 1px;
  height: 120px;
  background: rgba(255, 255, 255, .09);
  position: absolute;
  top: 84px;
  right: 0px;
}
.end{
  padding-top: 23px;
  padding-bottom: 21px;
  text-align: center;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:#B0B3B7;
  line-height:22px;
}


.bjImgDiv {
    background: linear-gradient(90deg,rgba(41,106,240,1) 0%,rgba(220,235,248,1) 100%);
    height: 480px;
    width: 100%;
}

label.bjImgLab1 {
    width: 384px;
    height:90px;
    font-size:32px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:45px;
    position: absolute;
    left: 14%;
    top: 213px;
}

label.bjImgLab2 {
    width: 176px;
    height:30px;
    font-size:22px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,0.9);
    line-height:30px;
    position: absolute;
    left: 14%;
    top: 328px;
}
.QRcode img {
    width: 80px;
    height: 80px;
    display: block;
    margin: auto;
    margin-bottom: 9px;
}

.QRcode {
    width: 150px;
    height: 140px;
    display: inline-block;
    text-align: center;
    background-color: #fff;
    vertical-align: middle;
    margin: 0 8px;
    padding-top: 13px;
}

.QRcode label {
    height: 19px;
    font-size:11px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(53,64,82,1);
    line-height:18px;
    margin-bottom: 9px;
}
.QRcodediv {
    padding-left: 0px !important;
    padding-right: 0px !important;
}
.end a{
  color: #B0B3B7;
}
</style>