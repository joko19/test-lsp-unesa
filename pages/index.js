import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        window.location.href = '/home'
    }, [])
    return (
        <div className='text-center my-12'>Loading...</div>
    )
}