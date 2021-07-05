<template>
  <div class="dashboard-content">
    <DashboardHeader />
  </div>
</template>
<script>
import DashboardHeader from '@/components/shared/DashboardHeader.vue';

export default {
  name: 'DashboardHome',
  components: {
    DashboardHeader,
  },
};
</script>
<style scoped>
.dashboard-content{
  width:90%;
}
</style>
