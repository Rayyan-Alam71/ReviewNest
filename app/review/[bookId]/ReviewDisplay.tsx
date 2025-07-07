"use client"
import { getBookDetail } from '@/actions/getBooks'
import { Book } from '@/app/generated/prisma'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// const ReviewDisplay = ({bookId} : { bookId : string}) => {

//     const [ bookDetail, setBookDetail ]= useState<Book>({
//         book_name : "",
//         id : "",
//         userId : "",
//         author_name : "",
//         imageUrl : "",
//         description : ""
//     })

//     useEffect(()=>{
//         async function getDetails(){
//             const details : any = await getBookDetail(bookId)
//             setBookDetail(details)
//         }
//     getDetails()
//     },[])
//   return (
//     <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
//       {/* Image section - larger for better visibility */}
//       <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
//         <img
//           src={bookDetail.imageUrl}
//           alt={bookDetail.book_name}
//           className="w-full h-full object-cover object-center"
//         />
//       </div>
      
//       {/* Content section */}
//       <div className="w-full flex flex-col items-start p-6 gap-3">
//         <h2 className="font-bold text-xl text-gray-800 w-full break-words">{bookDetail.book_name}</h2>
//         <h4 className="font-medium text-sm text-gray-600 w-full break-words">by {bookDetail.author_name}</h4>
//         <p className="text-sm text-gray-600 leading-relaxed w-full whitespace-pre-line">
//           {displayedDescription}
//         </p>
//         {isLongDescription && (
//           <Button
//             size="sm"
//             variant="outline"
//             className="w-fit text-xs mt-2 px-3"
//             onClick={() => setShowMore((prev) => !prev)}
//           >
//             {showMore ? "Show Less" : "Show More"}
//           </Button>
//         )}
//       </div>
//     </Card>
//   );
// }

// export default ReviewDisplay

// function BookDetailCard({ name, author, description, imageUrl }: {
//   name: string,
//   author: string,
//   description: string,
//   imageUrl: string
// }) {
//   const [showMore, setShowMore] = useState(false);
//   const maxDescriptionLength = 50;
//   const isLongDescription = description.length > maxDescriptionLength;
//   const displayedDescription = showMore || !isLongDescription
//     ? description
//     : description.slice(0, maxDescriptionLength) + "...";

//   return (
//     <Card className="w-full max-w-[250px] mx-auto shadow-md rounded-lg overflow-hidden border border-border bg-white dark:bg-card flex flex-col items-center p-0 justify-between">
//       {/* Image section */}
//       <div className="w-full h-36 bg-gray-100 flex items-center justify-center overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="w-full h-full object-contain object-center"
//         />
//       </div>
//       {/* Content section */}
//       <div className="w-full flex flex-col items-start p-3 gap-1 flex-1">
//         <h2 className="font-bold text-base text-primary w-full break-words whitespace-pre-line">{name}</h2>
//         <h4 className="font-medium text-xs text-muted-foreground w-full break-words whitespace-pre-line">by {author}</h4>
//         <p className="text-xs text-muted-foreground leading-tight w-full whitespace-pre-line">
//           {displayedDescription}
//         </p>
//         {isLongDescription && (
//           <Button
//             size="sm"
//             variant="outline"
//             className="w-fit text-xs mt-1 px-2"
//             onClick={() => setShowMore((prev) => !prev)}
//           >
//             {showMore ? "Show Less" : "Show More"}
//           </Button>
//         )}
//       </div>
//     </Card>
//   );
// }


const mockReviews = [
  { id: 1, user: "John Doe", rating: 5, comment: "Amazing book! Really changed my perspective on human history.", date: "2024-01-15" },
  { id: 2, user: "Jane Smith", rating: 4, comment: "Very insightful and well-written. Highly recommend to anyone interested in anthropology.", date: "2024-01-20" },
  { id: 3, user: "Mike Johnson", rating: 5, comment: "One of the best books I've read this year. Harari's writing is engaging and thought-provoking.", date: "2024-01-25" },
  { id: 4, user: "Sarah Wilson", rating: 4, comment: "Fascinating read about the evolution of human societies. Some parts were a bit dense but overall excellent.", date: "2024-02-01" },
  { id: 5, user: "Alex Brown", rating: 3, comment: "Good book but felt a bit repetitive in some sections. Still worth reading.", date: "2024-02-05" },
  { id: 6, user: "Emily Davis", rating: 5, comment: "Incredible insights into human civilization. This book should be required reading!", date: "2024-02-10" },
  { id: 7, user: "David Lee", rating: 4, comment: "Well-researched and engaging. Made me think about history in a completely new way.", date: "2024-02-15" },
  { id: 8, user: "Lisa Chen", rating: 5, comment: "Absolutely brilliant! Harari has a gift for making complex topics accessible.", date: "2024-02-20" },
  { id: 9, user: "Tom Anderson", rating: 4, comment: "Great book with interesting perspectives. Some chapters were more engaging than others.", date: "2024-02-25" },
  { id: 10, user: "Maria Garcia", rating: 5, comment: "A masterpiece! This book will stay with me for a long time.", date: "2024-03-01" }
]

const ReviewDisplay = ({ bookId } : {bookId : string}) => {
  const [bookDetail, setBookDetail] = useState({
    book_name: "Sapiens: A Brief History of Humankind",
    id: "1",
    userId: "user123",
    author_name: "Yuval Noah Harari",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human. One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?",
    reviews : []
  })

  useEffect(()=>{
    async function fetch(){
        const details : any = await getBookDetail(bookId)
        setBookDetail(details)
    }
    fetch()
  },[])
  return (
    <div className='w-full h-full bg-gray-50 '>
      <div className='px-16 py-14 flex gap-8 h-4/5'>
        {/* Left Half - Book Details */}
        <div className='w-1/2 flex flex-col items-center'>
          <BookDetailCard
            name={bookDetail.book_name}
            author={bookDetail.author_name}
            description={bookDetail.description}
            imageUrl={bookDetail.imageUrl}
          />
        </div>
        
        {/* Right Half - Reviews */}
        <div className='w-1/2 flex flex-col'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>Reviews By Readers</h2>
          <div className='flex-1 overflow-y-auto pr-4 space-y-4 max-h-[calc(100vh-200px)]'>
            {bookDetail.reviews.map((review) => (
                // @ts-ignore
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BookDetailCard({ name, author, description, imageUrl } : any) {
  const [showMore, setShowMore] = useState(false);
  const maxDescriptionLength = 200;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayedDescription = showMore || !isLongDescription
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
      {/* Image section - larger for better visibility */}
      <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      {/* Content section */}
      <div className="w-full flex flex-col items-start p-6 gap-3">
        <h2 className="font-bold text-xl text-gray-800 w-full break-words">{name}</h2>
        <h4 className="font-medium text-sm text-gray-600 w-full break-words">by {author}</h4>
        <p className="text-sm text-gray-600 leading-relaxed w-full whitespace-pre-line">
          {displayedDescription}
        </p>
        {isLongDescription && (
          <Button
            size="sm"
            variant="outline"
            className="w-fit text-xs mt-2 px-3"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )}
      </div>
    </Card>
  );
}

function ReviewCard({ review } :any) {
  const renderStars = (rating = 4) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <Card className="p-4 border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm text-gray-800">{review.user}</h4>
          <div className="flex">
            {renderStars(review.rating)}
          </div>
        </div>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
    </Card>
  );
}

export default ReviewDisplay