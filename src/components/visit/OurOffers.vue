<template>
  <div class="our-offers">
    <p class="section-title">What We Offer</p>
    <p class="sub-text">
      See all the activities you can enjoy, the accommodations to
      choose from and what our guests have to say about us.
    </p>
    <TabMenu :tabsList="tabs" @selected = "setSelectedTab"/>
    <div class="card-container">
      <Card v-for="(activity, index) in filterDisplayData" :key="index" :item="activity"/>
    </div>
    <div class="arrow-navigation">
      <div class="forward-back-navigation">
        <span class="nav-button" @click="prevPage" v-if="page !== 1">
          <fa icon="angle-left" />
        </span>
        <span class="nav-button" @click="nextPage" v-if="!lastPage">
          <fa icon="angle-right" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/shared/TabMenu.vue';
import Card from '@/components/shared/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'OurOffers',
  // created() {
  //   this.$store.dispatch('fetchAll');
  // },
  data() {
    return {
      tabs: ['Activities', 'Accomodation', 'Food'],
      page: 1,
      limit: 3,
      selectedTab: 'activities',
    };
  },
  components: {
    TabMenu,
    Card,
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      this.page -= 1;
    },
    setSelectedTab(selected) {
      this.selectedTab = selected.toLowerCase();
      this.page = 1;
    },
  },
  computed: {
    ...mapState({
      activities: (state) => state.activities.activities,
      accomodations: (state) => state.accomodations.accomodations,
      foods: (state) => state.foods.foods,
    }),
    filterDisplayData() {
      const filtered = [];
      let incomingData;
      if (this.selectedTab === 'activities') {
        incomingData = [...this.activities];
      } else if (this.selectedTab === 'accomodation') {
        incomingData = [...this.accomodations];
      } else {
        incomingData = [...this.foods];
      }
      const start = (this.page - 1) * this.limit;
      const end = (this.page * this.limit > incomingData.length)
        ? incomingData.length : this.page * this.limit;

      for (let index = start; index < end; index += 1) {
        filtered.push(incomingData[index]);
      }
      return filtered;
    },
    lastPage() {
      if (this.page * this.limit > this.activities.length) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.our-offers{
  position:relative;
  margin-top:60px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}

.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

@media screen and (max-width:990px){
  .sub-text{
    width:80%;
  }
}
@media screen and (max-width:900px){
  .sub-text{
    width:90%;
  }
}
@media screen and (max-width:730px){
  .sub-text{
    width:95%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
  }
}
.navigation{
  margin-left: auto;
  margin-right: auto;
  max-height:30px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding:0;
}
@media screen and (max-width:730px){
  .navigation {
    padding-left: 10px;
    justify-content: start;
  }
  .navigation ::-webkit-scrollbar{
    width:0px;
  }
}
.tab{
  min-width:150px;
  height:30px;
  margin-right: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
}
.tab:hover{
  background-color: var(--dark-green);
}
.active-nav{
  background-color: var(--dark-green);
}
.inactive-nav{
  background-color: rgba(0, 0, 0, 0.3);
}
.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:center;
  overflow-x: auto;
  overflow-y:hidden;
  width:95%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width:1240px){
  .card-container{
    width:70%;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
}
.card-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:900px){
  .card-container{
    justify-content: start;
  }
}

.arrow-navigation{
  width:95%;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@media screen and (min-width:1240px){
  .arrow-navigation{
    width:70%;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
}
.forward-back-navigation{
  width:80px;
  display:flex;
  justify-content: space-between;
}
.nav-button{
  width:32px;
  height: 35px;
  font-size: 20px;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mono-dark-green);
}
.nav-button:hover{
  cursor:pointer;
}
.active{
  background-color: var(--mono-dark-green);
}
.disabled{
  background-color: rgba(200,200,200,0.7);
}
</style>
