<template>
    <div class="container">
      <div class="row">
        <div class="navigation">
       <ul>
        <li><a href="" class="active-nav">Incoming guests</a></li>
        <li><a href="">Reviews</a></li>
        <li><a href="">Coffee Request</a></li>
      </ul>
    </div>
      </div>
    </div>
    <br>
     <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th>Date</th>
          <th>Name</th>
          <th>Number of Guests</th>
          <th>PhoneNumber</th>
          <th>Email</th>
        </thead>
        <tbody>
            <tr class="table-hover">
                <td>{{guest1.date}}</td>
                <td>{{guest1.name}}</td>
                <td>{{guest1.NumberOfGuests}}</td>
                <td>{{guest1.PhoneNumber}}</td>
                <td>{{guest1.email}}</td>
            </tr>
            <tr class="table-hover">
                <td>{{guest2.date}}</td>
                <td>{{guest2.name}}</td>
                <td>{{guest2.NumberOfGuests}}</td>
                <td>{{guest2.PhoneNumber}}</td>
                <td>{{guest2.email}}</td>
            </tr>
            <tr class="table-hover">
                <td>{{guest3.date}}</td>
                <td>{{guest3.name}}</td>
                <td>{{guest3.NumberOfGuests}}</td>
                <td>{{guest3.PhoneNumber}}</td>
                <td>{{guest3.email}}</td>
            </tr>
            <tr class="table-hover">
                <td>{{guest4.date}}</td>
                <td>{{guest4.name}}</td>
                <td>{{guest4.NumberOfGuests}}</td>
                <td>{{guest4.PhoneNumber}}</td>
                <td>{{guest4.email}}</td>
            </tr>
            <tr class="table-hover">
                <td>{{guest5.date}}</td>
                <td>{{guest5.name}}</td>
                <td>{{guest5.NumberOfGuests}}</td>
                <td>{{guest5.PhoneNumber}}</td>
                <td>{{guest5.email}}</td>
            </tr>
           <tr class="table-hover">
                <td>{{guest6.date}}</td>
                <td>{{guest6.name}}</td>
                <td>{{guest6.NumberOfGuests}}</td>
                <td>{{guest6.PhoneNumber}}</td>
                <td>{{guest6.email}}</td>
            </tr>
           <tr class="table-hover">
                <td>{{guest3.date}}</td>
                <td>{{guest3.name}}</td>
                <td>{{guest3.NumberOfGuests}}</td>
                <td>{{guest3.PhoneNumber}}</td>
                <td>{{guest3.email}}</td>
            </tr>
           <tr class="table-hover">
                <td>{{guest1.date}}</td>
                <td>{{guest1.name}}</td>
                <td>{{guest1.NumberOfGuests}}</td>
                <td>{{guest1.PhoneNumber}}</td>
                <td>{{guest1.email}}</td>
            </tr>
        </tbody>
     </table>
</template>
<script>
export default {
  data() {
    return {

      guest1: {
        date: '25/12/2020',
        name: 'Jane Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'cjane@gmail.com',
      },
      guest2: {
        date: '25/12/2020',
        name: 'Didi Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'djane@gmail.com',
      },
      guest3: {
        date: '25/12/2020',
        name: 'Jane Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'cjane@gmail.com',
      },
      guest4: {
        date: '25/12/2020',
        name: 'Jane Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'cjane@gmail.com',
      },
      guest5: {
        date: '25/12/2020',
        name: 'Jane Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'cjane@gmail.com',
      },
      guest6: {
        date: '25/12/2020',
        name: 'Jane Cooper',
        NumberOfGuests: 4,
        PhoneNumber: '+247793078450',
        email: 'cjane@gmail.com',
      },
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
       margin-left:20%;
  }
.navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 0px;
  /* background-color: rgba(0, 0, 0, 0.3); */
  border: 1px solid #ffffff;
}
.navigation a:hover{
  background-color: #068d68;;
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
