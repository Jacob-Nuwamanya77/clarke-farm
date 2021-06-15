<template>
  <div class="container">
    <home/>
  </div>
</template>

<script>

import sidebar from '@/components/AdminSideNavigation.vue';
import home from '@/components/dashboard/AdminHome.vue'

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    sidebar,
    home,
  },
};
</script>

