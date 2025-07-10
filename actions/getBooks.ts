'use server'

import { prisma } from "@/db/prisma"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { unstable_noStore } from "next/cache"

export const getBooks = async (searchQuery : string | undefined) =>{
    unstable_noStore();
    // @ts-ignore
    
    try{
        console.log(searchQuery)
        if(!searchQuery || searchQuery === ''){
            const books = await prisma.book.findMany({
                orderBy:{
                    createdAt : 'desc'
                }
            })
            return books;
        }
        else{
            // return the books that matches to the searchQuery
            const requestedBooks = await prisma.book.findMany({
                where : {
                    OR : [
                        {
                            book_name : {
                                contains : `%${searchQuery}%`,
                                mode : 'insensitive'
                            }
                        },
                        {
                           description :{
                                contains : `%${searchQuery}%`,
                                mode : 'insensitive'
                           }
                        },
                        {
                            author_name : {
                                contains  : `%${searchQuery}%`,
                                mode : 'insensitive'
                            }
                        } 
                    ]
                },
                orderBy : {
                    createdAt : 'desc'
                }
            })
            return requestedBooks;
        }
        // const books = await prisma.book.findMany({
        //     orderBy : {
        //         createdAt  :'desc'
        //     }
        // })
        // return books;
    }catch(e){
        console.log("Error  occurred in getBooks : "+ e)
        throw new Error("Error while retrieving books")
    }
}

export const getMyBooks = async () =>{
    unstable_noStore();
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user) throw new Error("User not authenticated")
    
    try{
        const myBooks = await prisma.book.findMany({
            where  : {
                // @ts-ignore
                userId : session.user.id
            },
            orderBy:{
                createdAt : 'desc'
            }
        })
        return myBooks;
    }catch(e){
        throw new Error("Error while retrieving my books.")
    }
}
export async function getBookDetail(bookId : string){
    unstable_noStore();
    // @ts-ignore
    const session = await getServerSession(authOptions)
    if(!session?.user) throw new Error("User not authenticated")
    
    try{
        const details = await prisma.book.findUnique({
            where : {
                id : bookId
            },
            include : {
                reviews : {
                    orderBy : {
                        createdAt : "desc",
                    }
                }
            }
        })
        return details
    }catch(e){
        console.log("Error ocurred")
        throw new Error("Error occurred while retreiving reviews")
    }
}