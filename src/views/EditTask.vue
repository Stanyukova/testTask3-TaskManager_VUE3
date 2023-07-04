<template>
    <div class="task_block">
      <h1>Редактирование задачи</h1>
      <form @submit.prevent="saveTask">
        <p></p>
        <input type="text" v-model="editedTask.title" placeholder="Заголовок задачи" />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </template>
  
  <script>
 import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'EditTask',
  computed: {
    ...mapState(['tasks']),
    editedTask() {
      const taskId = this.$route.params.taskId;
      return this.tasks.filter((task) => task.id === taskId);
    },
    
  },
  methods: {
    ...mapMutations(['updateTask']),
    ...mapActions(['fetchTasks']),
    saveTask() {
       
      const index = this.tasks.findIndex((task) => task.id == this.$route.params.taskId);
      console.log(this.editedTask)
      const newTask = {
          id:  this.$route.params.taskId,
          title: this.editedTask.title,
        };
      this.updateTask({ index,  task:newTask  });
      this.fetchTasks(); 
      this.$router.push('/tasklist');
    },
  },
};

  </script>

  <style>
  .task_block{
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
input{
    width: 100%;
  padding: 10px 5px;
  outline: none;
  font-size: 16px;
   }
   button{
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  background: #333;
  color: white;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
 
}
button:hover {
  box-shadow: 0 0 40px 40px rgba(20, 141, 11, 0.643) inset;
  transition: box-shadow 0.6s ease-in-out, color 0.6s ease-in-out;
}
</style>
  

  