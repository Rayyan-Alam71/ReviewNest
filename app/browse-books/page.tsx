import React from 'react'
import {DisplayPublicBooks} from './DisplayPublicBooks'
import { getBooks } from '@/actions/getBooks';
import { unstable_noStore } from 'next/cache';

const page = async () => {
  unstable_noStore()
  const bookDetails = await getBooks();
  return (
    <div className='h-calc[(100vh-5rem)] bg-gradient-to-br from-slate-100 to-bg-indigo-50'>
      <DisplayPublicBooks books = {bookDetails}/>
    </div>
  )
}

export default page
