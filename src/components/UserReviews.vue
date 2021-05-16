<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="row">
    <h4 style="margin-left: 13px" class="text-muted">CLARKE FARM</h4>
    <div class="sidebar col-md-3">
      <a href="#"
        ><span><img src="../assets/icons/home.svg" />Home</span></a
      >
      <a href="#"
        ><span><img src="../assets/icons/reservation.svg" /> </span>Booking</a
      >
      <a href="#" class="active"
        ><span><img src="../assets/icons/rating.svg" /></span>User Reviews</a
      >
      <a href="#"
        ><span><img src="../assets/icons/settings.svg" /> </span>Settings</a
      >
    </div>
    <div class="col-md-9">
      <h4 style="color: #068d68; margin-top: -37px">User Reviews</h4>
      <span class="profile">
        Profile</span
      ><fa :icon="['fab', 'PowerOff']" />
      <button class="btn btn-block bg-danger"/>

    </div>
  </div>
</template>
<style scoped>
/* sidebar */
.sidebar {
  margin: 0;
  margin-top: 25px;
  padding: 0;
  width: 200px;
  background: whitesmoke;
  height: 100%;
  overflow: auto;
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
  width: 25px;
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
.profile{
color: #068d68;
margin-top: -37px;
float: right;
}

</style>

<script>
export default {
  name: 'UserReviews',
};
</script>
