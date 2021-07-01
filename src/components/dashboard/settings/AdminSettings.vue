<template>
  <div class="dashboard-container">
    <SideNav @mouseover="togglesidebar" @mouseout="togglesidebar" id="sidebar"/>
    <div>
      <SubNav/>
    </div>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import Content from '@/components/dashboard/settings/SettingsTableActivities.vue';
import SubNav from '@/components/dashboard/settings/SettingsContent.vue';
import SideNav from '@/components/dashboard/SideNavigation.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },
  components: {
    SideNav,
    SubNav,
    Content,
  },
};
</script>
