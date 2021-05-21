<template>
<!-- eslint-disable max-len -->
    <div class="container">
      <div class="row">
        <div class="navigation">
       <ul>
        <li><a href="" class="active-nav">Activities</a></li>
        <li><a href="">Accomodation</a></li>
        <li><a href="">Coffee Process</a></li>
        <li><a href="">Training Program</a></li>
      </ul>
    </div>
      </div>
          <div class="action">
          <ul>
            <li><a href="#" class="btn-sm" role="button"><span> <fa icon="plus"/></span></a></li>
            <li><a href="#" class="btn-sm" role="button"><span> <fa icon="edit"/></span></a></li>
            <li><a href="#" class="btn-sm del" role="button"><span> <fa icon="trash"/></span></a></li>
          </ul>
      </div>
      <hr>
      <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th>Activity Name</th>
          <th>Image</th>
          <th>Activity Description</th>
        </thead>
        <tbody>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity1.name}}</td>
                <td> <img src="@/assets/images/motocross1.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity1.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity2.name}}</td>
                <td> <img src="@/assets/images/bouldering3.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity2.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity3.name}}</td>
                <td> <img src="@/assets/images/coffeetasting1.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity3.description}}</td>
            </tr>
        </tbody>
     </table>
    </div>
    <br>
</template>
<script>
export default {
  data() {
    return {

      activity1: {
        name: 'Biking',
        image: '@/assets/images/motocross1.jpg',
        description: 'Rent a bicycle and challenge yourself on smooth and rough terrain.',
      },
      activity2: {
        name: 'Bouldering',
        image: '@/assets/images/bouldering3.jpg',
        description: 'Walk to the top of our boulders and enjoy beautiful sunsets..',
      },
      activity3: {
        name: 'Coffee Tasting',
        image: '@/assets/images/coffeetasting1.jpg',
        description: 'Fresh roasted robusta coffee. It\'s our pride and joy..',
      },
    };
  },
};
</script>
<style scoped>
 ul{
    display: flex;
  }
  .navigation{
       justify-content: center;
       margin-left:20%;
  }
 .navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 0px;
  border: 1px solid #f4f4f4;
}
.action li{
   min-width:40px;
  height:30px;
}
.action ul{
  list-style-type: none;
  position: absolute;
  color: #068d68;
  border: none;

}

.navigation a:hover{
  background-color: #068d68;
   color:white;
}
.navigation a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width:100%;
  height:100%;
  color: rgb(0, 0, 0) ;
}
a.active-nav{
  background-color: #068d68;;
  color:white;
}
 table{
  width:1150px;
  padding:5px;
  margin-top:3%;
}
th{
    padding:10px;
    vertical-align: middle;
     text-align: center;
}
td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
    padding:10px;
    word-wrap: break-word;
}
table,td,th{
     font-family: 'Roboto';
}
img{
  width:150px;
   height:100px;
}
.action{
  margin-bottom: 3%;
}
span{
  color:#045C44;
   font-size:17px;
}
.del span{
  color:red;
}
hr{
  margin-right: 10%;
  width:1150px;
}

</style>
