<template>
  <div class="reviews-container">
    <div id="review-details">
      <div id="review-left">
        <p class="section-title">
          What people have to say about our coffee.
        </p>
        <p id="review-text">
          We are currently traversing the neighboring communities, registering
          farmers with land that can be utilized for coffee production, as well as
          any current coffee farmers that could benefit from our training programs.
        </p>
        <div id="cta-container">
          <div class="contact-btn-container">
            <a href="">Contact Us</a>
          </div>
          <div class="forward-back-navigation">
            <span class="nav-button disabled">
              <fa icon="angle-left" />
            </span>
            <span class="nav-button active">
              <fa icon="angle-right" />
            </span>
          </div>
        </div>
      </div>
      <div id="review-right">
        <div id="img-container">
          <img src="@/assets/images/reviews/coffee_man.png"
            alt="coffee reviews" aria-hidden="true">
        </div>
        <div class="icon-container" id="highlight-1">
          <span class="icon" id="smile-icon">
            <fa icon="smile" />
          </span>
          <span class="icon-text">
            Great Service
          </span>
        </div>
        <div class="icon-container" id="highlight-2">
          <span class="icon" id="heart-icon">
            <fa icon="heart" />
          </span>
          <span class="icon-text">
            Amazing Taste
          </span>
        </div>
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
.reviews-container{
  position:relative;
  margin-top:110px;
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
#review-details{
  display: flex;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@media screen and (max-width:1024px){
  #review-details{
    width:85%;
  }
}
@media screen and (max-width:700px){
  #review-details{
    display: block;
    width:90%;
  }
}
#review-left{
  width:55%;
  position:relative;
}
#review-right{
  width:42%;
  position:relative;
  height: 300px;
  min-height: 100%;
  background-color:var(--dark-green);
  display:flex;
  justify-content: center;
}
@media screen and (max-width:700px){
  #review-left{
    width:100%;
    margin-left: auto;
    margin-right: auto;
  }
  #review-right{
    width:clamp(95%, 90%, 376px);
    margin-left: auto;
    margin-right: auto;
  }
}
#img-container{
  z-index: 1;
  height:400px;
  min-height:100%;
  width:90%;
  position:absolute;
  bottom:0px;
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.icon-container{
  width:180px;
  height:40px;
  display:flex;
  align-items: center;
  background:white;
  position:absolute;
  z-index: 2;
}
.icon{
  min-width:40px;
  min-height: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size:20px;
  margin-left:5px;
}
.icon-text{
  padding-left:5px;
  font-weight: bold;
}
#smile-icon{
  color:#FCA705;
}
#heart-icon{
  color:#FC646C;
}
#highlight-1{
  top:50px;
  left:20px;
}
#highlight-2{
  bottom:50px;
  right:10px;
}
#review-text{
  line-height: 2;
  margin-top:15px;
}
#cta-container{
  position:absolute;
  bottom:0px;
  min-width:98%;
  display:flex;
  justify-content: space-between;
}
.contact-btn-container{
  height:35px;
  width:40%;
  max-width: 160px;
  border-radius: 3px;
  background-color: var(--dark-green);
}
.forward-back-navigation{
  min-width:16%;
  display:flex;
  justify-content: space-between;
}
.nav-button{
  width:32px;
  font-size: 20px;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
}
.nav-button:hover{
  cursor:pointer;
}
.active{
  background-color: var(--mono-dark-green);
}
.disabled{
  background-color: rgba(200,200,200,0.7);
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
</style>
