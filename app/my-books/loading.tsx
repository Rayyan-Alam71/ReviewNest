import { SkeletonCard } from '@/components/SkeletonCard'
import React from 'react'

const loading = () => {
  return (
    <div className="w-full h-calc[(100vh -4rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-18 my-4 ">
        {[0,0,0,0].map(()=>(
            <div>
            <SkeletonCard/>
            </div>
        ))}
    </div>
  )
}

export default loading
