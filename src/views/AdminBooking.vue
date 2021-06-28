<template>
<div>
  <!-- <sideNav/> -->
  <dashboard/>
</div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import dashboard from '../components/dashboard/Booking/AdminBooking.vue';

export default {
  name: 'AdminBooking',
  components: {
    dashboard,
  },
};
</script>
