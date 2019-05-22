<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item prop="userName">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.userName"
                auto-complete="off"
                :placeholder="$t('login.username')">
        <i slot="prefix"
           class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="userPass">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.userPass"
                auto-complete="off"
                :placeholder="$t('login.password')">
        <i class="el-icon-view el-input__icon"
           slot="suffix"
           @click="showPassword"></i>
        <i slot="prefix"
           class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :span="24">
        <el-col :span="16">
          <el-input size="small"
                    @keyup.enter.native="handleLogin"
                    :maxlength="code.len"
                    v-model="loginForm.code"
                    auto-complete="off"
                    :placeholder="$t('login.code')">
            <i slot="prefix"
               class="icon-yanzhengma"></i>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-code">
            <div v-html="code.src"
                 @click="refreshCode"></div>
          </div>
        </el-col>
      </el-row>

    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">{{$t('login.submit')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import * as user from '@/api/user';
import { randomLenNum } from "@/util/util";
import { mapGetters } from "vuex";
import { setImgToken } from '@/util/auth'
export default {
  name: "userlogin",
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.code.value != value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: "",
        userPass: "",
        code: "",
        redomStr: ""
      },
      checked: false,
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        userPass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
          // { required: true, trigger: "blur", validator: validateCode }
        ]
      },
      passwordType: "userPass"
    };
  },
  created() {
    this.refreshCode();
  },
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    refreshCode() {
      user.code().then(data=>{
        const res = data.data;
        this.loginForm.code = ''
        this.code.src=res.img
        setImgToken(res.token)
      })
    },
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          user.signinUser( this.loginForm )
            .then(res => { 
              if (res.data.code==0) {
                // console.log('==================登录成功==================');
                this.$store.dispatch("LoginByUsername", res.data).then(() => {
                //   console.log('================成功调用==============');
                  this.$router.push('/wel')
                });
                return
              }
              this.refreshCode();
              this.$message({
                type: 'error',
                message: res.data.message
              });
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
