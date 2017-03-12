<template lang="html">
  <el-form :model="ruleForm2" ref="ruleForm2" :rules="rules2" class="login-container">
    <h3>系统登录</h3>
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm2.name" type="text" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="ruleForm2.pwd" type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox>记住密码</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button @click.native.prevent="handleSubmit" type="primary" :loading="logining">登录</el-button>
      <el-button>注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import NProgress from 'nprogress'
export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    }
    var validatePwd = (rule, value, callback) => {
      if(!value) {
        return callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    }
    return {
      logining: false,
      ruleForm2: {
        name: '',
        pwd: ''
      },
      rules2: {
        name: [
          {
            validator: validateName,
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            validator: validatePwd,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.ruleForm2.validate( (valid) => {
        if (valid) {
          this.logining = true
          NProgress.start()
          setTimeout( () => {
            this.logining = false
            NProgress.done()
            this.$router.push({ path: '/table' })
          },2000)
        }
      })
    }
  }
}
</script>

<style lang="css">
.login-container {
  width: 350px;
  margin: 0 auto;
  padding: 35px;
  margin-top: 10%;
  background-color: #F9FAFC;
  border: 2px solid #8492A6;
}

.login-container h3 {
  font-size: 18px;
  color: #505458;
  text-align: center;
}
</style>
