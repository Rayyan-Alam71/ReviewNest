import React from  'react'
import ReviewDisplay from './ReviewDisplay';

const page = async ({params} : {params : Promise<{bookId : string}>}) => {
    
    const { bookId }  : {bookId : string} = await params
    return (
        <div className='max-w-screen'>
            <ReviewDisplay bookId={bookId}/>
        </div>
    )
}

export default page
