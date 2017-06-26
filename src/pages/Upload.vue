<template>
  <div>
    <input multiple @change="file_upload($event.target.files)" v-show="false" type="file"/>
    <el-button @click="file_select">Upload Image</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      file_select () {
        this.$el.getElementsByTagName('input')[0].click();
      },
      file_upload(e) {
        console.log(e)
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/scss/main';
</style>
