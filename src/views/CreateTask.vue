<template>
  <div class="task_block">
    <h1>Создание задачи</h1>
    <form @submit.prevent="createTask">
      <label>
        Заголовок:
        <input type="text" v-model="title" required />
      </label>
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CreateTask',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapMutations(['addTask']),
    createTask() {
      const task = {
        id: Date.now(),
        title: this.title
      }
      this.addTask(task)
      this.title = ''
      this.$router.push('/tasklist')
    }
  }
}
</script>
<style>
.task_block {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
input {
  width: 100%;
  padding: 10px 5px;
  outline: none;
  font-size: 16px;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  background: #333;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
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
