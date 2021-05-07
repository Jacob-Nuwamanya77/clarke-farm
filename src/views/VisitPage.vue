<template>
  <div>
    <HeroVisit/>
    <OurOffers/>
    <BookingForm/>
  </div>
</template>

<script>
import HeroVisit from '@/components/HeroVisit.vue';
import OurOffers from '@/components/OurOffers.vue';
import BookingForm from '@/components/BookingForm.vue';

export default {
  name: 'Visit',
  components: {
    HeroVisit,
    OurOffers,
    BookingForm,
  },
};
</script>

<style scoped>

</style>
