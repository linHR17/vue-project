<template lang="html">
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <img src="../assets/logo4.png" alt="" /><span>VUE<i class="txt">ADMIN</i></span>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/user.png" alt="" />林登锋</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>推出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside>
        <el-menu theme="dark">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航</template>
            <el-menu-item>Table</el-menu-item>
          </el-submenu>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">Table</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item>导航</el-breadcrumb-item>
              <el-breadcrumb-item>Table</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background-color: #1f2d3d;
      color: #c0ccda;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        .userinfo-inner {
          color: #c0ccda;
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 10px 0 10px 10px;
            float: right;
          }
        }
      }
      .logo {
        font-size: 22px;
        img {
          width: 40px;
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #20a0ff;
        }
      }
    }
    .main {
      background-color: #324057;
      position: absolute;
      top: 60px;
      bottom: 0;
      overflow: hidden;
    }
    aside {
      width: 230px;
    }
    .content-container {
      background-color: #f1f2f7;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-warpper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
