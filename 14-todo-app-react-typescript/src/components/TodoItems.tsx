import type { Todo } from "../types/todo"

interface TodoItemProp {
  todo: Todo,
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}


function TodoItems({ todo, toggleTodo, removeTodo }: TodoItemProp) {
  return (
    <div className="flex items-center justify-between rounded shadow-lg mt-2 bg-white p-3">
      <div className="flex items-center justify-">
        <input type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
          className="size-3 text-blue-500 focus:ring-blue-500 rounded"
        />
        <span className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>{todo.text}</span>

      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:text-red-600">Remove</button>
    </div>
  )
}

export default TodoItems
