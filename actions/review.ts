'use server'
import { prisma } from "@/db/prisma"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export const addReview = async (bookId : string, content : string) =>{
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user) throw new Error("User not authenticated")
    
    try{
        const res = await prisma.review.create({
            data : {
                // @ts-ignore
                userId : session.user.id,
                bookId : bookId,
                content : content,
                creatorName : session?.user?.name
            },
            include : {
                book : true,
                user : true
            }
        })
        console.log(res)
        return res;
    }catch(e){
        console.log(e)
        // do not forget to return false to detect, if some error occurred here. Else the frontend will keep showing "Adding..." until the page is hard refreshed
        throw new Error("Error while adding review")
    }
}