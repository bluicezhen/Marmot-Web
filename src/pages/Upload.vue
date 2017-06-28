<template>
  <div>
    <input multiple @change="file_upload($event.target.files)" v-show="false" type="file" accept="image/*"/>
    <el-button @click="file_select">Upload Image</el-button>
  </div>
</template>

<script>
  import server from '../lib/server';
  import qiniu from '../lib/qiniu';

  export default {
    methods: {
      file_select () {
        this.$el.getElementsByTagName('input')[0].click();
      },
      async file_upload(file_list) {
        // TODO: Handle error
        for (let file of file_list) {
          try {
            let res_qut = await server.user_qiniu_upload_token_get(file.name);
            let upload_key = res_qut.data.upload_key;
            let upload_token = res_qut.data.upload_token;
            let image_url = res_qut.data.url;
            let res_up = await qiniu.upload(file, upload_key, upload_token);
            console.log(res_up);
          } catch (e) {
            console.log('Error', e);
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/scss/main';
</style>
