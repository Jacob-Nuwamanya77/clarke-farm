<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="row">
     <div class="header">
      <h4>
        CLARKE FARM</h4>
      <!-- <span class="hamburger-menu profile">
        <fa icon="bars"/>
      </span> -->
      <span class="profile"> Profile</span><fa :icon="['fab', 'PowerOff']"/>
    </div>
    <div class="sidebar col-md-3">
      <a href="#"><span>
      <img src="../../assets/icons/home.svg" />Home</span>
     </a
      >
      <a href="#"
        ><span><img src="../../assets/icons/reservation.svg" /> </span>Booking</a
      >
      <a href="#" class="active"
        ><span><img src="../../assets/icons/rating.svg" /></span>User Reviews</a
      >
      <a href="#"
        ><span><img src="../../assets/icons/settings.svg" /> </span>Settings</a
      >
    </div>
    <div class="col-md-9 content">
      <a class="btn btn-block btn-danger delete-btn">DELETE ALL</a>
     <div class="review">
       <fa icon="square"/>
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
  color: #068d68;
  font-family:'Roboto';
}
.profile {
  color: #068d68;
  margin-top: -37px;
  float: right;
  margin-right: 100px;
}
/* sidebar */
.sidebar {
  margin-top: 0px;
  padding: 0;
  margin-left: 20px;
  width: 200px;
  background: whitesmoke;
  height: 490px;
  overflow: auto;
  border-bottom-left-radius: 35px;
}

/* sidebar links */
.sidebar a {
  display: block;
  color: rgba(0, 0, 0, 0.603);
  padding: 8px;
  padding-left: 20px;
  /* text-align: center; */
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
  background: #726c6c25;
  margin-top: 15px;
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
