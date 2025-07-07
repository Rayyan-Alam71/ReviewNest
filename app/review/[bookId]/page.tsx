import React from  'react'
import ReviewDisplay from './ReviewDisplay';

const page = async ({params} : {params : Promise<{bookId : string}>}) => {
    
    const { bookId }  : {bookId : string} = await params
    // const bookDetail = await getBookDetail(bookId); 
    return (
        <div className='max-w-screen min-h-[calc(100vh-5rem)] overflow-y-auto'>
            <ReviewDisplay bookId={bookId}/>
        </div>
    )
}

export default page
