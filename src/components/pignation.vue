<template>
    <div class="pagination-container">

            <div class="scroll-page">
          <button><span>&lt;</span></button>
           <button><span>&gt;</span></button>

        </div>
        <p>
            Page {{pages.currentPage}} of {{pages.totalPages}}
        </p>

     </div>

</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      pages: {
        currentPage: 1,
        totalPages: 2,

      },
    };
  },

};
</script>

<style scoped>
.pagination-container{
 border:1px solid #068d68;
 height:50px;
 width:800px;
}
.scroll-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  margin:0 auto;
  padding-top: 5px;
  position:relative
}

p{
   display: flex;
  justify-content: space-between;
  padding-top: 5px;
  position:relative
}

button {
  font-size: 20px;
  border-radius: 2px;
  height: 30px;
  width: 800px;
  border: none;
  color:black;
}

button:focus {
  outline: none;
}
 /* p{
margin-bottom: 150px;
margin-right: 40%;
} */

</style>
