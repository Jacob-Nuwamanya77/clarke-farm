<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
<div class="main-container">
<div class="auth-container">
  <div class="new-user">
  </div>
<div class="main-body">
<h4 class="text-center">Sign In</h4>
<img src="@/assets/images/Login/siginImage.png"  class="center">
<div>
</div>
<form>
<div class="form-group">
<label class="mb-1"><strong>Email</strong></label>
<input type="email" class="form-control" placeholder="hello@example.com" name="email" required>
</div>
<div class="form-group">
<label class="mb-1"><strong>Password</strong></label>
<input type="password" class="form-control" name="password" required>
</div>
<div class="form-row d-flex justify-content-between mt-4 mb-2">
<div class="form-group">
<div class="custom-control custom-checkbox ml-1">
</div>
</div>
</div>
<div>
  <button type="button" class="btn btn-success">Sign In</button>
</div>
</form>
</div>
<div class="copy-rights">
 <hr class="line">
 <p>&copy; 2021  Clarke Farm.</p>
 </div>
</div>
</div>
</template>

<style scoped>
.main-container{
/* margin-top:150px; */
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: var(- -smoky-white)
;
  /* background-position: center;
  background-repeat: no-repeat; */
  width:100%;
}
.auth-container{
width:80%;
background-color:white;
border-radius: 10px;
height:500px;
align-items: center;
padding:20px 60px;
}
.main-body{
  width:40%;
  margin: auto;
  margin-top: 10%;
}
img{
  width:30;
  height:30;
  align-items: center;
}
h4{
  margin-bottom:20px;
  font-weight: bold;
  color:#2c3e50;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
}
.auth-container .form-group a{
color:#068d68;
}
.form-group{
  padding: 4px;
}
button{
width: 357px;
}
.copy-rights{
margin-top: 5%;
text-align: center;
font-weight: bold;
}
hr{
color: green;
box-shadow: grey;
}
.line{
  width: 910px;
}
</style>
<script>
export default {
  name: 'LoginPage',
};
</script>
