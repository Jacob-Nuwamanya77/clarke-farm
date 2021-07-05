<template>
  <div class="dashboard-content">
    <DashboardHeader />
    <div class="content-area">
      <div id="content-left"></div>
      <div id="content-right">
        <div id="filter-container">
          <label for="filter">Filter By: </label>
          <select id="filter" @change="setFilter">
            <option value="tourism">Tourism</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>
        <SummaryByDate cardTitle="Incoming guests"/>
        <SummaryByDate cardTitle="Check out"/>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardHeader from '@/components/shared/DashboardHeader.vue';
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
  },
  methods: {
    setFilter(event) {
      this.filter = event.target.value;
    },
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
