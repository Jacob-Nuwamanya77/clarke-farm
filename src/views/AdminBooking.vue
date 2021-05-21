<template>
<div>
  <!-- <sideNav/> -->
  <dashboard/>
</div>
</template>

<script>
import dashboard from '@/components/dashboard/AdminBooking.vue';
// import sideNav from '@/components/dashboard/SideNav.vue';

export default {
  name: 'AdminBooking',
  components: {
    dashboard,
  },
};
</script>
