<template>
  <div class="row">
    <!-- side navigation -->
    <div
      class="col-md-3 sidenav"
      id="sidebar"
      @mouseover="togglesidebar"
      @mouseout="togglesidebar"
    >
      <ul>
    <h3 class="logo" id="logo-text ">CLARKE FARM</h3>
        <a href="#">
          <li><font-awesome-icon icon="home" /><span>Home</span></li>
        </a>
        <a href="#">
          <li><font-awesome-icon icon="book-open" /><span>Bookings</span></li>
        </a>
        <a href="#">
          <li>
            <font-awesome-icon icon="star-and-crescent" /><span
              >User Reviews</span
            >
          </li>
        </a>
        <a href="#">
          <li><font-awesome-icon icon="cogs" /><span>Settings</span></li>
        </a>
      </ul>
    </div>
    <div class="col-md-9 right-container">
      <!-- top nav bar -->
      <div class="topnav fixed">
        <fa icon="user-cog" class="icon" />
        <fa icon="sign-out-alt" class="icon signout" />
      </div>
      <!-- main content -->
      <div class="content" id="maincontent">
      <Content/>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '@/components/DashboardContent.vue'

let mini = true;
export default {
  name: "Dashboard",
  components:{
      Content,
  },
  methods: {
    togglesidebar() {
      if (mini) {
        console.log(mini);
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("maincontent").style.marginLeft = "150px";
        document.getElementById("logo-text").style.display = 'block';


        mini = false;
      } else {
        console.log(mini);
        document.getElementById("sidebar").style.width = "70px";
        document.getElementById("maincontent").style.marginLeft = "0px";
        document.getElementById("logo-text").style.display = 'none';


        mini = true;
      }
    },
  },
};
</script>
<style scoped>
.sidenav {
  background-color: #068d68;
  width: 70px;
  white-space: nowrap;
  transition: 0.5s;
  overflow-x: hidden;
  height: 100vh;
  position: fixed;
    background: linear-gradient(to  bottom, #068d68, #75cfb7);

}
.logo{
  margin-left: 0px;
  margin-top: -20px;
  color: white;
}
.sidenav a {
  text-decoration: none;
  font-size: 15px;
  font-family: "roboto";
  display: block;
  margin-top: 20px;
}
ul{
  margin-top: 60px;
}
li {
  list-style-type: none;
  padding: 10px;
  padding-left: 0px;
  color: white;
}
li:hover {
  background-color: white;
  color: #068d68;
  padding-left: 5px;
}
span {
  padding: 10px;
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
.content{
  margin-top: 50px;
  transform: translate(2%,0);
  transition:transform 1s linear;
}
h5{
  margin-left: 20px;
}
</style>
