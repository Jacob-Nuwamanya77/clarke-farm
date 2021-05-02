<template>
  <div class="container">
    <div class="nav-container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><a href="">Visit Us</a></li>
      <li><a href="">Buy Coffee</a></li>
      <li><a href="">Training Programs</a></li>
      <li>
        <span class="phone-icon"><fa icon="phone"/></span>
        <span id="telephone">+256 (0) 392 201 400</span>
      </li>
    </ul>
  </div>
  <router-view />
  </div>
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
@font-face {
  font-family: "Playfair";
  src: url("./assets/PlayfairDisplay-Regular.ttf");
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
  background-color:var(--smoky-white);
}
@media screen and (max-width:1280px) {
  #app{
    width:100%;
  }
}
.container{
  padding-top:20px;
  min-height:100vh;
}
.nav-container{
  width:65vw;
  height:30px;
  margin: 0px auto;
}
@media screen and (max-width:1280px){
  .nav-container{
    width:80vw;
  }
}
.nav-container ul{
  display:flex;
  justify-content: space-around;
  flex-direction: row;
  margin:0;
  padding:0;
}
.nav-container li{
  text-decoration: none;
  list-style-type: none;
  height: 30px;
  min-width:140px;
  display: flex;
  align-items: center;
  text-align: center;
}
/* The router link vue tag evaluates to an anchor so the styles apply */
.nav-container a{
  display:block;
  width:100%;
  text-decoration: none;
  color:inherit;
}
.phone-icon{
  margin-left: 10px;
  transform: rotate(90deg);
  margin-right: 10px;
  color:var(--dark-green)
}
#telephone{
  color:var(--dark-green)
}
</style>
