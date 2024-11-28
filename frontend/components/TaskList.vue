<template>
    <div>
      <div v-for="task in tasks" :key="task._id" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border relative">
        <h3 class="text-xl font-bold mb-2">{{ task.title }}</h3>
        <div class="border-t border-gray-200"></div>
        <p class="mb-2 mt-4 ">{{ task.description }}</p>
        <p class="mb-2 text-sm absolute bottom-5 left-8"> <span class="text-sm text-gray-500"> Status: </span> {{ task.status }}</p>
        <div class="flex justify-end">
          <button @click="$emit('edit-task', task)" class="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
          <button @click="$emit('delete-task', task._id)" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['tasks'])
  defineEmits(['edit-task', 'delete-task'])
  </script>