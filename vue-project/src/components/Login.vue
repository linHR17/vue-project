<template lang="html">
  <el-form :model="form" :rules="rule" class="login-container">
    <h3>系统登录</h3>
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name" type="text" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="form.pwd" type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox>记住密码</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleSubmit" type="primary">登录</el-button>
      <el-button>注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import $ from 'jquery'
import { parseUrl } from '../api/url'
export default {
  created () {
    this.handleSubmit()
  },
  data () {
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    }
    let validatePwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
    }
    return {
      form: {
        name: '',
        pwd: ''
      },
      rule: {
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
      },
      userList: ''
    }
  },
  methods: {
    handleSubmit () {
      let _this = this
      let baseApiUrl = ''
      if (baseApiUrl === '') {
        baseApiUrl = parseUrl(window.location.href)
      }
      let api = 'user_list'
      let apiUrl = baseApiUrl + 'integratest/api/' + api
      let params = {
        loginName: '测试内容ve%%',
        pageIndex: 9198,
        pageSize: 1869
      }
      let submitData = {
        // username: 'yjf@spacetech.com.cn',
        // password: 'zaq1234'
        apiparams: JSON.stringify(params)
      }
      $.ajax({
        url: apiUrl,
        type: 'POST',
        data: submitData,
        success: function (data) {
          console.log(_this.userList = JSON.stringify(data, null, 2))
        },
        error: function () {
          console.log('出错了！')
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
  margin-top: 180px;
  background-color: #F9FAFC;
  border: 2px solid #8492A6;
}

.login-container h3 {
  font-size: 18px;
  color: #505458;
  text-align: center;
}
</style>
