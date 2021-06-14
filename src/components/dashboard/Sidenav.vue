<template>
    <div class="row">
         <div class="header bg-primary">
      <!-- <span class="hamburger-menu profile">
        <fa icon="bars"/>
      </span> -->
      <span class="profile"> Profile</span><fa :icon="['fab', 'PowerOff']"/>
    </div>
    <div class="sidebar col-md-3">
      <h4  style="margin-left:10px; color:#068d68;">
        CLARKE FARM</h4>
      <router-link to="/admin/dashboard" id="home" class="active"><span><fa icon="home"/>
      Home</span></router-link
      >
      <router-link to="/admin/booking" class="  pl-3">
        <span><fa icon="book" style="margin-right:10px;"/></span>Booking</router-link
      >
      <router-link to="/admin/reviews"
        ><span><fa icon="comments"/></span>User Reviews</router-link
      >
      <router-link to="/admin/settings"><span><fa icon="cog"/> </span>Settings</router-link
      >
        <router-link to="/admin" style="margin-top:220px; color:red"><span>
          <img src="../../assets/icons/logout.svg" /></span> &ensp;Logout</router-link>
    </div>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
};
</script>
<style scoped>
.header{
  margin-top:0px;
}
.header h4{
  margin-left: 33px;
  margin-top:18px;
  width:250px;
  font-family:'Roboto';
}
.profile {
  color: white;
  margin-top: -37px;
  float: right;
  margin-right: 30px;
}
/* sidebar */
.sidebar {
  margin: 0;
  margin-top: -20px;
  margin-left: 20px;
  padding: 0;
  width: 200px;
  background: white;
  height: 558px;
  overflow: auto;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.sidebar a {
  display: block;
  color: rgba(0, 0, 0, 0.603);
  padding: 8px;
  margin-top: 10px;
  width: 180px;
  margin-left: 10px;
  padding-left: 20px;
  border-radius: 8px;
  text-decoration: none;
}
/* active sidebar link */
.sidebar a.active {
  background-color: #726c6c25;
  color: #068d68;
}
.sidebar a:hover:not(.active) {
  background-color: #068d68;
  color:white;
}
.sidebar img {
  width: 20px;
  height: 30px;
  padding-right: 5px;
  padding-bottom: 5px;
}
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
.sidebar #home {
  margin-top: 30px;;
}
.card{
  border-radius: 8px;
  margin-top: 20px;
}
span{
  margin-right: 10px;
}
</style>
