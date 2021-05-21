/* eslint-disable max-len */
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div>
    <div class="about">
      <div class="about-description">
        <p class="section-title">Who we are</p>
        <p class="sub-text">
          Clarke Farm is a 1500 acre farm located in Kitabale, Kyenjojo District
          in Uganda. Robusta coffee is the primary crop grown on the farm.
        </p>
        <div id="capacity">
          <div class="stat-container">
            <div class="stat">
              <div class="stat-num">1500</div>
              <div class="stat-text">Acres available</div>
            </div>
            <div class="stat">
              <div class="stat-num">08</div>
              <div class="stat-text">Projects total</div>
            </div>
            <div class="stat">
              <div class="stat-num">02</div>
              <div class="stat-text">Conservation projects</div>
            </div>
            <div class="stat">
              <div class="stat-num">50</div>
              <div class="stat-text">Employees</div>
            </div>
            <div class="stat">
              <div class="stat-num">300</div>
              <div class="stat-text">Seasonal workers</div>
            </div>
         </div>
        </div>
        <div id="our-projects">
          <p class="section-sub-heading">Projects</p>
          <div class="info-display">
            <div class="card">
              <div class="card-image-container">
                <img src="@/assets/images/mother-garden.jpg" alt="coffee" aria-hidden="true">
              </div>
              <div class="card-content">
                <p class="card-title">Coffee</p>
                <p class="card-text">
                  300+ acres of robusta coffee and currently harvesting
                  700,000 kilograms annually.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-image-container">
                <img src="@/assets/images/motocross1.jpg" alt="tourism" aria-hidden="true">
              </div>
              <div class="card-content">
                <p class="card-title">Tourism</p>
                <p class="card-text">
                  Enjoy jeep rides, bouldering, riverwalks among many other
                  activities. Check out our visit page for more details.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-image-container">
                <img src="@/assets/images/river-walks.jpg" alt="eucalyptus" aria-hidden="true">
              </div>
              <div class="card-content">
                <p class="card-title">Eucalyptus</p>
                <p class="card-text">
                  Over 200+ ha for conservation projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="linedesign"></div>
      </div>
    </div>
    <div class="about-farm">
      <div id="scheme-details">
        <div id="scheme-left">
          <p class="section-sub-title">
            Clarke farm is a serene coffee farm
          </p>
          <p id="scheme-text">
            We have recently invested in <span class="about-span">TOURISM </span>
            encouraged by the serene location of the farm, surrounded by natural
            forests with rivers , monkeys birds and so much more.
            There are other projects on the farm for conservation and educational
            purposes which include bamboo, oranges, eucalyptus, mangoes etc.
            We also have an outgrower program under our social development
            program.
          </p>
          <div class="contact-btn-container">
            <a href="">Visit Us</a>
          </div>
        </div>
        <div id="scheme-right">
          <img src="@/assets/images/farm.jpg" alt="farm">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection.vue',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 100%;
  position: relative;
  margin-top: 55px;
}
@media screen and (max-width: 576px){
  .about{
    margin-top:20px;
    font-size: 14px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin:15px auto;
  font-family: Playfair;
  text-align: center;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.linedesign {
  width: 30%;
  height: 25px;
  position:absolute;
  top:0;
  right: 0;
  background-color: #068d68;
}
.sub-text{
  width:60%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:990px){
  .sub-text{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
    padding-right: 5px;
  }
}
#capacity{
  margin-top: 10px;
}
.stat-container{
  display: flex;
  flex-wrap: wrap;
  width:70%;
  justify-content:space-between;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:480px){
  .stat-container{
    width:100%;
  }
}
.stat{
  margin-top: 20px;
  min-width: 100px;
  text-align: center;
}

@media screen and (max-width:480px){
  .stat{
    text-align:left;
  }
}
.stat-num{
  font-size: 45px;
  margin-top:-10px;
  color:rgb(100, 100, 100);
  font-family: 'Times New Roman', Times, serif;
}
#our-projects{
  margin-top:50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}

.info-display{
  display:flex;
  justify-content: center;
  margin-top:30px;
  overflow-x: auto;
  overflow-y: hidden;
}
.info-display::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:900px){
  .info-display{
    justify-content: start;
  }
}
.card{
  max-width:250px;
  min-width: 250px;
  max-height:320px;
  margin-right: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.card-image-container{
  height:60%;
}
.card-image-container img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.card-content{
  margin-top: 5px;
  padding-left: 10px;
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 14px;
}

.about-span {
  color: #068d68;
}
.about-farm{
  margin:90px auto;
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
</style>
