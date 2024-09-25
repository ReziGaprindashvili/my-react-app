import { useRef } from "react"

const UserForm = ({onFormSubmit, firstName, lastName}) => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        if(firstNameRef.current && lastNameRef.current) {
            onFormSubmit(firstNameRef.cuurrent.value, lastNameRef.current.calue)
        } else {
            console.log('please fill all the information')
        }
    }
    return <form>
        
        <input 
            type="text" 
            placeholder="firstName" 
            ref={firstNameRef}
            defaultValue={firstName}
        />
        
        <input 
            type="text" 
            placeholder="lastName" 
            ref={lastNameRef}
            defaultValue={lastName}
        />
        
        <button onClick={onSubmit}>Submit</button>
    </form>
}

export default UserForm