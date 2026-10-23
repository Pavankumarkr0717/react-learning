import { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'


function Login() {
    const [userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleClick = (e) =>{
        e.preventDefault()
        setUser({userName, Password})
    }

    return (
        <>
            <input type='text'
            value={userName}
            onChange={(e) =>{
                setUserName(e.target.value)
            }}
            placeholder='UserName'/>
            <input type='text'
            value={Password}
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            placeholder='Password'/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default Login