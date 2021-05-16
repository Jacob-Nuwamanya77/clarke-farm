<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="row">
    <h4 style="margin-left: 13px" class="text-muted">CLARKE FARM</h4>
    <div class="sidebar col-md-3 ">
      <a href="#"
        ><span><img src="../assets/icons/home.svg" />Home</span></a
      >
      <a href="#" class="active"
        ><span><img src="../assets/icons/reservation.svg" /> </span>Booking</a
      >
      <a href="#"
        ><span><img src="../assets/icons/rating.svg" /></span>User Reviews</a
      >
      <a href="#"
        ><span><img src="../assets/icons/settings.svg" /> </span>Settings</a
      >
    </div>
    <div class="col-md-9">
      <h4 style="color: #068d68; margin-top: -37px">Booking</h4>
      <span style="color: #068d68; margin-top: -37px; float: right">
        Profile</span
      ><fa :icon="['fab', 'PowerOff']" />
      <p class="mt-5">Filter Results</p>
      <div class="filter-row1 mt-1">
        From: <input type="date" class="datepicker" /><span class="filter-span">
Category:</span><select class="category">
          <option>Corporate</option>
          <option>Option one</option>
        </select>
      </div>
      <div class="filter-row2">
        To: <input type="date" class="datepicker" id="todate" /> <span class="filter-span">
Package:</span><select
          class="category"
        >
          <option>Option one</option>
          <option>Option one</option>
        </select>
      </div>
      <!-- client table -->
      <div class="table-responsive mt-3">
        <table class="table table-striped table-hover table-responsive-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client Name</th>
              <th>No of Guests</th>
              <th>Phone Contact</th>
              <th>Email Address</th>
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
      </div>
    </div>
  </div>
</template>
<style scoped>
/* sidebar */
.sidebar {
  margin: 0;
  margin-top: 25px;
  padding: 0;
  width: 200px;
  background: whitesmoke;
  height: 100%;
  overflow: auto;
}
/* sidebar links */
.sidebar a {
  display: block;
  color: rgba(0, 0, 0, 0.603);
  padding: 8px;
  padding-left: 20px;
  /* text-align: center; */
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
  width: 25px;
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
.datepicker {
  border-radius: 5px 5px 5px 5px;
  border-style: 0px solid #6d6b6b;
  margin: 5px;
  width: 25%;
}
#todate {
  margin-left: 23px;
}
.category {
  border-radius: 5px 5px 5px 5px;
  border-style: 0px solid #6d6b6b;
  /* margin: 5px; */
  width: 25%;
  margin-left: 20px;
}
.filter-span{
margin-left: 40px;
}
td {
  font-family: sans-serif;
}
</style>

<script>
export default {
  name: 'AdminBooking',
};
</script>
