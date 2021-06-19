<template>
  <div id="process-benefits">
    <div class="description">
      <p class="section-title">Coffee Process</p>
      <p class="sub-text">
        Our coffee is processed using a method known as wet processing. This
        removes the coffee's fruity material &amp; leaves the coffee cherry moist.
        It is passed through a pulping machine, fermented and dried using
        forced air drying to achieve a moisture content of about 10.5%.
      </p>
    </div>
    <div class="benefits">
      <p class="section-sub-heading">Benefits of our process</p>
      <div class="card-container" id="benefits-list">
        <div class="card-item">
          <p class="benefit-num">01</p>
          <div class="item-content">
            <p class="item-title">A clean taste</p>
            <p>
              Our process guarantees a cleaner and more
              consistent flavor than other methods.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">02</p>
          <div class="item-content">
            <p class="item-title">Selective picking</p>
            <p>
              Only the ripest green cherries are picked for processing.
              This guarantees a higher acidity and gives a better taste.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">03</p>
          <div class="item-content">
            <p class="item-title">Quality control</p>
            <p>
              It guarantees a great deal of quality control through
              selective picking and allows for a much more consistent
              flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessBenefits',
};
</script>

<style scoped>
#process-benefits{
  position:relative;
  margin-top:70px;
}
@media screen and (max-width:764px) {
  #process-benefits{
    margin-top:50px;
  }
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
.sub-text{
  width:70%;
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
.benefits{
  margin-top: 50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:center;
}
#benefits-list{
  overflow-x: auto;
  overflow-y:hidden;
}
#benefits-list::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:700px){
  #benefits-list{
    justify-content: start;
  }
}
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  margin-left: 15px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.benefit-num{
  font-size: 70px;
  margin-top:-10px;
  padding-left: 15px;
  color:rgb(196, 196, 196);
  font-family: 'Times New Roman', Times, serif;
}
.item-content{
  padding-left: 15px;
  padding-right: 15px;
  margin-top:-20px;
}
.item-title{
  font-weight: bold;
  font-size: 18px;
}
</style>
