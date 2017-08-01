<template>
  <div id="page-reg">
    <div class="main">
      <div class="head">
        <h1>Register - Marmot</h1>
        <el-form class="form" ref="form" :model="reg_info">
          <el-form-item label="Username:">
            <el-input v-model="reg_info.name" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Password:">
            <el-input v-model="reg_info.name" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Repeat Password:">
            <el-input v-model="reg_info.name" type="password"></el-input>
          </el-form-item>
            <el-button type="primary" class="submit" @click="reg()">Register</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
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
        alert("Do register");
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
