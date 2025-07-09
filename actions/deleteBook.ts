'use server'

import { prisma } from "@/db/prisma"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { unstable_noStore } from "next/cache";

export async function deleteBook(bookId : string ){
    unstable_noStore();
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user){
        throw new Error("User not authenticated")
    }
    try{
        console.log(session.user + " "+ bookId)
        const res = await prisma.book.delete({
            where : {
                id : bookId,
                // @ts-ignore
                userId : session.user.id
            }
        })
        console.log("Deleted successfully")
    }catch(e){
        console.log("from delete book "+e)
        throw new Error("Error while deleting the book")
    }
}