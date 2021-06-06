<template>
  <div class="top-row">
    <div class="col-8">
      <h3>{{ heading }}</h3>
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
  </div>
</template>
<script>
export default {
  name: 'AdminHeadingSettings',
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
  margin-left:19%;
}

h5{
  color:#045C44;
}
span{
   color:#045C44;
}
hr{
  margin-left: 12%;
  width:980px;
}

.div{
  border:1px solid green;
}

/* .heading-icons{
  margin-right:500%;
} */
</style>
