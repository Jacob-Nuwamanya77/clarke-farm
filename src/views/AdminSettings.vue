<template>
  <div>
       <AdminSettings/>
  </div>
</template>

<script>
import AdminSettings from '@/components/dashboard/AdminSettings.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    // AdminSideNavigation,
    AdminSettings,
    // AdminHome,
  },
};
</script>
