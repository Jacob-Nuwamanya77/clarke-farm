<template>
  <div class="row">
    <SideNav @mouseover="togglesidebar" @mouseout="togglesidebar"/>
    <div>
      <Content/>
    </div>
  </div>
</template>

<script>
import Content from '@/components/dashboard/home//DashboardContent.vue';
import SideNav from '@/components/dashboard/SideNavigation.vue';

let mini = true;
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