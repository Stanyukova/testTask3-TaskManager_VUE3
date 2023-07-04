import { createStore } from 'vuex';

const TASKS_STORAGE_KEY = 'tasks';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      saveTasksToStorage(state.tasks);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasksToStorage(state.tasks);
    },
    updateTask(state, { index,task }) {
        state.tasks.splice(index, 1, task);
        saveTasksToStorage(state.tasks);
      },
      
    loadTasksFromStorage(state) {
      const savedTasks = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
      if (savedTasks) {
        state.tasks = savedTasks;
      }
    },
  },
  actions: {
    fetchTasks({ commit }) {
      commit('loadTasksFromStorage');
    },
  
  },
});

function saveTasksToStorage(tasks) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}
