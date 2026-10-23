import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function User() {
    const {user} = useContext(UserContext)

    if(!user) return <h1>please login</h1>
    return(
    <>
        <div>Welcome {user.userName}</div>
        <div>{user.Password}</div>    
    </>
    )
}

export default User