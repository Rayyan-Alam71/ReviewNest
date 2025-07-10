import { SkeletonCard } from '@/components/SkeletonCard'
import React from 'react'

const loading = () => {
  return (
    <div className='w-screen h-calc[(100vh-4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-18 px-16 bbg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50'>
            
            {[0,0,0,0,0,0,0].map(()=>(
                <div>
                <SkeletonCard/>
                <br/><br/><br/>
                <SkeletonCard/>
                </div>
            ))}
    
    </div>
  )
}

export default loading
