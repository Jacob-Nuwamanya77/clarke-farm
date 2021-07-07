<template>
  <div class="dashboard-container">
    <SideNav />
    <SubNav />
    <Content />
  </div>
</template>

<script>
import Content from '@/components/dashboard/settings/SettingsTableActivities.vue';
import SubNav from '@/components/dashboard/settings/SettingsContent.vue';
import SideNav from '@/components/shared/SideNavigation.vue';

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
