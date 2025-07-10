"use client"
 
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
 
const formSchema = z.object({
  search: z.string().min(2).max(50),
})

export default function SearchBar({searchQuery } : {searchQuery : string}) {
    const router = useRouter()
  
    const [ searchFor, setSearchFor ] = useState("")
  // 2. Define a submit handler.
    function onSubmit() {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(searchFor)
      if(!searchFor || searchFor === '' ){
          router.push('/browse-books')
          return
      }else{
          router.push(`/browse-books?search=${searchFor}`)
          return
      }

    }
    function clearFilter(){
      console.log(searchFor)
      setSearchFor("")
      router.push('/browse-books')
    }
   return (
      <div className="flex items-center flex-col-reverse md:flex-row  gap-6 justify-between px-10 pb-4 sm:pb-6 pt-4 sm:pt-6">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2">
          
          <Input value={searchFor} onChange={(e)=>setSearchFor(e.target.value)} placeholder="Search using book/author name" className="w-full px-4 py-4"/>    

          <Button type="submit" size='sm' className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium" onClick={onSubmit}>Search</Button>
          {
            (searchQuery && searchQuery !== "") &&
            <Button type="submit" size='sm' className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium" onClick={clearFilter}>Clear Filter</Button>

          }
        </div>

        <Button size="sm" className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 font-medium">
          <Link href={'/add-book'}>Add Book</Link>
        </Button>
      </div>
  )

}