import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
        <div className="py-20 text-center text-3xl font-semibold text-gray-800">
            User: <span className="text-orange-700">{userId}</span>
        </div>
    )
}

export default User
