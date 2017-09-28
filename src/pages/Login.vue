<template>
  <div id="page-reg">
    <div class="main">
      <div class="head">
        <h1>Login - Marmot</h1>
        <el-form class="form" ref="form" :model="login_info">
          <el-form-item label="Username:">
            <el-input v-model="login_info.username" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Password:">
            <el-input v-model="login_info.password" type="password"></el-input>
          </el-form-item>
          <el-button type="primary" class="submit" @click="login()">Login</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import server from '../lib/server';
  import handler_exception_ajax from '../lib/handle_exception_ajax'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        login_info: {
          username: '',
          password: ''
        }
      }
    },
    created () {
      if (this.user.is_login) {
        this.$message({
          showClose: true,
          message: 'Login',
          type: 'success'
        });
        this.$router.replace("/event");
      }
    },
    computed: {
      user () {
        return this.$store.state.user;
      }
    },
    methods: {
      async login() {
        if (this.login_info.username.length <= 0 || this.login_info.password.length <= 0) {
          this.$message({
            showClose: true,
            message: 'Username or Password can not be empty!',
            type: 'error'
          });
          return;
        }
        try {
          let res = await server.user_token_post(this.login_info);
          this.user_token_set(res.data);
          this.$message({
            showClose: true,
            message: 'Login Success',
            type: 'success'
          });
          this.$router.replace("/event");
        } catch (e) {
          console.log(e);
          handler_exception_ajax(e, this);
        }
      },
      ...mapActions({
        user_set: 'user_set',
        user_token_set: 'user_token_set'
      })
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
