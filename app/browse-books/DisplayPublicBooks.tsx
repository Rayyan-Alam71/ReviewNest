'use client'

import React, { useEffect, useState } from 'react'
import { Book } from '../generated/prisma'
import { getBooks } from '@/actions/getBooks'
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
                <BookCardForBrowseBook key={book.id} name ={book.book_name} author={book.author_name} description={book.description} imageUrl={book.imageUrl} bookId={book.id}/>
            ))
        ) : (  !loading &&
            <h3>No books found</h3>
        )}
        </div>
    )
}

export default DisplayPublicBooks


import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";


function BookCardForBrowseBook({ name, author, description, imageUrl, bookId }: {
  name: string,
  bookId : string,
  author: string,
  description: string,
  imageUrl: string
}) {
  const [showMore, setShowMore] = useState(false);
  const [addReviewBlock, setAddReviewBlock] = useState<boolean>(false)
  const maxDescriptionLength = 50;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayedDescription = showMore || !isLongDescription
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="w-full max-w-[250px] mx-auto shadow-md rounded-lg overflow-hidden border border-border bg-white dark:bg-card flex flex-col items-center p-0 justify-between">
      {/* Image section */}
      <div className="w-full h-36 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-center"
        />
      </div>
      {/* Content section */}
      <div className="w-full flex flex-col items-start p-3 gap-1 flex-1">
        <h2 className="font-bold text-base text-primary w-full break-words whitespace-pre-line">{name}</h2>
        <h4 className="font-medium text-xs text-muted-foreground w-full break-words whitespace-pre-line">by {author}</h4>
        <p className="text-xs text-muted-foreground leading-tight w-full whitespace-pre-line">
          {displayedDescription}
        </p>
        {isLongDescription && (
          <Button
            size="sm"
            variant="outline"
            className="w-fit text-xs mt-1 px-2"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )}
        <div className="w-full flex justify-end">
          <Button size="sm" className="px-4 py-1 text-xs  cursor-pointer">
            <Link href={`/review/${bookId}`}>See Reviews</Link> 
          </Button>
        </div>
      </div>
    </Card>
  );
}
