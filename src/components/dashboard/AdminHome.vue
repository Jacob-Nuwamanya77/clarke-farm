<template>
  <div class="row">
  <AdminSideNavigation/>
    <!-- main content -->
      <div class="content" id="maincontent">
      <Content/>
      </div>
    </div>
</template>

<script>
 import AdminSideNavigation from '@/components/dashboard/DashNav.vue';
  import Content from '@/components/dashboard/DashboardContent.vue';
// import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
// import HomeContent from '@/components/dashboard/HomeTopNav.vue';
// import IncomingGuests from '@/components/dashboard/HomeTableIncoming.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    Content,
    // AdminHeadingHome,
    // HomeContent,
    // IncomingGuests,

  },
};
</script>
<style scoped>
.content{
  margin-top: 50px;
  transform: translate(2%,0);
  transition:transform 1s linear;
}
</style>
