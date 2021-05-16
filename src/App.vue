<template>
  <div class="page-container">
    <div class="header">
      <div class="nav-container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/visit">Visit</router-link></li>
          <li><router-link to="/coffee">Buy Coffee</router-link></li>
          <li><router-link to="/training-programs">Trainings</router-link></li>
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
      <div class="sub-container">
        <h5>CONTACT</h5>
        <div class="content">
          <p>+256 (0) 392 201 400</p>
          <p>Plot 8244, Bukasa - Muyenga</p>
          <p>Kampala, Uganda</p>
        </div>
      </div>
      <div class="sub-container">
        <h5>SITEMAP</h5>
        <div class="content">
          <p><a href="/">Home</a></p>
          <p><a href="/visit">Visit Us</a></p>
          <p><a href="/buy-coffee">Buy Coffee</a></p>
          <p><a href="/training-programs">Training Programs</a></p>
        </div>
      </div>
      <div class="sub-container">
        <h5>LOCATION</h5>
        <div class="content">
          <p>Katambale, Kyenjojo</p>
          <p>Uganda</p>
        </div>
        <div class="icons">
          <p><small>Connect with us</small></p>
          <span id="facebook">
            <fa :icon="['fab','facebook-f']" title="visit our facebook page"/>
          </span>
          <span id="twitter">
            <fa :icon="['fab','twitter']" title="visit our twitter page"/>
          </span>
          <span id="instagram">
            <fa :icon="['fab','instagram']" title="visit our instagram page"/>
          </span>
        </div>
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
  --blue-ink:#2c3e50;
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
  color: var(--blue-ink);
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

/* The router link vue tag evaluates to an anchor so the styles apply */
.nav-container a{
  display:flex;
  width:100%;
  height:100%;
  text-decoration: none;
  color:inherit;
  align-items: center;
  justify-content: center;
}
.nav-container a:hover{
  background-color: var(--dark-green);
  color:white;
}

/* Active link styles. */
.router-link-active{
  border-bottom: 2px solid var(--dark-green);
}

.contact{
  display: flex;
  height:100%;
  flex-direction: row;
  position:absolute;
  right:65px;
}
@media screen and (max-width:880px){
  .contact{
    display:none;
  }
}
footer a{
  color:white;
}

.icons span{
  margin-right: 15px;
}
.icons span:hover{
  cursor:pointer;
}
</style>
