<script>
  let todos = [
    { id: Math.random(), name: 'Task 1', done: false },
    { id: Math.random(), name: 'Task 2', done: true },
    { id: Math.random(), name: 'Task 3', done: false },
    { id: Math.random(), name: 'Task 4', done: true },
    { id: Math.random(), name: 'Task 5', done: false },
    { id: Math.random(), name: 'Task 6', done: true }
  ]

  function addTodo(name = '') {
    todos = [...todos, { id: Math.random(), name, done: false }]
  }

  function add1000Todos() {
    for (let i = 0; i < 1000; i++) {
      addTodo(`New task ${i}`)
    }
  }

  function removeTodo(index) {
    todos = todos.toSpliced(index, 1)
  }
</script>

<h1>TO-DO LIST (Svelte)</h1>

<ul>
  {#each todos as todo, index (todo.id)}
    <li>
      <input type="checkbox" bind:checked={todo.done}>
      <input type="text" bind:value={todo.name}>
      <button on:click={() => removeTodo(index)}>X</button>
      {todo.name}
    </li>
  {/each}
</ul>

<button on:click={() => addTodo()}>Add To-Do</button>
<button on:click={add1000Todos}>Add 1000 To-Dos</button>
