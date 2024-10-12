import { useState } from 'react'

const defaultTodoList = [
  { id: Math.random(), name: 'Task 1', done: false },
  { id: Math.random(), name: 'Task 2', done: true },
  { id: Math.random(), name: 'Task 3', done: false },
  { id: Math.random(), name: 'Task 4', done: true },
  { id: Math.random(), name: 'Task 5', done: false },
  { id: Math.random(), name: 'Task 6', done: true }
]

export function App() {
  const [todos, setTodos] = useState(defaultTodoList)

  const handleCheckboxChange = (index, event) => {
    const newTodos = [...todos]
    newTodos[index].done = event.target.checked
    setTodos(newTodos)
  }

  const handleInputChange = (index, event) => {
    const newTodos = [...todos]
    newTodos[index].name = event.target.value
    setTodos(newTodos)
  }

  const handleAddTodo = () => {
    const newTodos = [...todos]
    newTodos.push({ id: Math.random(), name: '', done: false })
    setTodos(newTodos)
  }

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleAdd1000Todos = () => {
    const newTodos = [...todos]
    for (let i = 0; i < 1000; i++) {
      newTodos.push({ id: Math.random(), name: `New task ${i}`, done: false })
    }
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>TO-DO LIST (React)</h1>

      <ul>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            onCheck={(e) => handleCheckboxChange(index, e)}
            onChange={(e) => handleInputChange(index, e)}
            onRemove={() => handleRemoveTodo(index)}
            key={todo.id}
          />
        ))}
      </ul>

      <button onClick={handleAddTodo}>Add To-Do</button>
      <button onClick={handleAdd1000Todos}>Add 1000 To-Dos</button>
    </div>
  )
}

function Todo({ todo, onCheck, onChange, onRemove }) {
  console.log('Render Todo:', todo.name)
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={onCheck} />
      <input type="text" value={todo.name} onChange={onChange} />
      <button onClick={onRemove}>X</button>
      {todo.name}
    </li>
  )
}

export default App
