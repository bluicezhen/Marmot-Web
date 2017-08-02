<template>
  <div id="page-reg">
    <div class="main">
      <div class="head">
        <h1>Register - Marmot</h1>
        <el-form class="form" ref="form" :model="reg_info">
          <el-form-item label="Username:">
            <el-input v-model="reg_info.username" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Nickname:">
            <el-input v-model="reg_info.nickname" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Password:">
            <el-input v-model="reg_info.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Repeat Password:">
            <el-input v-model="reg_info.password_re" type="password"></el-input>
          </el-form-item>
          <el-button type="primary" class="submit" @click="reg()">Register</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import server from '../lib/server';
  import handler_exception_ajax from '../lib/handle_exception_ajax'

  export default {
    data() {
      return {
        reg_info: {
          username: '',
          nickname: '',
          password: '',
          password_re: ''
        }
      }
    },
    methods: {
      async reg() {
        if (this.reg_info.username.length <= 0 || this.reg_info.password.length <= 0
          || this.reg_info.nickname.length <= 0) {
          this.$message({
            showClose: true,
            message: 'Username or Password can not be empty!',
            type: 'error'
          });
          return;
        }
        if (this.reg_info.password !== this.reg_info.password_re) {
          this.$message({
            showClose: true,
            message: 'The two passwords you typed do not match!',
            type: 'error'
          });
          return;
        }
        try {
          await server.user_post({
            username: this.reg_info.username,
            nickname: this.reg_info.nickname,
            password: this.reg_info.password
          });
          this.$message({
            showClose: true,
            message: 'Registered',
            type: 'success'
          });
        } catch (e) {
          console.log(e);
          handler_exception_ajax(e, this);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/main';

  #page-reg {
    .main {
      width: 400px;
      margin: 100px auto;
      padding: 20px;
      background-color: $color-gray-light;
      border-radius: 4px;

      .head {
        width: 100%;
        text-align: center;

        h1 {
          font-size: 23px;
          font-weight: lighter;
        }

        .form {
          .submit {
            margin-top: 15px;
            width: 100%;
          }
        }
      }
    }
  }
</style>
