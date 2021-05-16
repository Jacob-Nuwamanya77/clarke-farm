<template>
  <div>
    <HeroCoffee />
    <CoffeeProcess />
    <OurCertificates />
  </div>
</template>

<script>
import HeroCoffee from '@/components/coffee/HeroCoffee.vue';
import CoffeeProcess from '@/components/coffee/CoffeeProcess.vue';
import OurCertificates from '@/components/coffee/OurCertificates.vue';

export default {
  name: 'CoffeePage',
  components: {
    HeroCoffee,
    CoffeeProcess,
    OurCertificates,
  },
};
</script>
