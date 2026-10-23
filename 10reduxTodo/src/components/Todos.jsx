import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

return (
    <>
    <div className="mt-8 flex items-center justify-between text-sm text-slate-400">
        <span className="font-semibold uppercase tracking-wider">Todos</span>
        <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-indigo-300">
            {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </span>
    </div>
    {todos.length === 0 && (
        <p className="mt-6 rounded-lg border border-dashed border-white/10 py-8 text-center text-slate-500">
            Nothing to do yet. Add your first todo above!
        </p>
    )}
    <ul className="list-none">
        {todos.map((todo) => (
        <li
            className="group mt-3 flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-slate-800/70 px-4 py-3 transition hover:border-indigo-500/40 hover:bg-slate-800"
            key={todo.id}
        >
        <div className='break-words text-slate-100'>{todo.text}</div>
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            aria-label="Delete todo"
            className="shrink-0 cursor-pointer rounded-md bg-red-500/10 p-1.5 text-red-400 transition hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
            </svg>
            </button>
        </li>
        ))}
    </ul>
    </>
)
}

export default Todos