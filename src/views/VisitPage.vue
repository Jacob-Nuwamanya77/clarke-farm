<template>
  <div>
    <HeroVisit/>
    <PopularActivities />
    <OurOffers/>
    <OurPackages />
  </div>
</template>

<script>
import HeroVisit from '@/components/HeroVisit.vue';
import PopularActivities from '@/components/PopularActivities.vue';
import OurOffers from '@/components/OurOffers.vue';
import OurPackages from '@/components/OurPackages.vue';

export default {
  name: 'Visit',
  components: {
    HeroVisit,
    PopularActivities,
    OurOffers,
    OurPackages,
  },
};
</script>

<style scoped>

</style>
