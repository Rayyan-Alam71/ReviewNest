"use client"
 
import { useForm } from "react-hook-form"
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { uploadBook } from "@/actions/uploadBook"
import { useRouter } from "next/navigation"

export const formSchema = z.object({
  bookname: z.string().min(2, {
    message: "Book name should be atleast 2 chars.",
  }),
  description : z.string().min(10, {
    message : "Description should be atleast 10 chars long."
  }),
  author : z.string().min(2, {
    message: "Author is required"
  })
})

const AddBook = () => {
  const router = useRouter()
  const [loading , setLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<String | null>("")

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookname: "",
      description : "",
      author : "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅This will be type-safe and validated.

    // upload the image to s3 bucket, and add the url in the db
    setLoading(true)
    await uploadBook(values)
    router.push('/browse-books')
    setLoading(false)
  }

  return (
    <div className='max-w-full w-2/3 grid md:grid-cols-2 grid-cols-1 gap-4'>
        <div className="w-4/5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 [&_*]:text-[1rem] flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="bookname"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Book Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter book's name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Author Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter author name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea  placeholder="Write about the book." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={loading} className="cursor-pointer text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium">{loading ? (<p>Submitting...</p>) : (<p>Submit</p>)}</Button>
                </form>
            </Form>
        </div>
        <div className="flex justify-center items-center w-full h-full">
            <Imageupload/>
        </div>
    </div>
  )
}

export default AddBook

function Imageupload(){
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
    // run logic to upload cover page
  };
 
  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}