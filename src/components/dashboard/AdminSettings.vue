<template>
  <div class="container">
    <div class="container-left">
      <!-- <AdminSideNavigation /> -->
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingSettings heading="Settings"/>
      </div>
      <div class="after-toprow">
       <SettingsContent/>
      </div>
      <div class="content-table">
        <SettingsTable/>
      </div>

    </div>
  </div>
</template>

<script>
// import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingSettings from '@/components/dashboard/AdminHeadingSettings.vue';
import SettingsContent from '@/components/dashboard/SettingsContent.vue';
import SettingsTable from '@/components/dashboard/SettingsTableActivities.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    // AdminSideNavigation,
    AdminHeadingSettings,
    SettingsContent,
    SettingsTable,
  },
};
</script>
