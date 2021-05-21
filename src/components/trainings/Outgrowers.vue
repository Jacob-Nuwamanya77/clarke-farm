<template>
  <div class="outgrowers-container">
    <div class="description">
      <p class="section-title">Outgrower Scheme</p>
      <div class="linedesign"></div>
    </div>
    <div id="scheme-details">
      <div id="scheme-left">
        <p class="section-sub-title">
          Improving the lives of farmers in our community through
          our outgrower scheme.
        </p>
        <p id="scheme-text">
          We are currently traversing the neighboring communities, registering
          farmers with land that can be utilized for coffee production, as well as
          any current coffee farmers that could benefit from our training programs.
        </p>
        <div id="scheme-stats">
          <div class="stat">
            <div class="stat-num">2000</div>
            <div class="stat-text">Target</div>
          </div>
          <div class="stat" id="current-registered">
            <div class="stat-num">150+</div>
            <div class="stat-text">Current</div>
          </div>
        </div>
        <div class="contact-btn-container">
          <a href="">Contact Us</a>
        </div>
      </div>
      <div id="scheme-right">
        <img src="@/assets/images/boss.jpg" alt="Boss">
        <p id="quote">
          <span class="quote-mark">&ldquo;</span>
          Taking small steps in contribution to the social-economic
          development of neighboring farming communities.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurCertificates',
};
</script>

<style scoped>
.outgrowers-container{
  position:relative;
  margin-top:80px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.description p{
  text-align: center;
  margin-top:15px;
}
.linedesign {
  width: 15%;
  height: 25px;
  position:absolute;
  top:0;
  left: 0;
  background-color: #068d68;
}
#scheme-details{
  display: flex;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@media screen and (max-width:1024px){
  #scheme-details{
    width:85%;
  }
}
@media screen and (max-width:700px){
  #scheme-details{
    display: block;
    width:90%;
  }
}
#scheme-left{
  width:55%;
}
#scheme-right{
  width:42%;
  position:relative;
  max-height: 400px;
}
@media screen and (max-width:700px){
  #scheme-left{
    width:100%;
    margin-left: auto;
    margin-right: auto;
  }
  #scheme-right{
    width:clamp(95%, 90%, 376px);
    margin-left: auto;
    margin-right: auto;
    margin-top:30px;
  }
}
#quote{
  width:250px;
  height:200px;
  background-color: var(--dark-green);
  position:absolute;
  left:-100px;
  bottom:-50px;
}
@media screen and (max-width:700px){
  #quote{
    left:clamp(-20px,50%,-100px);
  }
}
#scheme-right img{
  width:100%;
  height:100%;
  max-width:376px;
  max-height:400px;
  object-fit: cover;
}
.section-sub-title{
  font-size: 20px;
  font-weight: bold;
}
#scheme-text{
  line-height: 2;
  margin-top:25px;
}
#scheme-stats{
  display: flex;
  margin-top:20px;
}
.stat{
  min-width: 100px;
}

.stat-num{
  font-size: 30px;
  color:rgb(100, 100, 100);
  font-family: 'Times New Roman', Times, serif;
}
#current-registered{
  margin-left: 20px;
}
.contact-btn-container{
  height:35px;
  width:40%;
  margin-top:25px;
  max-width: 160px;
  border-radius: 3px;
  background-color: var(--dark-green);
}
@media screen and (max-width:700px){
  .contact-btn-container{
    width:160px;
  }
}
.contact-btn-container:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--mono-dark-green);
}
.contact-btn-container a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#quote{
  color:var(--smoky-white);
  padding-left: 35px;
  padding-top: 30px;
}
.quote-mark{
  font-size:50px;
  position:absolute;
  top:-5px;
  left:10px;
}
</style>
