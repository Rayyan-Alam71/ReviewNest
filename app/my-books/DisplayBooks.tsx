'use client'

import React, { useState } from "react";
import { getMyBooks } from '@/actions/getBooks'
import { useEffect } from "react"
import {SkeletonCard} from "@/components/SkeletonCard"
import noBookImage from "../../public/error-illustration-1.svg"
export interface Book {
    id : string;
    book_name : string;
    author_name : string;
    description : string;
    imageUrl : string
}

const DisplayBooks = ({myBooksData} : {myBooksData : Book[]}) => {
    const [myBooks, setMyBooks] = useState<Book[]>(myBooksData)
    const [loadPage ,setLoadPage] = useState<boolean>(false)

    return (
      <>
      <div className="w-full h-calc[(100vh -4rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-18 my-4 ">
        {(myBooks && myBooks.length !== 0) && (
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
        )}
      </div>
      {myBooks.length === 0 && 
        <div className='flex flex-col items-center mb-10 '>
          <Image
            src={noBookImage}
            width={250}
            height={250}
            alt="No data found"
            className="object-contain"
          />
          <h2 className='text-lg sm:text-xl md:text-2xl'>No Books found</h2>
         <div className='flex flex-col md:flex-row items-center gap-4 mt-8'>
          <h2 className='text-lg sm:text-xl md:text-2xl'>Add Your First Book </h2>
          <Button variant={"default"} className='text-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium' asChild>
            <Link href="/add-book">Add Book</Link>
          </Button>
        </div>
        </div>  
      }
      </>
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
  const maxDescriptionLength = 100;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayedDescription = showMore || !isLongDescription
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="my-2 w-full max-w-[250px] mx-auto rounded-lg overflow-hidden hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl dark:bg-card flex flex-col items-center p-0 justify-between">
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
        <div className="w-full flex justify-between mt-4">
          <AlertDialogDemo bookId= {bookId} setLoadPage={setLoadPage}/>
          <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 py-2.5 font-medium">
            <Link href={`/review/${bookId}`}>See Reviews</Link> 
          </Button>
        </div>
      </div>
    </Card>
  );
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
import Image from "next/image";

function AlertDialogDemo({bookId , setLoadPage} : {bookId : string,  setLoadPage : any}) {
  const router = useRouter()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size='sm' className="cursor-pointer">Delete Book</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            book.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction  className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 py-2.5 font-medium" onClick={async ()=>{
            await deleteBook(bookId)
            router.refresh()
          }}>Yes, delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

