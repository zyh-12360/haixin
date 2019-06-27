<template>
  <div class="login_father">
    <div class="login_header clearfix">
      <img class="fl" src="../assets/Hisense_img/logo.png" style="width:150px;" alt>
      <h3 class="fl" style="font-weight:400;">权威官网 汇聚精品</h3>
    </div>
    <div class="login_body">
      <div class="login_div">
        <!-- 登录框头部 固定不动 -->
        <div class="login_div_title">
          <ul class="login_ul_title clearfix">
            <li>账户登录</li>
            <li>快捷登录</li>
          </ul>
          <div class="background_erweima">
            <div class="triangle_border_left">
              <span></span>
            </div>
          </div>
        </div>

        <!-- 点击账户登录显示 -->
        <div class="login_zhanghu">
          <br>
          <!-- 账号 -->
          <span
            :class="{'slideInUp' : user_isBlur,'slideInDown':user_isForus,'user_prompt':true}"
          >账号/邮箱/手机号</span>
          <input
            v-model="login_user"
            type="text"
            @blur="user_blur()"
            @focus="user_focus()"
            class="input_focus user_input"
          >
          <div :class="{'user_yanzheng':true,'text_propmt':user_isShow}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入正确的手机号</div>
          <!-- 密码 -->
          <br>
          <br>
          <span :class="{'slideInUp' : pwd_isBlur,'slideInDown':pwd_isForus,'user_prompt':true}">密码</span>
          <input
            v-model="login_pwd"
            type="password"
            @blur="pwd_blur()"
            @focus="pwd_focus()"
            class="pwd_input"
          >
          <div :class="{show_pwd:true,ease_green:pwd_isShow}" @click="show_pwd()"></div>
          <div :class="{'pwd_yanzheng':true,'text_propmt':pwd_isShow}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码不可为空</div>
        </div>

        <!-- 登录框底部 公共部分 固定部分 -->
        <div class="login_div_button">
          <br>
          <br>
          <ul class="clearfix">
            <li class="fl">
              <input class="a" type="checkbox">30天免登录
            </li>
            <li class="fr">
              <router-link to="/zhuce">免费注册</router-link>
            </li>
            <li class="fr">
              <router-link to="/forgetpwd">忘记密码?</router-link>
            </li>
          </ul>
          <br>
          <p class="prompt_login"></p>
          <br>
          <br>
          <input type="button" @click="login_click()" :src="submit_login" value="立即登录">
          <br>
          <br>
          <br>
          <br>
          <!-- 第三种登录方式 -->
          <div class="login_three">
            <p>可选择第三方登录方式</p>
            <br>
            <a
              href="https://open.weixin.qq.com/connect/qrconnect?appid=wxa7590968ca4b7fa6&scope=snsapi_login&state=e0483db7-a2fc-461a-b5bd-10d775c96479&response_type=code&redirect_uri=http%3A%2F%2Fwww.hisense.com%2Fusercenter%2Fgateway%2Fwechat"
            >
              <img src="../assets/Hisense_img/微信.png" style="height:25px;" alt>
            </a>
            <a href="https://auth.alipay.com/login/index.htm">
              <img src="../assets/Hisense_img/zhifubao.png" style="height:20px;" alt>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="login_footer">
      <p>Qingdao Hisense Trade and Buslness Co.,Ltd All Rights Reserved.</p>
      <p>青岛海信商贸发展有限公司版权所有 网站备案/许可证号鲁ICP备05027830</p>
    </div>
  </div>
</template>

<script>
// import jquery from 'jquery'
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      // 用户名获取失去焦点
      user_isBlur: false,
      user_isForus: true,
      // 密码获取失去焦点
      pwd_isBlur: false,
      pwd_isForus: true,
      // 绑定 输入的用户名密码
      login_user: "",
      login_pwd: "",
      // 是否显示密码
      pwd_isShow: true,
      user_isShow: true,
      submit_login:require("./demo")
    };
  },
  mounted: function() {
    var inputfocus = document.querySelector(".input_focus");
    // console.log(input_focus);
    inputfocus.focus();
  },
  methods: {
    // 用户名失去焦点
    user_blur: function() {
      var input = document.querySelector(".user_input").value;
      if (input != null && input != "") {
        // 非空验证
        // ...
      } else {
        this.user_isBlur = true;
        this.user_isForus = false;
      }
    },
    // 用户名获得焦点
    user_focus: function() {
      this.user_isBlur = false;
      this.user_isForus = true;
    },
    // 密码失去焦点
    pwd_blur: function() {
      var input = document.querySelector(".pwd_input").value;
      if (input != null && input != "") {
        // 非空验证
        // ...
      } else {
        this.pwd_isBlur = true;
        this.pwd_isForus = false;
      }
    },
    // 密码获得焦点
    pwd_focus: function() {
      this.pwd_isBlur = false;
      this.pwd_isForus = true;
    },
    // 显示密码
    show_pwd: function() {
      var pwd = document.querySelector(".pwd_input");
      this.pwd_isShow = !this.pwd_isShow;
      if (pwd.type == "password") {
        pwd.type = "text";
      } else if (pwd.type == "text") {
        pwd.type = "password";
      }
    },
    // 点击登录 向后台发送请求
    login_click() {
        // 密码 用户名验证
        var text_pwd = /^[a-zA-Z0-9]{6,20}$/;
        var pwd = document.querySelector('.pwd_yanzheng');
        var text_user = /^1[3,4,5,7,8]{1}[0-9]{9}$/;
        var user = document.querySelector('.user_yanzheng');
        var prompt_login = document.querySelector(".prompt_login");
        // 非空验证 用户名
        if (this.login_user == null || this.login_user == "") {
            this.user_isShow = false;
        // 验证用户名错误
        }else if(text_user.test(this.login_user)==false){
            this.user_isShow = false;
        }else{
            this.user_isShow = true;
        }
        
        // 非空验证 密码
        if(this.login_pwd == null || this.login_pwd == ""){
            this.pwd_isShow = false;        
        // 验证密码错误
        // 请输入6-20位数字大小写字母组合密码
        }else if(text_pwd.test(this.login_pwd)==false){
            this.pwd_isShow = false;        
            pwd.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入6-20位数字大小写字母组合密码";
        }else{
            this.pwd_isShow = true;
        }
        // 向后台发送请求
        if(this.user_isShow == true && this.pwd_isShow == true){
                // 向后台发送请求的数据
              var obj = {
                  action: "login",
                  name: this.login_user,
                  pwd: this.login_pwd
              };
              var str = qs.stringify(obj);
             this.$http.post('http://47.95.203.111:8080/EasyBuyNews/Login',str,
            //如果后台写了application 你就不用写headers
            {
                headers:{
                    "Content-type":"application/x-www-form-urlencoded"
                }
            }
            ).then(res=>{
                console.log(res);
                if(res.data.msg == false){
                  console.log("用户名或密码不正确！！");
                  prompt_login.innerHTML="用户名或密码不正确！！";
                  return false;
                }else{
                  prompt_login.innerHTML="";
                    console.log(this.login_user);
                   this.$router.push({path: '/demo', query: {name:this.login_user}});
                }
            });
        }
        
       
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.border {
  border: 1px solid #000;
}
input,
button {
  outline: none;
}
li {
  list-style: none;
}
.login_header {
  height: 80px;
  /* border: 1px solid #000; */
  line-height: 80px;
}
.login_header img {
  padding: 20px;
}
.login_body {
  background-image: url("../assets/Hisense_img/7bd4e8a7-d132-4c9b-b517-2f3d2e890606.jpg");
  background-repeat: no-repeat;
  background-position: -330px;
  height: 680px;
  position: relative;
}

.login_div {
  /* border: 1px solid #000; */
  width: 384px;
  height: 555px;
  background: #fff;
  position: absolute;
  right: 75px;
  top: 75px;
}
.login_div_title {
  height: 80px;
  line-height: 80px;
  border-bottom: 2px solid #eee;
}
.background_erweima {
  height: 80px;
  width: 80px;
  background-image: url("../assets/Hisense_img/erweima(1).png");
  background-repeat: no-repeat;
  background-size: 70px;
  background-position: 0px;
  position: relative;
  top: -80px;
  right: -310px;
  /* border: 1px solid #000; */
}
.background_erweima:hover {
  background-image: url("../assets/Hisense_img/erweima.png");
}
.login_ul_title li {
  float: left;
  list-style: none;
  font-size: 18px;
  margin-right: 55px;
  margin-left: 55px;
  text-align: center;
  color: #999;
  border-bottom: 2px solid #00aaa6;
}
/* 三角 */
.triangle_border_left {
  width: 0;
  height: 0;
  border-width: 62px 0 0 62px;
  border-style: solid;
  border-color: transparent transparent transparent #fff; /*透明 透明 透明 灰*/
  /* margin:40px auto; */
  position: absolute;
  right: 15px;
  top: 10px;
}

/* 账户登录 */
.login_zhanghu {
  /* text-align: center; */
  margin-left: 50px;
  margin-right: 50px;
}
.login_zhanghu input {
  width: 280px;
  height: 35px;
  font-size: 14px;
  border: 0px;
  border-bottom: 1px solid #ddd;
}
.login_zhanghu span {
  font-size: 12px;
  color: #666;
}
.user_prompt {
  position: relative;
}
/* 验证 */
.user_yanzheng {
  position: absolute;
  top: 160px;
  background-image: url("../assets/Hisense_img/tanhao.png");
  background-repeat: no-repeat;
  background-size: 15px;
  height: 15px;
  font-size: 12px;
  color: #f26522;
}
.pwd_yanzheng {
  position: absolute;
  top: 240px;
  background-image: url("../assets/Hisense_img/tanhao.png");
  background-repeat: no-repeat;
  background-size: 15px;
  height: 15px;
  font-size: 12px;
  color: #f26522;
}
.text_propmt{
    visibility: hidden;
}
/* 失去焦点 */
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
    font-size: 12px;
    color: #666;
    top: 5px;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    font-size: 16px;
    color: #999;
    top: 20px;
  }
}

@keyframes slideInUp {
  from {
    top: 5px;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
    font-size: 12px;
    color: #666;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    font-size: 16px;
    color: #999;
    top: 20px;
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  animation: slideInUp 1s 1;
  /* 让动画停在最后一帧 */
  animation-fill-mode: forwards;
}

/* 获取焦点 */
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
    font-size: 16px;
    color: #999;
    top: 20px;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    font-size: 12px;
    color: #666;
    top: 5px;
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
    font-size: 16px;
    color: #999;
    top: 20px;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    font-size: 12px;
    color: #666;
    top: 5px;
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  animation: slideInDown 1s 1;
  /* 让动画停在最后一帧 */
  animation-fill-mode: forwards;
}
.show_pwd {
  position: absolute;
  right: 70px;
  top: 210px;
  width: 20px;
  background-repeat: no-repeat;
  background-size: 15px;
  height: 15px;
  background-image: url("../assets/Hisense_img/ease.png");
}
.ease_green {
  background-image: url("../assets/Hisense_img/ease(1).png");
}

.login_div_button {
  margin-left: 50px;
  margin-right: 50px;
}
.login_div_button input[type='button']{
  height: 40px;
  width: 280px;
  background: #00aaa6;
  border: 0px;
  color: #fff;
}

.login_div_button input:hover {
  background: #1fccd0;
}

.login_div_button ul {
  font-size: 12px;
}
.login_div_button > ul > li:nth-child(1) > input {
  -webkit-appearance: radio;
}
.login_div_button > ul > li:nth-child(3) a {
  color: #000;
  text-decoration: none;
}
.login_div_button > ul > li:nth-child(2) a {
  color: #00aaa6;
  text-decoration: none;
  margin-left: 15px;
}
/* 第三方登录方式 */
.login_three {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
.login_three > a:nth-of-type(1) {
  margin-right: 20px;
}

.login_footer {
  height: 100px;
  /* border:1px solid #000; */
  /* line-height: 100px; */
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, "Microsoft YaHei", simsun, "Helvetica Neue",
    Arial, Helvetica, sans-serif;
  color: #666;
  padding-top: 25px;
  line-height: 30px;
}
</style>
