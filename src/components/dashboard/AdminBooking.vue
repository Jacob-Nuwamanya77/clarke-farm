<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="row">
    <div class="header bg-primary">
      <h4 class="text-white">
        CLARKE FARM</h4>
      <!-- <span class="hamburger-menu profile">
        <fa icon="bars"/>
      </span> -->
      <span class="profile"> Profile</span><fa :icon="['fab', 'PowerOff']"/>
    </div>
    <div class="sidebar col-md-3">
      <a href="#" id="home"><span><img src="../../assets/icons/home.svg" />Home</span></a
      >
      <a href="#" class="active">
        <span><img src="../../assets/icons/reservation.svg" /> </span
        >Booking</a
      >
      <a href="#"
        ><span><img src="../../assets/icons/rating.svg" /></span>User Reviews</a
      >
      <a href="#"
        ><span><img src="../../assets/icons/settings.svg" /> </span>Settings</a
      >
<div class="card h-25  bg-primary" style="margin-top:110px; margin-left:25px; margin-right:25px;">
</div>
    </div>
    <div class="col-md-9 content card">
      <h4 style="color: #068d68; margin-top: 10px">Bookings</h4>
      <p class="mt-3">Filter Results</p>
      <div class="filter-row1 mt-1">
        From: <input type="date" class="datepicker" /><span class="filter-span">
          Category:</span
        ><select class="category">
          <option>Corporate</option>
          <option>Option one</option>
        </select>
      </div>
      <div class="filter-row2">
        To: <input type="date" class="datepicker" id="todate" />
        <span class="filter-span"> Package:</span
        ><select class="category">
          <option>Option one</option>
          <option>Option one</option>
        </select>
      </div>
      <!-- client table -->
      <div class="table-responsive mt-3">
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
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
            <tr>
              <td>1/01/21</td>
              <td>Ndagire Mariat</td>
              <td>5</td>
              <td>+256 705976941</td>
              <td>mariatndagire28@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination-container"></div>
      </div>
    </div>
  </div>
</template>
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
/* sidebar */
.sidebar {
  margin: 0;
  margin-top: 0px;
  margin-left: 20px;
  padding: 0;
  width: 200px;
  background: white;
  height: 558px;
  overflow: auto;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.sidebar a {
  display: block;
  color: rgba(0, 0, 0, 0.603);
  padding: 8px;
  margin-top: 10px;
  width: 180px;
  margin-left: 10px;
  padding-left: 20px;
  border-radius: 8px;
  text-decoration: none;
}
/* active sidebar link */
.sidebar a.active {
  background-color: #726c6c25;
  color: #068d68;
}
.sidebar a:hover:not(.active) {
  background-color: #068d68;
  color: whitesmoke;
}
.sidebar img {
  width: 20px;
  height: 30px;
  padding-right: 5px;
  padding-bottom: 5px;
}
.sidebar img:hover {
  color: whitesmoke;
}
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
.card{
  border-radius: 8px;
  margin-top: 20px;
}
.content {
  margin-left: 30px;
}

.datepicker {
  border: 1px solid#068d68;
  margin: 5px;
  width: 25%;
}
#todate {
  margin-left: 23px;
}
.category {
  border: 1px solid#068d68;
  width: 25%;
  margin-left: 18px;
}
.filter-span {
  margin-left: 40px;
}
td {
  font-family: sans-serif;
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'AdminBooking',
};
</script>
