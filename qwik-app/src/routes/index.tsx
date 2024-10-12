import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  console.log('Render')
  const store = useStore(
    {
      todos: [
        { id: Math.random(), name: 'Task 1', done: false },
        { id: Math.random(), name: 'Task 2', done: true },
        { id: Math.random(), name: 'Task 3', done: false },
        { id: Math.random(), name: 'Task 4', done: true },
        { id: Math.random(), name: 'Task 5', done: false },
        { id: Math.random(), name: 'Task 6', done: true }
      ]
    },
    { deep: true }
  )

  return (
    <>
      <h1>TO-DO LIST (Qwik)</h1>

      <ul>
        {store.todos.map((todo, index) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange$={(_, el) => (todo.done = el.checked)} />
            <input type="text" value={todo.name} onInput$={(_, el) => (todo.name = el.value)} />
            <button onClick$={() => store.todos.splice(index, 1)}>X</button>
            {todo.name}
          </li>
        ))}
      </ul>

      <button
        onClick$={() => {
          store.todos.push({ id: Math.random(), name: '', done: false })
        }}
      >
        Add To-Do
      </button>

      <button
        onClick$={() => {
          for (let i = 0; i < 1000; i++) {
            store.todos.push({ id: Math.random(), name: `New task ${i}`, done: false })
          }
        }}
      >
        Add 1000 To-Dos
      </button>
    </>
  )
})
