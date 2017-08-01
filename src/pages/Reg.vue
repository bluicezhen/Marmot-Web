<template>
  <div id="page-reg">
    <div class="main">
      <div class="head">
        <h1>Register - Marmot</h1>
        <el-form ref="form" :model="reg_info" @submit.prevent.self="reg()">
          <el-form-item label="Username:">
            <el-input v-model="reg_info.name" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Password:">
            <el-input v-model="reg_info.name" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Repeat Password:">
            <el-input v-model="reg_info.name" type="password"></el-input>
          </el-form-item>
          <el-form-item label=" ">
            <el-input type="submit" value="Register"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        reg_info: {
          username: '',
          password: '',
          password_re: ''
        }
      }
    },
    methods: {
      reg() {
        alert(11111111111111111111111);
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
          color: $color-black;
        }
      }
    }
  }
</style>
