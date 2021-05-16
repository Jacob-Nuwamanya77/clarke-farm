<template>
  <div>
    <HeroCoffee />
    <CoffeeProcess />
    <OurCertificates />
  </div>
</template>

<script>
import HeroCoffee from '@/components/HeroCoffee.vue';
import CoffeeProcess from '@/components/CoffeeProcess.vue';
import OurCertificates from '@/components/OurCertificates.vue';

export default {
  name: 'CoffeePage',
  components: {
    HeroCoffee,
    CoffeeProcess,
    OurCertificates,
  },
};
</script>
