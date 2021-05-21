<template>
  <div class="container">
    <!-- <div class="container-left">
      <AdminSideNavigation />
    </div> -->
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingHome heading="Home"/>
      </div>
      <div class="after-toprow">
       <HomeContent/>
      </div>

    </div>
  </div>
</template>

<script>
// import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeContent.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    // AdminSideNavigation,
    AdminHeadingHome,
    HomeContent,
  },
};
</script>

<style scoped>
.container {
  width: 98vw;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.top-row {
  position: relative;
  padding-top: 5px;
  margin-top: 40px;
  margin-left: -90px;
  margin-right: 50px;
}
.container-page-options {
  position: relative;
}
.container-delete-search {
  margin-top: 40px;
  margin-bottom: 10px;
  padding-left: 20px;
  text-align: left;
}

input[type="text"] {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 15px;
  margin-left: 35px;
  padding-left: 20px;
  background-color: rgb(220, 220, 220);
}

input[type="text"]:focus {
  background-color: white;
  z-index: 1;
  box-shadow: 4px 4px 5px rgb(80, 80, 80);
  outline: none;
}
.no-records {
  position: absolute;
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  color: white;
  /* margin-left: px; */
}
.container-right {
  margin-left: 5vw;
  width: 80vw;}

</style>
