<template>
  <!-- eslint-disable max-len -->
  <div class="container">
     <div class="action">
          <a
          href="#"
          class="btn btn-outline-success"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          >Add
        </a>
     </div>
    <hr>
     <!-- Modal -->
    <div class="modal fade" tabindex="-1"  id="exampleModal">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Activity</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">
        <div class="input-group mb-3">
         <input type="text" class="form-control" placeholder="Activity Name" aria-label="activity_name" aria-describedby="basic-addon1">
      </div>
       <div class="input-group mb-3">
          <input type="file" class="form-control" id="customFile" />
      </div>
       <div class="input-group mb-3">
           <textarea class="form-control"  placeholder="Activity Description" rows="3"></textarea>
      </div>
      <div class="input-group mb-3">
         <input type="text" class="form-control" placeholder="Fee" aria-label="activity_name" aria-describedby="basic-addon1">
      </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>
   <div class="table-settings">
    <table class="table table-striped align-middle">
      <thead class="align-middle">
        <th></th>
        <th>Activity Name</th>
        <th>Image</th>
        <th>Activity Description</th>
        <th>Price</th>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>
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
  width:auto;
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
.action{
  float:right;
  display:flex

}
hr{
  margin-left: 12%;
  width:980px;
}
</style>
