<template>
  <div class="list">
    <h1>Список задач</h1>
    <ul class="tasklist">
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Удалить</button>
        <router-link :to="{ name: 'editTask', params: { taskId: task.id } }" class="edit"
          >Редактировать</router-link
        >
      </li>
    </ul>
    <router-link to="/create-task" class="create">Создать задачу</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'TaskList',
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapMutations(['deleteTask']),
    ...mapActions(['fetchTasks'])
  },
  created() {
    this.fetchTasks()
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.create {
  margin-top: 20px;
  font-weight: bold;
  color: rgb(49, 207, 154);
  padding: 0.5em;
  border: thin solid rgb(33, 187, 218);
  border-radius: 3px;
  max-width: 150px;
  text-align: center;
}
.edit {
  font-weight: bold;
  color: rgb(49, 207, 154);
  padding: 0.5em;
  border-radius: 3px;
}
.tasklist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.tasklist li {
  gap: 5px;
  min-width: 250px;
  width: 100%;
  background-color: #768f765b;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: bold;
}
.tasklist li:hover {
  box-shadow: 0 0 18px 4px rgba(88, 102, 82, 0.721);
  transition: box-shadow 0.6s ease-in-out, color 0.6s ease-in-out;
}
.tasklist button {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  margin-top: 10px;
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
  box-shadow: 0 0 40px 40px rgb(222, 143, 15) inset;
  transition: box-shadow 0.6s ease-in-out, color 0.6s ease-in-out;
}
</style>
