<template>
  <div id="reminders-container">
    <div id="signin-options">
      <span id="notifications">
        <fa icon = "bell" id="bell-icon"/>
        <span id="notifications-counter">10</span>
      </span>
      <span id="user-details">
        Tasks
      </span>
      <span id="notifications">
        <fa icon = "plus" id="bell-icon"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
};
</script>

<style scoped>
#signin-options{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
#notifications {
  width:40px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
   color:#04548C;
}
#notifications:hover{
  cursor: pointer;
}
#notifications-counter{
  position:absolute;
  top:-8px;
  right:-8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color:white;
  width:25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--dark-green);
}
#user-details{
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color:rgba(44, 62, 80, 0.8);
}
</style>
