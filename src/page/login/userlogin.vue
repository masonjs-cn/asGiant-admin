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
                placeholder="请输入用户名">
        <i slot="prefix"
           class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.password"
                auto-complete="off"
                placeholder="请输入密码">
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
                    placeholder="请输入验证码">
            <i slot="prefix"
               class="icon-yanzhengma"></i>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-code">
            <!-- <span class="login-code-img"
                  @click="refreshCode"
                  v-if="code.type == 'text'">{{code.value}}</span> -->
            <img :src="imgsrc"
                 ref="img"
                 class="login-code-img"
                 @click="refreshCode"
            />
            <!-- <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i> -->
          </div>
        </el-col>
      </el-row>

    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import { isvalidUsername } from "@/util/validate";
// import { randomLenNum } from "@/util/util";
import { mapGetters } from "vuex";
import * as people from '@/api/people'
export default {
  name: "userlogin",
  data() {
    const validateUsername = (rule, value, callback) => {
      // if (!isvalidUsername(value)) {
      if (value=="") {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value=="") {
      // if (this.code.value != value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      imgsrc:'',
      loginForm: {
        userName: "小吴",
        password: "123456",
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
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateCode }
        ]
      },
      passwordType: "password"
    };
  },
  created() {
    this.imgsrc='api/Code/ImageCode';
    this.refreshCode();
  },
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    refreshCode() {
      // this.loginForm.redomStr = randomLenNum(this.code.len, true);
      // this.code.type == "text"
      //   ? (this.code.value = randomLenNum(this.code.len))
      //   : (this.code.src = `${this.codeUrl}/${this.loginForm.redomStr}`);
      this.loginForm.code = '';
      this.$refs.img.src = 'api/Code/ImageCode';
    },
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          people.loginUserName(this.loginForm)
          .then(res=>{
            if (res.data.flag==1) {
                this.$store.dispatch("LoginByUsername", res.data).then(() => {
                  this.$router.push({ path: this.tagWel.value });
                });
                return
            }

            this.$message({
              type: 'error',
              message: res.data.msg
            });

          })
          // this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
          //   this.$router.push({ path: this.tagWel.value });
          // });
        }
      });
    }
  }
};
</script>

<style>
</style>
