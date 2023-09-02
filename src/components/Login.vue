<template>
  <div class="building">
    <div style="text-align: center;">
      <img class="logo" style=" width: 325px;height: 117px;" src="@/assets/logo_transparent.png">
    </div>

    <div class="layout">
      <h1 style="text-align: center;font-weight: normal;color: aliceblue;text-shadow: 5px 5px 5px rgb(15, 2, 33);font-size: 38px;">实验室管理系统</h1>
      <el-tabs stretch="true" type="border-card">
        <el-tab-pane label="登录">
          <el-form
              ref="form"
              label-position="right"
              label-width="60px"
              style="max-width: 460px"
              class="loginForm"
          >
            <el-form-item label="账号：">
              <el-input v-model="form.email" >
                <template #prefix>
                  <el-icon class="el-input__icon"><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input type="password" v-model="form.password" >
                <template #prefix>
                  <el-icon class="el-input__icon"><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-row>
              <el-checkbox
                  class="checkBox"
                  label="同意用户使用准则"
                  name="type"
              />
            </el-row>
            <el-row >
              <el-button text >
                <a class="floatR" @click="isChangePassword = true">忘记密码</a>
              </el-button>
            </el-row>
            <el-button
                type="primary"
                class="loginBtn"
                @click="login"
            >
              登录
            </el-button>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册">
          <el-form
              label-position="right"
              label-width="100px"
              style="max-width: 460px"
              class="loginForm"
          >
            <el-form-item label="账号：">
              <el-input v-model="rEmail" />
            </el-form-item>
            <el-form-item label="密码：">
              <el-input type="password" v-model="rPassword" />
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input
                  type="password"
                  v-model="confirmPassword"
                  @blur="confirmFunc"
              />
            </el-form-item>
            <el-form-item label="验证码：">
              <el-row>
                <el-input
                    type="password"
                    v-model="identifyCode"
                    class="inpWidth"
                />
                <el-button type="primary" @click="getIdentifyCode" plain>
                  获取验证码
                </el-button>
              </el-row>
            </el-form-item>

            <el-row>
              <el-checkbox
                  class="checkBox"
                  v-model="rAgree"
                  label="同意用户使用准则"
                  name="type"
              />
            </el-row>
            <el-button
                v-if="rAgree"
                type="primary"
                class="loginBtn"
                @click="register"
            >
              注册
            </el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div >
    <!-- 忘记密码弹窗 -->
    <teleport to="body">
      <el-dialog  v-model="isChangePassword" title="修改密码" width="40%">
        <el-form
            label-position="right"
            label-width="100px"
            style="max-width: 460px"
            class="loginForm"
        >
          <el-form-item label="邮箱：">
            <el-input v-model="rEmail" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="rPassword" />
          </el-form-item>
          <el-form-item label="确认密码：">
            <el-input
                type="password"
                v-model="confirmPassword"
                @blur="confirmFunc"
            />
          </el-form-item>
          <el-form-item label="验证码：">
            <el-row>
              <el-input type="password" v-model="identifyCode" class="inpWidth" />
              <el-button type="primary" @click="getIdentifyCode" plain>
                获取验证码
              </el-button>
            </el-row>
          </el-form-item>

          <el-row>
            <el-checkbox
                class="checkBox"
                v-model="rAgree"
                label="同意用户使用准则"
                name="type"
            />
          </el-row>
          <el-button
              v-if="rAgree"
              type="primary"
              class="loginBtn"
              @click="changePassword"
          >
            修改密码
          </el-button>
          <el-button
              v-if="rAgree"
              type="primary"
              class="loginBtn"
              @click="isChangePassword = false"
          >
            关闭页面
          </el-button>
        </el-form>
      </el-dialog>
    </teleport>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";

export default {
  data(){
    // const form = reactive({
    //   email: "",
    //   password: "",
    //   isAgree: 0,
    // })

    // const registerForm = reactive({
    //   rEmail: "",
    //   rPassword: "",
    //   confirmPassword: "",
    //   identifyCode: "",
    //   rAgree: 0,
    // })

    // const confirmFunc = () => {
    //   if (registerForm.confirmPassword !== registerForm.rPassword)
    //     ElMessage.error("两次密码输入不一致.");
    // }

    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      }
    }

  },
  methods: {
    login() {
      this.axios.post('http://localhost:8888/login', {
        email: this.form.email,
        password: this.form.password
      }).then(successResponse => {
        if(successResponse.data.code === 200) {
          this.$router.replace('/main')
        } else {
          console.log(successResponse)
        }
      }).catch(failResponse =>{})
      // this.$router.push('/main')
      // console.log(form);
    },
    register() {
      console.log("注册", registerForm);
    },
    getIdentifyCode() {
      console.log("获取验证码");
    },
    changePassword() {}
  }

  /*
  setup() {
    const form = reactive({
      Email: "",
      password: "",
      isAgree: 0,
    });
    const registerForm = reactive({
      rEmail: "",
      rPassword: "",
      confirmPassword: "",
      identifyCode: "",
      rAgree: 0,
    });

    // 方法
    // 登录 将账号密码写入后台,获取用户数据,后登录
    // 需要修改共享数据
    methods: {
      function login() {
        console.log(this)
        this.$router.push('/main')
        console.log(form);
      }

      // 注册 -- 将账号密码写入后台, 自动登录
      // 需要修改共享数据
      function register() {
        console.log("注册", registerForm);
      }

      // 获取验证码
      function getIdentifyCode() {
        console.log("获取验证码");
      }

      // 确认密码
      const confirmFunc = () => {
        if (registerForm.confirmPassword !== registerForm.rPassword)
          ElMessage.error("两次密码输入不一致.");
      };
      // 修改密码
      let isChangePassword = ref(false);

      // 用的是注册参数
      function changePassword() {
      }

      return {
        isChangePassword,
        ...toRefs(form),
        ...toRefs(registerForm),
        login,
        register,
        getIdentifyCode,
        confirmFunc,
        changePassword,
      };
    }
  },
  */
};
</script>

<style scoped>
.logo{
  margin-top: 10px;
}

.logo img{
  margin-top: 10px;
  height: 9%;
  width: 9%;
}

.layout {
  opacity: 0.8;
  position: absolute;
  left: calc(50% - 250px);
  top: 20%;
  width: 500px;
}
.loginBtn {
  width: 200px;
  border-radius: 5px;
}
.loginForm {
  text-align: center;
}
.checkBox {
  margin-left: 7px;
}
.inpWidth {
  width: 165px;
}
.floatR {
  font-size: 10px;
  color: rgb(39, 39, 164);
}

.building{
  background: url('@/assets/loginbackground.jpg');
  width:100%;
  height:100%;
  position:fixed;
  background-size:100%;}

</style>
