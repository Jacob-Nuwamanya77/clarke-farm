<template>
      <!-- side navigation -->
    <div
      class="col-md-3 sidenav"
    >
      <ul>
    <h3 class="logo" id="logo-text ">CLARKE FARM</h3>
    <router-link to="/admin/dashboard" id="home" class="active">
          <li><fa icon="home" /><span>Home</span></li>
    </router-link>
    <router-link to="/admin/booking" class="  pl-3">
        <a href="#">
          <li class="dropdown-btn" @click="dropdownToggle"
         ><fa icon="book-open" /><span>Bookings
          </span><fa icon="angle-right" class="caret"/>
          </li>
        </a>
    </router-link>
        <!-- <div class="dropdown-container d-none" id="dropdown-container"  >
            <router-link to="/admin/booking" class="  pl-3">
              <a href="#" class="item">Trainings</a>
            </router-link>
            <router-link to="/admin/farmtour" class="  pl-3">
              <a href="#" class="item">Tours</a>
            </router-link>
            <router-link to="/admin/coffeetour" class="  pl-3">
              <a href="#" class="item">Coffee Farm</a>
            </router-link>
        </div> -->
        <router-link to='/admin/reviews'>
        <a href="#">
          <li>
            <fa icon="star-and-crescent" /><span
              >User Reviews</span
            >
          </li>
        </a>
        </router-link>
        <router-link to="/admin/settings/activities">
        <a href="#">
          <li><fa icon="cogs" /><span>Settings</span></li>
        </a>
        </router-link>
      </ul>
    </div>
</template>
<style scoped>

.sidenav {
  background-color: #068d68;
  width: 70px;
  white-space: nowrap;
  transition: 0.5s;
  overflow-x: hidden;
  height: 100vh;
  position: fixed;
  /* background: linear-gradient(to  bottom, #068d68, #75cfb7); */

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
.item{
  margin-left: 25px;
   color:rgb(53, 53, 85)
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

.caret{
  margin-left: 40px;

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
<script>
let item = true;
export default {
  name: 'SideNavigation',
  methods: {
    dropdownToggle() {
      const drop = document.getElementById('dropdown-container');
      if (item) {
        drop.classList.remove('d-none');
        console.log('clicked');
        item = false;
      } else {
        drop.classList.add('d-none');
        console.log('clicked');
        item = true;
      }
    },
    hideItems() {
      document.getElementById('dropdown-container').classList.add('d-none');
    },
  },
};

</script>
