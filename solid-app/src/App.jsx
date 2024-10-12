import { createEffect, For } from 'solid-js'
import { createStore } from 'solid-js/store'

const defaultTodoList = [
  { id: Math.random(), name: 'Task 1', done: false },
  { id: Math.random(), name: 'Task 2', done: true },
  { id: Math.random(), name: 'Task 3', done: false },
  { id: Math.random(), name: 'Task 4', done: true },
  { id: Math.random(), name: 'Task 5', done: false },
  { id: Math.random(), name: 'Task 6', done: true }
]

function App() {
  const [todos, setTodos] = createStore(defaultTodoList)

  const handleCheckboxChange = (index, event) => {
    setTodos(index, 'done', event.target.checked)
  }

  const handleInputChange = (index, event) => {
    setTodos(index, 'name', event.target.value)
  }

  const handleAddTodo = (name = '') => {
    setTodos(todos.length, { id: Math.random(), name, done: false })
  }

  const handleRemoveTodo = (index) => {
    setTodos((currentTodos) => currentTodos.toSpliced(index, 1))
  }

  const handleAdd1000Todos = () => {
    for (let i = 0; i < 1000; i++) {
      handleAddTodo(`New task ${i}`)
    }
  }

  return (
    <div>
      <h1>TO-DO LIST (SolidJS)</h1>

      <ul>
        <For each={todos}>
          {(todo, index) => (
            <Todo
              todo={todo}
              onCheck={(e) => handleCheckboxChange(index(), e)}
              onChange={(e) => handleInputChange(index(), e)}
              onRemove={() => handleRemoveTodo(index())}
            />
          )}
        </For>
      </ul>

      <button onClick={() => handleAddTodo()}>Add To-Do</button>
      <button onClick={handleAdd1000Todos}>Add 1000 To-Dos</button>
    </div>
  )
}

function Todo({ todo, onCheck, onChange, onRemove }) {
  console.log('Render Todo:', todo.name)
  return (
    <li>
      <input type="checkbox" checked={todo.done} onInput={onCheck} />
      <input type="text" value={todo.name} onInput={onChange} />
      <button onClick={onRemove}>X</button>
      {todo.name}
    </li>
  )
}

export default App
