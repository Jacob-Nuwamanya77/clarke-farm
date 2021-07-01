<template>
  <div class="dashboard-container">
    <SideNav @mouseover="togglesidebar" @mouseout="togglesidebar"/>
    <Content/>
  </div>
</template>

<script>
import Content from '@/components/dashboard/home/DashboardContent.vue';
import SideNav from '@/components/dashboard/SideNavigation.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },
  components: {
    SideNav,
    Content,
  },
};
</script>

<style>
.dashboard-container{
  display: flex;
}
</style>

<style scoped>

</style>
