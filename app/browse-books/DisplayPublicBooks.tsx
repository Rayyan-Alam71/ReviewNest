'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Book } from '@prisma/client';
import Link from 'next/link';


export const DisplayPublicBooks = ({ books } : {books : Book[]}) => {
  return (
    <>
      {/* Add Book Button - Responsive positioning */}
      <div className='w-full flex justify-end px-4 sm:px-6 lg:px-16 pt-4 sm:pt-6'>
        <Button size="sm" className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium">
          <Link href={'/add-book'}>Add Book</Link>
        </Button>
      </div>
      
      {/* Books Grid - Responsive layout */}
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 py-6 sm:py-12 lg:py-18 px-4 sm:px-6 md:px-8 lg:px-16 '>
        {(books && books.length !== 0) && (
          books.map((book) => (
            <BookCardForBrowseBook 
              key={book.id} 
              name={book.book_name} 
              author={book.author_name} 
              description={book.description} 
              imageUrl={book.imageUrl} 
              bookId={book.id}
            />
          ))
        )}
      </div>
      
      {/* No Books Found - Responsive layout */}
      {!books || books?.length === 0 && 
        <div className='flex flex-col items-center mb-10 px-4 sm:px-6'>
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-400 text-sm sm:text-base">No Image</span>
          </div>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-center'>No Books found</h2>
          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8'>
            <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-center'>Be the first one to add.</h2>
            <Button className='text-sm sm:text-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-medium'>
              <Link href={'/add-book'}>Add Book</Link>
            </Button>
          </div>
        </div>  
      }
    </>
  );
};

function BookCardForBrowseBook({ name, author, description, imageUrl, bookId } : any) {
  const [showMore, setShowMore] = useState(false);
  const [addReviewBlock, setAddReviewBlock] = useState(false);
  const maxDescriptionLength = 100;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayedDescription = showMore || !isLongDescription
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="w-full max-w-none sm:max-w-[250px] mx-auto bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl flex flex-col items-center p-0 justify-between">
      {/* Image section - Responsive height */}
      <div className="w-full h-32 sm:h-36 md:h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      {/* Content section - Responsive padding and text sizes */}
      <div className="w-full flex flex-col items-start p-2 sm:p-3 gap-2 flex-1">
        <h2 className="font-bold text-sm sm:text-base text-gray-800 w-full break-words whitespace-pre-line">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <h4 className="font-medium md:text-sm text-xs text-gray-700 w-full break-words whitespace-pre-line">by {author.charAt(0).toUpperCase() + author.slice(1)}</h4>
        <p className="text-xs sm:text-xs text-gray-700 leading-tight w-full whitespace-pre-line">
          {displayedDescription.charAt(0).toUpperCase() + displayedDescription.slice(1)}
        </p>
        
        {/* Button container - Responsive positioning */}
        <div className="w-full flex justify-end mt-3 sm:mt-4">
          <Button size="sm" className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium">
            <Link href={`/review/${bookId}`}>See Reviews</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}



