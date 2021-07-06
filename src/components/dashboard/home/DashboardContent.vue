<template>
  <div class="dashboard-content">
    <DashboardHeader />
    <div class="content-area">
      <div id="content-left">
        <DailyOrders />
      </div>
      <div id="content-right">
        <div id="filter-container">
          <label for="filter">Filter By: </label>
          <select id="filter" @change="setFilter">
            <option value="tourism">Tourism</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>
        <template v-if="filter === 'tourism'">
          <SummaryByDate cardTitle="Incoming guests" product="tourism" :list ="incomingGuests" category="in" />
          <SummaryByDate cardTitle="Check out" product="tourism" :list ="checkOutGuests" category="out" />
        </template>
        <template v-else>
          <SummaryByDate cardTitle="Latest orders" product="coffee" :list="incomingOrders" category="in" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DashboardHeader from '@/components/shared/DashboardHeader.vue';
import DailyOrders from './DailyOrders.vue';
import SummaryByDate from './SummaryByDate.vue';

export default {
  name: 'DashboardHome',
  data() {
    return {
      filter: 'tourism',
    };
  },
  components: {
    DashboardHeader,
    SummaryByDate,
    DailyOrders,
  },
  methods: {
    setFilter(event) {
      this.filter = event.target.value;
    },
  },
  computed: {
    ...mapGetters({
      incomingGuests: 'sortIncomingGuests',
      checkOutGuests: 'sortCheckOutGuests',
      incomingOrders: 'sortIncomingOrders',
      deliveredOrders: 'sortDeliveredOrders',
      pendingOrders: 'sortPendingOrders',
    }),
  },
};
</script>
<style scoped>
.dashboard-content{
  width:90%;
}
.content-area{
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
}
#content-left{
  width:70%;
}
#content-right{
  width:28%;
  height:80vh;
  border-radius: 10px;
  background-color: rgb(250,250,250)
}
#filter-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
#filter-container label {
  margin-right: 10px;
  color:#a9a9a9;
  font-weight: bold;
}
#filter-container select{
  border:none;
  height:30px;
  padding-left: 10px;
  padding-right: 10px;
}
#filter-container select:hover{
  cursor: pointer;
}
</style>
