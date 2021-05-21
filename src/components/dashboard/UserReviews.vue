<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="row">
  <div class="header bg-primary">
      <h4 class="text-white">
        CLARKE FARM</h4>
      <!-- <span class="hamburger-menu profile">
        <fa icon="bars"/>
      </span> -->
      <span class="profile"> Profile</span><fa :icon="['fab', 'PowerOff']"/>
    </div>
    <div class="sidebar col-md-3">
      <router-link to="/admin/dashboard" id="home"><span><fa icon="home"
      style="margin-right:10px; color:#068d68;"/>Home</span></router-link
      >
      <router-link to="/admin/booking">
        <span><fa icon="book" style="margin-right:10px;"/></span>Booking</router-link
      >
      <router-link to="/admin/reviews" class="active pl-3"
        ><span><img src="../../assets/icons/rating.svg" /></span>User Reviews</router-link
      >
      <router-link to="/admin/settings"><span><fa icon="cog"
       style="margin-right:10px; color:#068d68;"/> </span>Settings</router-link
      >
        <router-link to="/admin" style="margin-top:220px; color:red"><span>
          <img src="../../assets/icons/logout.svg" /></span> &ensp;Logout</router-link>
    </div>
    <div class="col-md-9 content">
      <a class="btn btn-block btn-danger delete-btn">DELETE ALL</a>
     <div class="review">
       <!-- <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> -->
       <h6>MERCY WAMANGA</h6>
       <p class="text-muted">January 2021</p>
       <fa icon="star"/><br>
       <strong>Bouldering and hilltop views were awesome</strong>
       <p>The highlight of my stay at the farm was the jeep rides
The highlight of my stay at the farm was the jeep rides
The highlight of my stay at the farm was the jeep rides</p>
     </div>

    </div>
  </div>
</template>
<style scoped>
.header{
  margin-top: -20px;;
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
  margin-top: 0px;
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
  color: whitesmoke;
}
.sidebar img {
  width: 20px;
  height: 30px;
  padding-right: 5px;
  padding-bottom: 5px;
}
.sidebar img:hover {
  color: whitesmoke;
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
.review-text{
  color: #068d68;
  margin-top: -37px;
}
.content{
  /* background: #726c6c25; */
  margin-top: 15px;
  margin-left: 30px;
}
.delete-btn{
  float:right;
  margin: 10px;
}
.review{
  margin-top: 60px;
}

</style>

<script>
export default {
  name: 'UserReviews',
};
</script>
