<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: Math.random(), name: 'Task 1', done: false },
  { id: Math.random(), name: 'Task 2', done: true },
  { id: Math.random(), name: 'Task 3', done: false },
  { id: Math.random(), name: 'Task 4', done: true },
  { id: Math.random(), name: 'Task 5', done: false },
  { id: Math.random(), name: 'Task 6', done: true }
])

function addTodo(name = '') {
  todos.value.push({ id: Math.random(), name, done: false })
}

function add1000Todos() {
  for (let i = 0; i < 1000; i++) {
    addTodo(`New task ${i}`)
  }
}

function removeTodo(index) {
  todos.value = todos.value.toSpliced(index, 1)
}
</script>

<template>
  <h1>TO-DO LIST (Vue.js)</h1>

  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <input type="text" v-model="todo.name" />
      <button @click="() => removeTodo(index)">X</button>
      {{ todo.name }}
    </li>
  </ul>

  <button @click="() => addTodo()">Add To-Do</button>
  <button @click="add1000Todos">Add 1000 To-Dos</button>
</template>
