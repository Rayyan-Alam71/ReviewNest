import React from 'react'
import AddBook from './AddBook'

const page = () => {
  return (
    <div className='w-screen h-[calc(100vh - 4rem)] flex flex-col justify-center items-center pt-14 gap-8 bg-gradient-to-br from-slate-100 to-bg-indigo-50'>
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Add New Book
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Share your favorite book with the community and help others discover their next great read
          </p>
        </div>
      <AddBook/>
    </div>
  )
}

export default page
