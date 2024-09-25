import { useParams } from "react-router-dom"

const data = [
    {id : 1, name: 'Rezi', age: 15},
    {id : 2, name: 'Giga', age: 20},
    {id : 3, name: 'Temo', age: 14}
]

const ParamPage = () => {
    const param = useParams()
    
    const user = data.find(user => user.id == param.id)
    if(!user) {
        return <idv>user not found</idv>
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h2>Param Route (Dynamic)</h2>
        </div>
    )
}

export default ParamPage