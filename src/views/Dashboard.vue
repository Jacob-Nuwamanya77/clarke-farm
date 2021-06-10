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
 width:15%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  color: white;
  margin-left: 20px;
}

</style>
