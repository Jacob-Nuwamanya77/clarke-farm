<template>
  <div class="dashboard-container">
    <SideNav @mouseover="togglesidebar" @mouseout="togglesidebar"/>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNavigation.vue';
import Content from './Trainings.vue';

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
