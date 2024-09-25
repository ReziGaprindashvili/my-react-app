import { useEffect, useState } from "react"

const useWindowResize = () => {
    const[width, setWidth] = useState(Window.innerWidth)
    const[height, setHeight] = useState(Window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWidth(Window.innerWidth)
            setHeight(Window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return{width, height}
}

export default useWindowResize