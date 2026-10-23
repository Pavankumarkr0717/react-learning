import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
function App() {

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 px-4 py-12">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white">
          Redux Todo
        </h1>
        <p className="mt-1 text-center text-sm text-slate-400">
          Stay on top of your tasks
        </p>
        <AddTodo/>
        <Todos/>
      </div>
    </div>
  )
}

export default App
