'use client'

import React, { useEffect, useState } from 'react'
import { Book } from '../generated/prisma'
import { getBooks } from '@/actions/getBooks'
import { BookCard } from '../my-books/DisplayBooks'
import { SkeletonCard } from '@/components/SkeletonCard'

const DisplayPublicBooks = () => {
    const [ books, setBooks ] = useState<Book[]>()
    const [loading, setLoading ] = useState<boolean>(false)
    useEffect(()=>{
        async function fetchBooks(){
            setLoading(true)
            const books_res = await getBooks()
            setBooks(books_res)
            setLoading(false)
        }
        fetchBooks()
    },[])
        
    return (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-18 px-16'>
        {loading && [0,0,0,0].map(()=>(
            <div>
            <SkeletonCard/>
            <br/><br/><br/>
            <SkeletonCard/>
            </div>
        ))}

        {(!loading && books && books.length!=0) ? (
            books.map((book)=>(
                <BookCard key={book.id} name ={book.book_name} author={book.author_name} description={book.description} imageUrl={book.imageUrl}/>
            ))
        ) : (  !loading &&
            <h3>No books found</h3>
        )}
        </div>
    )
}

export default DisplayPublicBooks
