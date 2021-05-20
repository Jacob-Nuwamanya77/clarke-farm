<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="main-container">
<div class="img-container bg-primary">
coommeeee
</div>
<div class="auth-container">
<h4 style="margin-bottom:20px;">Sign In</h4>
<form>
<div class="form-group">
<label class="mb-1"><strong>Email</strong></label>
<input type="email" class="form-control" placeholder="hello@example.com" name="email">
</div>
<div class="form-group">
<label class="mb-1"><strong>Password</strong></label>
<input type="password" class="form-control" name="password">
</div>
<div class="form-row d-flex justify-content-between mt-4 mb-2">
<div class="form-group">
<div class="custom-control custom-checkbox ml-1">
<input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
<label class="custom-control-label" for="basic_checkbox_1">Keep me Logged in</label>
</div>
</div>
<div class="form-group">
<a style="color:#068d68;">Forgot Password?</a>
</div>
</div>
<div>
<button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
</div>
</form>
</div>
</div>
</template>

<style scoped>
.main-container{
margin-top:150px;
background-color: tomato;
}
.img-container{
width:50%;
height:100%;
float: left;
}
.auth-container{
width:50%;
height:100%;
float: right;
padding:20px 60px;
}
</style>
<script>
export default {
  name: 'LoginPage',
};
</script>
