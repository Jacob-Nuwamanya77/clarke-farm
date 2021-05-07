<template>
  <div class="page-container">
    <div class="header">
      <div class="nav-container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/visit">Visit</router-link></li>
          <li><router-link to="/coffee">Buy Coffee</router-link></li>
          <li><router-link to="/training-programs">Training Programs</router-link></li>
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
  <footer>
    <div class="top-row">
      <div class="sub-container" id="contact">
        <h5>CONTACT</h5>
        <div class="content">
          <p>+256 (0) 392 201 400</p>
          <p>Plot 8244, Bukasa - Muyenga</p>
          <p>Kampala, Uganda</p>
        </div>
      </div>
      <div class="sub-container" id="sitemap">
        <h5>SITEMAP</h5>
        <div class="content">
          <p><a href="">Home</a></p>
          <p><a href="">Visit Us</a></p>
          <p><a href="">Buy Coffee</a></p>
          <p><a href="">Training Programs</a></p>
        </div>
      </div>
      <div class="sub-container" id="location">
        <h5>LOCATION</h5>
        <div class="content">
          <p>Katambale, Kyenjojo</p>
          <p>Uganda</p>
        </div>
        <p>Book A Trip</p>
      </div>
    </div>
    <div class="container-icons">
      <div class="icons">
        <span id="facebook"></span>
        <span id="instagram"></span>
        <span id="twitter"></span>
      </div>
    </div>
  </footer>
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
@media screen and (max-width:1280px){
  .page-container{
    width:100vw;
  }
}
.header{
  display:flex;
  flex-direction: row;
  position:relative;
}
.nav-container{
  width: 58vw;
  display: flex;
  flex-direction: row;
  font-size:15px;
  height:30px;
  margin-left:10%;
  z-index:1;
}
@media screen and (max-width:880px){
  .nav-container{
    width:64vw;
    margin-left: 5%;
  }
}
@media screen and (min-width:1280px){
  .nav-container{
    width:768px;
  }
}
.hamburger-menu{
  display: none;
  align-items: center;
  z-index:1;
  font-size: 110%;
}
.hamburger-menu:hover{
  cursor: pointer;
  transform: scale(1.2);
}
@media screen and (max-width: 768px){
  .hamburger-menu{
    display: flex;
    position:absolute;
    right:10%;
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
  right:8%;
  top:15%;
}
@media screen and (min-width:1280px){
  .contact{
    right:100px;
  }
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
footer{
  margin-top: 70px;
  min-height:250px;
  background-color: var(--dark-green);
  color:white;
}
.top-row{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  padding-top: 10px;
  width:90%;
  margin-left: auto;
  margin-right: auto;
}
.content{
  margin-top: 20px;
}
.sub-container{
  width:25%;
  margin-top: 10px;
  /* border:1px solid white; */
}
#sitemap{
  margin-left: 15%;
}
#location{
  margin-left: 10%;
}
.container-icons{
  border-top:2px solid white;
}
</style>
