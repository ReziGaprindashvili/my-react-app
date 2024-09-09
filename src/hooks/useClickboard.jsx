import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"

const useClickboard = () => {
    const [copy, setCopy] = useState(false)

    const makeCopy = (value) => {
        if(typeof value === "string" || typeof value === "number") {
            navigator.clipboard.writeText(value)
            setCopy(true)
        } else {
            setCopy(false)
        }
            
    }

    useEffect(() => {
        let timeout
        if(copy) {
            timeout = setTimeout(() => setCopy(false), 3000)
        }

        return () => clearTimeout(timeout)
    }, [copy])

    return {makeCopy, copy}
}

export default useClickboard