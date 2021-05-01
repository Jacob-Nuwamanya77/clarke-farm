<template>
  <div class="nav-container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><a href="">Visit Us</a></li>
      <li><a href="">Buy Coffee</a></li>
      <li><a href="">Training Programs</a></li>
    </ul>
  </div>
  <router-view />
</template>

<style>
:root{
  --dark-green: #045C44;
  --mono-dark-green: #068D68;
  --smoky-white: #f5f5f5;
  --black90: rgba(20,20,20,0.9);
  --black60: rgba(0,0,0,0.6);
}
* {
  box-sizing: border-box;
  font-family: "Roboto";
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/Roboto-Regular.ttf");
}
body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0 auto;
  position:relative;
  max-width: 1280px;
}
.nav-container{
  width:50%;
  height:30px;
  margin: 10px auto;
}
.nav-container ul{
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  margin:0;
  padding:0;
}
.nav-container li{
  text-decoration: none;
  list-style-type: none;
  height: 30px;
  width:140px;
  display: flex;
  align-items: center;
  text-align: center;
}
/* The router link vue tag evaluates to an anchor so the styles apply */
.nav-container a{
  display:block;
  width:100%;
  text-decoration: none;
  color:var(--black60);
}
</style>
