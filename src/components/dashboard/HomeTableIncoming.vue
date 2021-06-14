<template>
     <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th>Date</th>
          <th>Name</th>
          <th>Number of Guests</th>
          <th>PhoneNumber</th>
          <th>Email</th>
        </thead>
        <tbody>
        </tbody>
     </table>
</template>
<script>
export default {
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.navigation ul{
    display: flex;
  }
  .navigation{
       justify-content: center;
       margin-left:30%;
  }
.navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 0px;
  /* background-color: rgba(0, 0, 0, 0.3); */
  border: 1px solid #f4f4f4f4;
}
.navigation a:hover{
  background-color: #068d68;
  color:#ffffff;
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
  width:1000px;
  padding:5px;
  margin-left: 5%;
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
}
table,td,th{
     font-family: 'Roboto';
}

</style>
