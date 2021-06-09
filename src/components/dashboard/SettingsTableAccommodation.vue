<template>
<!-- eslint-disable max-len -->
    <div class="table-settings">
         <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th>Accommodation Type</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
        </thead>
        <tbody>
        </tbody>
     </table>
    </div>
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
.table-settings{
  width:1000px;
  justify-content: center;
  padding:10px;
   margin-left:10%;
   align-items: center;
}
table{
  width:1000;
  padding:5px;
  margin-top:0%;
  margin-left:00%;
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
</style>
