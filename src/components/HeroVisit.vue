<template>
  <div id="visit-container">
    <div class="right-container"></div>
    <div class="left-container"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroVisit',
};
</script>

<style scoped>
.left-container{
  min-height: 100vh;
  width:15%;
  background-color: var(--mono-dark-green);
  position:absolute;
  top:0;left: 0;
}
</style>
