<template>
  <div id="tasks-container">
    <div id="signin-options">
      <span :class="['notifications', tasks.length > 0 ? 'blue-ink': 'muted-gray']">
        <fa icon = "bell"/>
        <span id="notifications-counter" v-if="tasks.length != 0">
          {{ tasks.length }}
        </span>
      </span>
      <span id="user-details">
        Tasks
      </span>
      <span class="notifications blue-ink icons" @click="changeIcon">
       <fa icon="plus" v-if="notTakingNotes" />
       <fa icon="minus" v-else />
      </span>
    </div>
    <template v-if="notTakingNotes && tasks.length == 0">
      <div id="default-note-screen">
        <p class="default-title">Set tasks or reminders</p>
        <p class="muted-gray default-text">
          Do you have any tasks or creative ideas, this tool will be your safe place.
          Click on the plus icon to add new notes.
        </p>
      </div>
    </template>
    <template v-if="!notTakingNotes">
      <div id="note-form">
        <form @submit.prevent="submitTask">
          <div class="input-container">
            <input type="text" v-model="title" placeholder="Title" maxlength="22" id="note-title" required>
            <textarea
              v-model="note" cols="29" rows="5"
              maxlength="80" placeholder="Type here" @input="checkInputLength"></textarea>
            <span class="text-limits">{{ textarea }} / 80</span>
          </div>
          <button class="save-button" type="submit">Save</button>
        </form>
      </div>
    </template>
    <template v-if="notTakingNotes && tasks.length != 0">
      <div id="display-list">
        <div class="task-item" v-for="(task, index) in tasks" :key="index" :id="task._id">
          <span :class="['task-initials', task.color]">
            {{ extractInitials(task.title) }}
          </span>
          <span class="task-details">
            <span class="task-name">{{ capitalizeEachWord(task.title) }}</span>
            <span class="muted-detail">
              {{ sliceString(task.note) }}
            </span>
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CrudService from '@/services/crud-service';
import FormatText from '@/mixins/format-text';

export default {
  name: 'TodoList',
  created() {
    CrudService.get('api/tasks')
      .then((response) => {
        const data = [...response.data].map((task, index) => {
          const color = this.addBgColor(index);
          return { ...task, color };
        });
        this.tasks = data;
      });
  },
  data() {
    return {
      notTakingNotes: true,
      tasks: [],
      colorList: [
        'light-blue',
        'light-red',
        'navy-blue',
        'light-orange',
      ],
      colorIndex: 0,
      textarea: 0,
      title: '',
      note: '',
    };
  },
  mixins: [FormatText],
  methods: {
    changeIcon() {
      this.notTakingNotes = !this.notTakingNotes;
      this.textarea = 0;
    },
    checkInputLength(event) {
      this.textarea = event.target.value.length;
    },
    addBgColor(index) {
      if (index <= 3) {
        const color = this.colorList[this.colorIndex];
        this.colorIndex += 1;
        return color;
      }
      if (index % 4 === 0) {
        this.colorIndex = 0;
      }
      const color = this.colorList[this.colorIndex];
      this.colorIndex += 1;
      return color;
    },
    createTaskObject() {
      const inputData = {
        title: this.title,
        note: this.note,
      };
      return inputData;
    },
    submitTask() {
      const task = this.createTaskObject();
      CrudService.post('api/tasks', task)
        .then((response) => {
          this.notTakingNotes = !this.notTakingNotes;
          this.title = '';
          this.note = '';
          this.tasks.push(response.data);
        });
    },
  },
};
</script>

<style scoped>
#tasks-container{
  min-height: 100%;
  max-height: 100%;
}
#signin-options{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.blue-ink{
  color:#04548C;
}
.muted-gray{
  color:#a9a9a9;
}
.notifications {
  width:40px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
}
.icons:hover{
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
#default-note-screen{
  width:95%;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
}
.default-title{
  font-weight: bold;
  text-align: center;
}
.default-text{
  font-size: 14px;
  text-align: center;
}
#note-form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-container{
  margin-top: 12px;
}
textarea{
  text-align: left;
  border:none;
  background-color: white;
  padding-left: 5px;
  display: block;
}
#note-title{
  border:none;
  width:98%;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 5px;
}
.save-button{
  color: white;
  border:none;
  background-color: var(--mono-dark-green);
  width:80px;
  margin-right: 10px;
  margin-top: 10px;
}
.text-limits{
  font-size: 13px;
  font-weight: bold;
  color: #a9a9a9;
  display: block;
  float: right;
  margin-top: 10px;
}
#display-list{
  margin-top: 25px;
  height:90%;
  overflow-y: scroll;
}
.task-initials{
  display: flex;
  width:50px;
  height: 50px;
  background-color: var(--smoky-white);
  border-radius: 10px;
  padding-top: 2px;
  margin-right: 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.initials{
  font-weight: bolder;
  font-size: 18px;
  font-weight: bold;
}
.task-item{
  width:95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin-bottom:15px;
}
.task-details{
  display: flex;
  flex-direction: column;
}
.task-name{
  font-size: 14px;
  color:rgba(44, 62, 80, 0.9);
  font-weight: bolder;
}
.muted-detail{
  font-size: 13px;
  color:#a9a9a9;
  font-weight: bold;
}
.light-blue{
  background-color: rgba(43, 174, 170, 0.1);
}
.navy-blue{
  background-color:rgba(4, 84, 140, 0.1);
}
.light-orange{
  background-color: rgba(252, 167, 5, 0.1);
}
.light-red{
  background-color:rgba(252, 100, 108, 0.1);
}
</style>
