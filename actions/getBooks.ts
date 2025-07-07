'use server'

import { prisma } from "@/db/prisma"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export const getBooks = async () =>{
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user) throw new Error("User not authenticated")
    
    try{
        const books = await prisma.book.findMany({})
        return books;
    }catch(e){
        throw new Error("Error while retrieving books")
    }
}

export const getMyBooks = async () =>{
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user) throw new Error("User not authenticated")
    
    try{
        const myBooks = await prisma.book.findMany({
            where  : {
                // @ts-ignore
                userId : session.user.id
            }
        })
        return myBooks;
    }catch(e){
        throw new Error("Error while retrieving my books.")
    }
}