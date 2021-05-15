<template>
  <div>
    <HeroCoffee />
    <!-- <BuyCoffee/> -->
  </div>
</template>

<script>
import HeroCoffee from '@/components/HeroCoffee.vue';
// import BuyCoffee from '@/components/BuyCoffee.vue';

export default {
  name: 'CoffeePage',
  components: {
    HeroCoffee,
    // BuyCoffee,
  },
};
</script>
