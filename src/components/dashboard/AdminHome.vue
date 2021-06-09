<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
      <SideNavigation/>
    </div>
    <div class="container-right">
      <AdminHeadingHome heading="Home"/>
       <HomeContent/>
        <IncomingGuests/>
       <div class="pagination">
        <Pagination />
      </div>
      </div>
    </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeContent.vue';
<<<<<<< HEAD
import SideNavigation from '@/components/dashboard/Sidenav.vue';
=======
import IncomingGuests from '@/components/dashboard/HomeTableIncoming.vue';
import Pagination from '@/components/pagination.vue';
>>>>>>> ca3b1ed6b22cdbe8a29b5e10ea3e3e2728260cae

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
    IncomingGuests,
    Pagination,
  },
};
</script>

<<<<<<< HEAD
<style>

=======
<style scoped>
.container {
  width: 98vw;
  margin-top: 0;
  margin-bottom:10vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.top-row {
  position: relative;
  padding-top: 5px;
  margin-top: 0px;
  margin-left: -5%;
  margin-right: 0%;

}
>>>>>>> ca3b1ed6b22cdbe8a29b5e10ea3e3e2728260cae
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
.pagination {
  width:auto;
   margin-top:3%;
   margin-left:5%;
}

</style>
