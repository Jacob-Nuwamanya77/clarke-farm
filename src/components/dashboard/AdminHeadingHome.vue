<template>
  <div class="top-row">
    <div class="col-8">
      <h3>{{ heading }}</h3>
      <h6>Welcome {{user}},</h6>
      <hr>
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
   <!-- <h5>Notifications</h5> -->
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
.top-row{
  margin-top:130px;
  margin-left: 5px;
}

h3{
  color:#045C44;
}

li{
   list-style-type: none;
   text-decoration: none;
   float: right;
   padding: 20px;

}

span{
   color:#045C44;
}
hr{
  width: 1000px;
}

/* .heading-icons{
  margin-right:500%;
} */
</style>
