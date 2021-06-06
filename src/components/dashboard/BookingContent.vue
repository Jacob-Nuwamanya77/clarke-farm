<template>
     <div class="row">
       <div class="col-md-12 content">
      <h3>Bookings</h3>
      <table  class="filter">
      <p class="mt-5">Filter Results</p>
        <tr>
          <td>From:</td><td><input type="date" class="datepicker form-control" /></td>
          <td class="label">Category:</td><td><select class="category form-control">
          <option>Corporate</option>
          <option>Option one</option>
        </select></td>
        </tr>
         <tr>
          <td>To:</td><td><input type="date" class="datepicker form-control" /></td>
          <td class="label">Package:</td><td><select class="category form-control">
          <option>Option one</option>
          <option>Option one</option>
        </select></td>
        </tr>
      </table>
     </div>
    </div>
    <hr>
    <div class="row table-row">
      <div class="col-md-12">
         <table
          class="table table-striped table-hover table-responsive-sm"
          id="client-table"
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Client Name</th>
              <th>No of Guests</th>
              <th>Phone Contact</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
              <td><span style="color:#068d68">view</span>
              <fa icon="trash" style="margin-left:10px; color:red;"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
  name: 'BookingContent',
};
</script>
<style scoped>
.header{
  margin-top: -20px;;
}
.header h4{
  margin-left: 33px;
  margin-top:18px;
  width:250px;
  font-family:'Roboto';
}
.profile {
  color: white;
  margin-top: -37px;
  float: right;
  margin-right: 30px;
}

/* active sidebar link */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
.sidebar #home {
  margin-top: 30px;;
}

.content {
  margin-left: 150px;
  margin-top: 20px;

}
.filter{
  width:700px;
  margin-left: -80px;
  /* padding:5px; */
}
h3{
  margin-top: 30px;
}
p,h3{
  margin-left: -60px;
}
.filter tr{
  padding:5px;
}

.filter td{
/* border: 1px solid green; */
text-align: right;
}
.filter td input[type=".datepicker"]{
  width:800px;
 }
 .datepicker {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0px;
  width: 70%;
   border-radius: 5px;
   font-size:14px;
   color: rgba(0, 0, 0, 0.6);
}
#todate {
  margin-left: 23px;
}
.category {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  /* margin-left: 18px; */
  border-radius: 5px;
  font-display: 'Roboto';
  font-size:14px;
  color: rgba(0, 0, 0, 0.6);
}
.label td{
  width:20px;
  text-align: right;
}
.filter-span {
  margin-left: 40px;
}

hr{
margin-left: 100px;
}
router-link .logout{
  margin-top: 140px;
}

#client-table{
  padding:5px;
  margin-left:-80px;
  margin-top: 2%;
  margin-left: 100px;
}
#client-table th{
    padding:10px;
    vertical-align: middle;
     text-align: center;
}
 #client-table td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
    color: rgba(0, 0, 0, 0.8);
}
 #client-table table,td,th{
     font-family: 'Roboto';
}

</style>
