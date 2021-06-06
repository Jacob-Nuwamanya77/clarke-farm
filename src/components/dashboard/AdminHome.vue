<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
      <SideNavigation/>
    </div>
    <div class="container-right">
      <AdminHeadingHome heading="Home"/>
       <HomeContent/>
      </div>
    </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeContent.vue';
import SideNavigation from '@/components/dashboard/Sidenav.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    SideNavigation,
    AdminHeadingHome,
    HomeContent,
  },
};
</script>

<style>

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
  .container-right {
    margin-left:150px;
  width: 85%;
  margin-top: -80px;
  overflow-x: hidden;
}

</style>
