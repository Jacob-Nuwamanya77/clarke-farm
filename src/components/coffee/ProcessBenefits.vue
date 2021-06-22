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
      <div class="card-container">
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
  text-align: center;
}
.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

@media screen and (max-width:990px){
  .sub-text{
    width:80%;
  }
}
@media screen and (max-width:900px){
  .sub-text{
    width:90%;
  }
}
@media screen and (max-width:730px){
  .sub-text{
    width:95%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
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
  overflow-x: auto;
  overflow-y:hidden;
  width:95%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width:1240px){
  .card-container{
    width:70%;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
}
.card-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:900px){
  .card-container{
    justify-content: start;
  }
}
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
  }
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
