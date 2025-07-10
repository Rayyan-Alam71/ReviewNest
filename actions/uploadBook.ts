"use server"

import { formSchema } from "@/app/add-book/AddBook";
import { prisma } from "@/db/prisma";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

import {z} from 'zod';


type BookData = z.infer<typeof formSchema>

export async function uploadBook(values : any){
    // save data into the db

    // @ts-ignore
    const session = await getServerSession(authOptions);
    if(!session?.user) throw new Error("User not authenticated")

    const { bookname, description, author} : BookData = values
    try{
        const res = await prisma.book.create({
            data : {
                // @ts-ignore
                userId: session.user.id,
                book_name : bookname,
                description : description,
                author_name : author
            }
        })
        if(res) console.log("Book uploaded successfully")
    }catch(e){
        console.log(e)
        throw new Error("Error while updating the data")
    }
}