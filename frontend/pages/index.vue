<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">To-Do List</h1>
      <nav class="mb-4">
        <button @click="currentView = 'list'" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">List Tasks</button>
        <button @click="currentView = 'create'" class="bg-green-500 text-white px-4 py-2 rounded">Create Task</button>
      </nav>
      <TaskList v-if="currentView === 'list'" :tasks="tasks" @delete-task="deleteTask" @edit-task="editTask" />
      <TaskForm v-if="currentView === 'create'" @add-task="addTask" />
      <TaskEdit v-if="currentView === 'edit'" :task="currentTask" @update-task="updateTask" @cancel="currentView = 'list'" />
    </div>
  </template>
  
  <script setup>
  //Head de la pagina
  useHead({
    title: 'To-Do List',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico'
      }
    ]
  })


  import { ref, onMounted } from 'vue'
  
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  
  const tasks = ref([])
  const currentView = ref('list')
  const currentTask = ref(null)
  
  onMounted(async () => {
    await fetchTasks()
  })
  
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${apiBase}/tasks`)
      tasks.value = await response.json()
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }
  
  const addTask = async (task) => {
    try {
      await fetch(`${apiBase}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      await fetchTasks()
      currentView.value = 'list'
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }
  
  const updateTask = async (updatedTask) => {
    try {
      await fetch(`${apiBase}/tasks/${updatedTask._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      })
      await fetchTasks()
      currentView.value = 'list'
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }
  
  const deleteTask = async (taskId) => {
    try {
      await fetch(`${apiBase}/tasks/${taskId}`, {
        method: 'DELETE',
      })
      await fetchTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }
  
  const editTask = (task) => {
    currentTask.value = task
    currentView.value = 'edit'
  }

  //Lazy loading de composables
  const TaskForm = defineAsyncComponent(() => import('../components/TaskForm.vue'))
  const TaskEdit = defineAsyncComponent(() => import('../components/TaskEdit.vue'))
  </script>

 

