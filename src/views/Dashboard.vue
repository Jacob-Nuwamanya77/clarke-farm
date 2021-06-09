<template>
  <div class="container">
   <div class="container-left">
     <sidebar/>
   </div>
  </div>
</template>

<script>

import sidebar from '@/components/AdminSideNavigation.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    sidebar,
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
.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #068d68;
  color: white;
  margin-left: 8.9%;
}

</style>
