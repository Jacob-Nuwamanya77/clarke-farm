<template>
  <div class="dashboard-container">
    <SideNav/>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import SideNav from '@/components/shared/SideNavigation.vue';
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
