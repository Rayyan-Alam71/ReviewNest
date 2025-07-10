'use client'

import React, { useState } from 'react'
import { Book } from '../generated/prisma'
import noBookImage from "../../public/error-illustration-1.svg"
const DisplayPublicBooks = ({booksData} : {booksData : Book[]}) => {

    const [ books, setBooks ] = useState<Book[]>(booksData)
        
    return (
      <>
      <div className='w-3/4 flex justify-end pt-6'>
        <Button size="sm" className="cursor-pointer text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium">
            <Link href={`/add-book`}>Add Book</Link> 
        </Button>
      </div>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-18 px-16 bbg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50'>
       
        {(books && books.length!=0) && (
            books.map((book)=>(
                <BookCardForBrowseBook key={book.id} name ={book.book_name} author={book.author_name} description={book.description} imageUrl={book.imageUrl} bookId={book.id}/>
            ))
        )}
        
        </div>
         {!books || books?.length === 0 && 
            <div className='flex flex-col items-center mb-10 '>
              <Image
                src={noBookImage}
                width={250}
                height={250}
                alt="No data found"
                className="object-contain"
              />
              <h2 className='text-lg sm:text-xl md:text-2xl'>No Books found</h2>
              <div className='flex flex-col md:flex-row items-center gap-6 mt-8'>
              <h2 className='text-lg sm:text-xl md:text-2xl'>Be the first one to add. </h2>
              <Button variant={"default"} className='text-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium' asChild>
                <Link href="/add-book">Add Book</Link>
              </Button>
            </div>
            </div>  
          }
       </> 
    )
}

export default DisplayPublicBooks


import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image'


function BookCardForBrowseBook({ name, author, description, imageUrl, bookId }: {
  name: string,
  bookId : string,
  author: string,
  description: string,
  imageUrl: string
}) {
  const [showMore, setShowMore] = useState(false);
  const [addReviewBlock, setAddReviewBlock] = useState<boolean>(false)
  const maxDescriptionLength = 100;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayedDescription = showMore || !isLongDescription
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="w-full max-w-[250px] mx-auto bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl flex flex-col items-center p-0 justify-between">
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
        {/* {isLongDescription && (
          <Button
            size="sm"
            variant="outline"
            className="w-fit text-xs mt-1 px-2"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )} */}
        <div className="w-full flex justify-end pr-6 mt-4">
          <Button size="sm" className="cursor-pointer text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium">
            <Link href={`/review/${bookId}`}>See Reviews</Link> 
          </Button>
        </div>
      </div>
    </Card>
  );
}
