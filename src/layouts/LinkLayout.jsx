import { Link } from "react-router-dom"

const LinkLayout = () => {
    return (
        <div>
            <Link to = {'/'}>Main</Link>
            <Link to = {'/main'}>Home</Link>
            <Link to = {'/about'}>About</Link>
        </div>
    )
}

export default LinkLayout