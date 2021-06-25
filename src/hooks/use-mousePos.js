import { useEffect, useState } from 'react'

const useMousePos = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove');
    }, [])
    return mousePosition;
}

export default useMousePos;
