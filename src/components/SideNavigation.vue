<template>
  <div class="nav-container">
    <div class="logo">
      <h4>Clarke Farm</h4>
    </div>
    <ul>
      <li>
        <router-link to="/customer"><span> <fa icon="home"/></span> &ensp;Home</router-link>
      </li>
       <li>
        <router-link to=""> <span><fa icon="book"/></span>  &ensp;Booking</router-link>
      </li>
       <li>
        <router-link to="">User Review</router-link>
      </li>
       <li>
        <router-link to=""><fa icon="cog"/> &ensp;Setting</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.nav-container ul {
  padding-left: 0;
  margin-top: 0vh;
  height: 50vh;

}
.nav-container li {
  list-style-type: none;
  margin-top: 5px;
  text-align: left;

}
a {
  color: white;
  padding-left: 30px;
  text-decoration: none;
  height: 14px;
  display: flex;
  align-items: center;
  padding:20px;
}
a:hover {
  transform: scale(0.95);
}
.router-link-active {
background-color:#ffffff;
  /* background-color: rgb(220, 220, 220); */
  color: #2c3e50;
  /* border-left: 5px solid #068d68; */
}
.router-link-inactive {
  background-color:#ffffff;
  /* color: #2c3e50; */
  /* border-left: 5px solid #068d68; */
}
.logo{
  width: 100%;
  height: 6%;
  color: #2c3e50;
  font-size: 25px;
  font-family: 'Playfair Display';
}
router-link{
    background-color:#ffffff;
    color: #2c3e50;

}
fa{
  padding-left:5px;
}
</style>
