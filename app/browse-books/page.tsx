import React from 'react'
import {DisplayPublicBooks} from './DisplayPublicBooks'
import { getBooks } from '@/actions/getBooks';
import { unstable_noStore } from 'next/cache';

const page = async ({searchParams} : { searchParams : Promise<{search : string}>}) => {
  unstable_noStore()
  const {search} = await searchParams 
  console.log(search)
  const bookDetails = await getBooks(search);
  return (
    <div className='h-calc[(100vh-5rem)] bg-gradient-to-br from-slate-100 to-bg-indigo-50'>
      <DisplayPublicBooks books = {bookDetails} searchQuery = {search}/>
    </div>
  )
}

export default page
