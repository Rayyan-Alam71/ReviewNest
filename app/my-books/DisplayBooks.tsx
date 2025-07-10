'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
} from "@/components/ui/alert-dialog";
import { unstable_noStore } from "next/cache";
import { deleteBook } from "@/actions/deleteBook";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mock data for preview
const mockBooks = [
  {
    id: '1',
    book_name: 'The Great Gatsby',
    author_name: 'F. Scott Fitzgerald',
    description: 'A classic American novel set in the summer of 1922, following the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. This story explores themes of wealth, love, and the American Dream.',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop'
  },
  {
    id: '2',
    book_name: 'To Kill a Mockingbird',
    author_name: 'Harper Lee',
    description: 'A gripping tale of racial injustice and childhood innocence in the American South during the 1930s.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop'
  }
];

export interface Book {
  id: string;
  book_name: string;
  author_name: string;
  description: string;
  imageUrl: string;
}

export const DisplayBooks = ({ myBooks }: { myBooks: Book[] }) => {
  const [loadPage, setLoadPage] = useState<boolean>(false);

  return (
    <>
    <div className='w-full flex justify-end px-4 sm:px-6 lg:px-16 pt-4 sm:pt-6'>
      <Button size="sm" className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium">
        <Link href={'/add-book'}>Add Book</Link>
      </Button>
    </div>
      {/* Books Grid - Responsive layout */}
      <div className="w-full h-calc[(100vh-4rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-12 lg:py-18 my-2 sm:my-4">
        {(myBooks && myBooks.length !== 0) && (
          myBooks.map((book) => (
            <BookCard
              key={book.id}
              name={book.book_name}
              author={book.author_name}
              description={book.description}
              imageUrl={book.imageUrl}
              bookId={book.id}
              loadPage={loadPage}
              setLoadPage={setLoadPage}
            />
          ))
        )}
      </div>
      
      {/* No Books Found - Responsive layout */}
      {myBooks.length === 0 && 
        <div className='flex flex-col items-center mb-10 px-4 sm:px-6'>
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-400 text-sm sm:text-base">No Image</span>
          </div>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-center'>No Books found</h2>
          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8'>
            <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-center'>Add Your First Book</h2>
            <Button className='text-sm sm:text-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-medium'>
              Add Book
            </Button>
          </div>
        </div>  
      }
    </>
  );
};

function BookCard({ name, author, description, imageUrl, bookId, setLoadPage }: {
  name: string,
  bookId: string,
  author: string,
  description: string,
  imageUrl: string,
  loadPage: any,
  setLoadPage: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const maxDescriptionLength = 100;
  const displayedDescription = description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="my-2 w-full max-w-none sm:max-w-[250px] mx-auto rounded-lg overflow-hidden hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl dark:bg-card flex flex-col items-center p-0 justify-between">
      {/* Image section - Responsive height */}
      <div className="w-full h-32 sm:h-36 md:h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      {/* Content section - Responsive padding and text sizes */}
      <div className="w-full flex flex-col items-start p-2 sm:p-3 gap-1 flex-1">
        <h2 className="font-bold text-sm sm:text-base text-gray-800 w-full break-words whitespace-pre-line">{name}</h2>
        <h4 className="font-medium text-xs sm:text-xs text-gray-600 w-full break-words whitespace-pre-line">by {author}</h4>
        <p className="text-xs sm:text-xs text-gray-600 leading-tight w-full whitespace-pre-line">
          {displayedDescription}
        </p>
        
        {/* Button container - Responsive layout */}
        <div className="w-full flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-3 sm:mt-4">
          <AlertDialogDemo bookId={bookId} setLoadPage={setLoadPage} />
          <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-xs sm:text-sm">
            <Link href={`review/${bookId}`}>See Reviews</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

function AlertDialogDemo({ bookId, setLoadPage }: { bookId: string, setLoadPage: any }) {
  const router = useRouter()
  const handleDelete = async () => {
    // Original delete logic would go here
    await deleteBook(bookId)
    router.refresh()
    console.log('Delete book:', bookId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size='sm' className="cursor-pointer text-xs sm:text-sm">Delete Book</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-11/12 sm:w-full max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base sm:text-lg">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-sm sm:text-base">
            This action cannot be undone. This will permanently delete your book.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2 ">
          <AlertDialogCancel className="text-sm sm:text-base">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-sm sm:text-base" 
            onClick={handleDelete}
          >
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
