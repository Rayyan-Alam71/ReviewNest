'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        router.replace('/')
    }, [router])
  return (
    <div className='w-screen h-[calc(100vh-10rem)] flex justify-center items-center'>
        <div>
         <h2 className='font-bold text-lg sm:text-lg md:text-2xl'>404 - Page Not Found</h2>
        </div>
    </div>
  )
}

export default NotFound
