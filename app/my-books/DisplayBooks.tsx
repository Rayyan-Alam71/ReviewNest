'use client'

import React, { useState } from "react";
import { getMyBooks } from '@/actions/getBooks'
import { useEffect } from "react"
import {SkeletonCard} from "@/components/SkeletonCard"
export interface Book {
    id : string;
    book_name : string;
    author_name : string;
    description : string;
    imageUrl : string
}

const DisplayBooks = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [myBooks, setMyBooks] = useState<Book[]>([])
    
    useEffect(()=>{
        async function fetchBooks(){
          // setLoading(true)
            const books = await getMyBooks()
            console.log(books)
            setMyBooks(books)
            setLoading(false)
        }    
        fetchBooks()
    },[])

    return (
      <div className="w-full min-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-18 my-4">
        {loading && [0,0,0,0].map(()=>(
          <div>
            <SkeletonCard/>
          </div>
        ))}
        {(!loading && myBooks && myBooks.length !== 0) ? (
          myBooks.map((book) => (
            <BookCard
              key={book.id}
              name={book.book_name}
              author={book.author_name}
              description={book.description}
              imageUrl={book.imageUrl}
            />
          ))
        ) : (!loading &&
          <h2>No book found</h2>
        )}
      </div>
    );
}

export default DisplayBooks

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


export function BookCard({ name, author, description, imageUrl }: {
  name: string,
  author: string,
  description: string,
  imageUrl: string
}) {
  const [showMore, setShowMore] = useState(false);
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
            See Reviews
          </Button>
        </div>
      </div>
    </Card>
  );
}
