<template>
  <div class="marmot-panel">
    <h1>Panel</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import init from '../lib/init';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        user: 'user'
      })
    },
    created () {
      init(this);
    }
  };
</script>
