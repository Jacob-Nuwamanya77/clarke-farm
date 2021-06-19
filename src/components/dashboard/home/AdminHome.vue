<template>
  <div class="row">
      <!-- side navigation -->
  <SideNav @mouseover="togglesidebar"
      @mouseout="togglesidebar" id="sidebar"/>
    <div class="col-md-9 right-container">
      <!-- top nav bar -->
      <div class="topnav fixed">
        <fa icon="user-cog" class="icon" />
        <fa icon="sign-out-alt" class="icon signout" />
      </div>
    <Content id="maincontent"/>
    </div>
  </div>
</template>

<script>
import Content from '@/components/dashboard/home//DashboardContent.vue';
import SideNav from '@/components/dashboard/SideNavigation.vue';

let mini = true;
export default {
  name: 'Admin',
  data() {
    return {
    };
  },
  components: {
    SideNav,
    Content,
    // AdminHeadingHome,
    // HomeContent,
    // IncomingGuests,

  },
  methods: {
    togglesidebar() {
      if (mini) {
        console.log(mini);
        document.getElementById('sidebar').style.width = '250px';
        document.getElementById('maincontent').style.marginLeft = '150px';
        // document.getElementById("logo-text").style.display = 'block';

        mini = false;
      } else {
        console.log(mini);
        document.getElementById('sidebar').style.width = '70px';
        document.getElementById('maincontent').style.marginLeft = '0px';
        // document.getElementById("logo-text").style.display = 'none';

        mini = true;
      }
    },
  },
};
</script>
<style scoped>
.content{
  margin-top: 50px;
  transform: translate(2%,0);
  transition:transform 1s linear;
}
.right-container{
  margin-left: 100px;
  margin-top: 20px;
}
.icon{
  float: right;
  font-size: 20px;
  color: #068d68;
}
.signout{
  margin-right:20px;
}
</style>
