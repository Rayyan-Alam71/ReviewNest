import Image from 'next/image'
import React from 'react'
import noBookImage from "../public/error-illustration-1.svg"
const NoBookFound = () => {
  return (
    <div className='h-full w-full '>
      <Image
        src={noBookImage}
        alt= "no book found image"
        width={100}
        height={100}
      />
    </div>
  )
}

export default NoBookFound
