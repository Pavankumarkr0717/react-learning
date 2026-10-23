import Login from './components/Login/Login'
import User from './components/Login/User'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
      <UserContextProvider>
        <h1>the user Context Api</h1>
        <Login/>
        <User/>
      </UserContextProvider>
  )
}

export default App
