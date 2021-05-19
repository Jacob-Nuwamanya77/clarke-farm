<template>
  <div>
    <HeroVisit/>
    <PopularActivities />
    <OurOffers/>
    <OurPackages />

  </div>
</template>

<script>
import HeroVisit from '@/components/visit/HeroVisit.vue';
import PopularActivities from '@/components/visit/PopularActivities.vue';
import OurOffers from '@/components/visit/OurOffers.vue';
import OurPackages from '@/components/visit/OurPackages.vue';

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
