import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo(input.trim()))
        setInput('')
    }

return (
    <form onSubmit={addTodoHandler} className="mt-8 flex gap-3">
    <input
        type="text"
        className="min-w-0 flex-1 rounded-lg border border-white/10 bg-slate-800/80 px-4 py-2.5 text-base text-gray-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
    />
    <button
        type="submit"
        className="shrink-0 cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
    >
        Add Todo
    </button>
    </form>
)
}

export default AddTodo