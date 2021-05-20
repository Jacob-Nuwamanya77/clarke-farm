<template>
  <div class="top-row">
    <div class="col-8">
      <h3>{{ heading }}</h3>
      <h6>Welcome {{user}},</h6>
    </div>
   <div class="col-4">
     <ul>
      <li>
        <span> <fa icon="bell"/></span> &ensp;&ensp;
      </li>
       <li>
        <span><fa icon="user"/></span>
      </li>
    </ul>
   </div>
   <br>
   <h5>Notifications</h5>
   <hr>
  </div>
</template>
<script>
export default {
  name: 'AdminHeading',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: 'Admin',
    };
  },
};
</script>

<style scoped>
div {
  text-align: left;
}
h3{
  color:#045C44;
}

ul{
  list-style-type: none;
   text-decoration: none;
   display: flex;
  align-items: right;
  position: absolute;
  top: 5px;
  right: 100px;
  color: #068d68;
  border: none;
  font-size: 25px;
}
li{
   list-style-type: none;
   text-decoration: none;
   display: flex;

}
h5{
  color:#045C44;
}
span{
   color:#045C44;
}
hr{
  margin-right: 10%;
  width:1150px;
}

/* .heading-icons{
  margin-right:500%;
} */
</style>
