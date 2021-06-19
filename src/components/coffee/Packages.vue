<template>
  <div id="our-coffee-packages">
    <p class="section-title">Coffee packages</p>
    <div class="card-container" id="benefits-list">
      <div class="card-item">
        <div class="rating">
          <div class="icon">
            <fa icon="running" />
          </div>
          <div class="category-title">Activities</div>
        </div>
        <div class="item-content">
          <div class="item-rating">
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star-half-alt"/>
          </div>
          <ul>
            <li>Bouldering</li>
            <li>Jeep rides</li>
            <li>River walks</li>
            <li>Bird watching</li>
            <li>Coffee tasting</li>
          </ul>
          <div class="link-container">
            <a href="#offers" class="learn-more">Learn more &rarr;</a>
          </div>
        </div>
      </div>
      <div class="card-item">
        <div class="rating">
          <div class="icon">
            <fa icon="home" />
          </div>
          <div class="category-title">Accomodation</div>
        </div>
        <div class="item-content">
          <div class="item-rating">
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
          </div>
          <ul>
            <li>Hilltop cottages</li>
            <li>Camping tents</li>
            <li>Cliff container house</li>
          </ul>
          <div class="link-container">
            <a href="#offers" class="learn-more">Learn more &rarr;</a>
          </div>
        </div>
      </div>
      <div class="card-item">
        <div class="rating">
          <div class="icon">
            <fa icon="hamburger" />
          </div>
          <div class="category-title">Food</div>
        </div>
        <div class="item-content">
          <div class="item-rating">
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
            <fa icon="star"/>
          </div>
          <ul>
            <li>Luwombo</li>
            <li>Steammed matooke</li>
            <li>Katogo</li>
            <li>Boo</li>
          </ul>
          <div class="link-container">
            <a href="#offers" class="learn-more">Learn more &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Packaging',
};
</script>

<style scoped>
#our-coffee-packages{
  margin-top:80px;
}
@media screen and (max-width:764px){
  #our-coffee-packages{
    margin-top:60px;
  }
}

.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
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
  position:relative;
}
.rating{
  display: flex;
  align-items: center;
  padding-left: 15px;
  height:50px;
  margin-top: 10px;
}
.icon{
  background-color:var(--dark-green);
  height:40px;
  width:40px;
  border-radius: 10px;
  color:white;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-title{
  color:rgba(0,0,0,0.7);
  font-weight: bold;
  margin-left: 20px;
}
.item-content{
  padding-left: 15px;
  padding-right: 15px;
  padding-top:10px;
  height:220px;
}
.item-rating{
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
  color:orange;
}
.link-container{
  position:absolute;
  bottom:15px;
}
.learn-more{
  text-decoration: none;
}
.learn-more:hover{
  color:var(--dark-green);
  font-weight: bold;
}
</style>
