<template>
<!-- eslint-disable max-len -->
    <div>
        <h5>Settings</h5>
        <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
        </nav>
      <div class="row mt-3 ">
        <!-- <hr> -->
        <div class="navigation">
       <ul>
        <li> <router-link to="/admin/settings/activities">Activities</router-link></li>
        <li><router-link to="/admin/settings/accommodation">Accomodation</router-link></li>
        <li><router-link to="/admin/settings/coffee">Coffee Process</router-link></li>
        <li><router-link to="/admin/settings/training-program">Training Program</router-link></li>
      </ul>
    </div>
      </div>
    </div>
</template>
<script>

export default {

};
</script>
<style scoped>
 ul{
    display: flex;
  }
  .navigation{
       /* justify-content: center; */
       /* margin-left:40%; */
  }
 .navigation li{
  list-style-type: none;
  /* min-width:fit-content; */
  width: 150px;
  height:30px;
  margin-right: 35px;
  border: 1px solid #f4f4f4;
}
a{
    text-decoration: none;
    color: #068d68;
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
 a.router-link-active{
  background-color: #068d68;;
  color:white;
}

.router-link-active{
   background-color: #068d68;
  color:white;
  cursor: pointer;
}
.modal-footer.btn{
  background-color: #068d68;
}

</style>
