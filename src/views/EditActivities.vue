<template>
<div>
  <!-- <sideNav/> -->
  <editactivity/>
</div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import editactivity from '../components/dashboard/settings/edits/EditActivities.vue';

export default {
  name: 'AdminBooking',
  components: {
    editactivity,
  },
};
</script>
