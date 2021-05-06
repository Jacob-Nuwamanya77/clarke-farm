<template>
  <div class="page-container">
    <div class="header">
      <div class="nav-container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/visit">Visit</router-link></li>
          <li><a href="">Buy Coffee</a></li>
          <li><a href="">Training Programs</a></li>
        </ul>
        <div class="contact">
          <span class="phone-icon"><fa icon="phone"/></span>
          <span id="telephone">&nbsp;&nbsp;&nbsp;+256 (0) 392 201 400</span>
        </div>
      </div>
      <span class="hamburger-menu">
        <fa icon="bars"/>
      </span>
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
  position:relative;
}
</style>

<style scoped>

.page-container{
  padding-top:20px;
  min-height:100vh;
  max-width: 1280px;
  margin:0 auto;
  background-color:var(--smoky-white);
}
.header{
  display:flex;
  flex-direction: row;
  position:relative;
}
.nav-container{
  width: 60vw;
  display: flex;
  flex-direction: row;
  font-size:15px;
  height:30px;
  margin-left: 15%;
  z-index:1;
}
@media screen and (max-width:1280px){
  .page-container{
    width:100vw;
  }
}
@media screen and (max-width:880px){
  .nav-container{
    width:70vw;
    margin-left: 5%;
  }
}
.hamburger-menu{
  display: none;
  align-items: center;
}
.hamburger-menu:hover{
  cursor: pointer;
  transform: scale(1.2);
}
@media screen and (max-width: 768px){
  .hamburger-menu{
    display: flex;
    position:absolute;
    right:5%;
  }
  .nav-container{
    display: none;
  }
}
.nav-container ul{
  display:flex;
  flex-direction: row;
  width:100%;
  margin:0;
  padding:0;
}
@media screen and (max-width:1280px){
  .header{
    font-size: 14px;
  }
}
.nav-container li{
  text-decoration: none;
  list-style-type: none;
  height: 30px;
  width:25%;
  margin-left: 1%;
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
.contact{
  display: flex;
  flex-direction: row;
  position:absolute;
  right:3%;
  top:15%;
}
.phone-icon{
  transform: rotate(90deg);
  color:var(--dark-green)
}
#telephone{
  color:var(--dark-green);
  display:flex;
  align-items:center;
}
</style>
