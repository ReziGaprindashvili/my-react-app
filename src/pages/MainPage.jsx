import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"


const MainPage = () => {
    const {sendRequest} = useRequest({method: 'DELETE'})
    const {response, error, loading, resendRequest} = useFetch({url: '/api/v1/users', method: "GET"})
    const userList = response?.items.map(user => {
    
      return {
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._uuid
    }
  }) || []
  
    const onDelete = (userId) => {
      sendRequest(null, `/api/v1/users/${userId}`).then(() => resendRequest())
    }
    
    if(loading) return <p>Loading . . .</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            {userList.map((user) => <div key={user.id} style={{border: '1px solid gray'}}>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <Link to={`/update/${user.id}`}>Edit</Link>
            <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>)}
        </div>
    )
}
export default MainPage