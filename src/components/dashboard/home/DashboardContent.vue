<template>
  <div class="dashboard-content">
    <DashboardHeader />
    <div class="content-area">h</div>
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
.content-area{
  border:1px solid red;
}
</style>
