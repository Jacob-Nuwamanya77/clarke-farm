<template>
  <div class="container">
    <AdminHome/>
  </div>
</template>

<script>

import AdminHome from '@/components/dashboard/AdminHome.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminHome,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}

</style>
