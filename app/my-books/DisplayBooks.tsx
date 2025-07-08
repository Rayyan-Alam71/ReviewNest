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
    const [loadPage ,setLoadPage] = useState<boolean>(false)
    useEffect(()=>{
        async function fetchBooks(){
          // setLoading(true)
            const books = await getMyBooks()
            setMyBooks(books)
            setLoading(false)
        }    
        fetchBooks()
    },[loadPage])

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
              bookId = {book.id}
              loadPage={loadPage}
              setLoadPage={setLoadPage}
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
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { deleteBook } from "@/actions/deleteBook";
import { useRouter } from "next/navigation";


function BookCard({ name, author, description, imageUrl, bookId , setLoadPage}: {
  name: string,
  bookId : string,
  author: string,
  description: string,
  imageUrl: string,
  loadPage : any
  setLoadPage :React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()
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
        <div className="w-full flex justify-between">
          <AlertDialogDemo bookId= {bookId} setLoadPage={setLoadPage}/>
          <Button size="sm" className="px-4 py-1 text-xs  cursor-pointer">
            <Link href={`/review/${bookId}`}>See Reviews</Link> 
          </Button>
        </div>
      </div>
    </Card>
  );
}

function AddReview(){
  const [ review, setReview ]= useState<string>("")

  return(
    <div>
      <Textarea  placeholder="Write your review." />
    </div>
  )
}


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function AlertDialogDemo({bookId , setLoadPage} : {bookId : string,  setLoadPage : any}) {
  const router = useRouter()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="cursor-pointer">Delete Book</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            book and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction  className="cursor-pointer" onClick={async ()=>{
            await deleteBook(bookId)
            // @ts-ignore
            setLoadPage(prev=>!prev)
          }}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

