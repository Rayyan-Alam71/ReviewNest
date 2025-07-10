import React from 'react'
import {DisplayBooks} from './DisplayBooks'
import { getMyBooks } from '@/actions/getBooks'
import { unstable_noStore } from 'next/cache'

const page = async () => {
  unstable_noStore()
  const myBooks = await getMyBooks()
  return (
    <div className='w-screen h-calc[(100vh-4rempx)] bg-gradient-to-br from-slate-100 to-bg-indigo-50'>
      <DisplayBooks myBooks={myBooks}/>
    </div>
  )
}

export default page
