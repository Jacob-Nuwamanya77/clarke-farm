<template>
<div>
  <dashboard/>
  <reviews/>
</div>
</template>

<script>
import dashboard from '@/components/AdminBooking.vue';
import reviews from '@/components/UserReviews.vue';

export default {
  name: 'TrainingPrograms',
  components: {
    dashboard,
    reviews,
  },
};
</script>
