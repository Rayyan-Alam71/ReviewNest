'use client'
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
export default function Navbar(){
    const session =  useSession()
    return(
        <div className="container mx-auto w-3/4">
            <div className="w-full flex justify-between  items-center mx-8 px-4 py-4 border-b-2 border-gray-800">
                <div className="text-2xl font-medium text-gray-950 cursor-pointer">
                    {/* logo */}
                    <Link href={"/"}>Review Book</Link>
                </div>
                {session?.data?.user && 
                    <div className="">
                        {/* browse books and add books */}
                        <Button asChild variant={"link"}><Link href={"/browse-books"}> Browse Books</Link></Button>
                        <Button asChild variant={"link"}><Link href={"/my-books"}>My Books</Link></Button>
                    </div>    
                }
                <div>
                    {/* buttons */}
                    {
                        session.data?.user ? <Button className="flex items-center gap-2 justify-center cursor-pointer text-md" variant="default" onClick={()=>{
                            signOut()
                        }}><LogOut className="h-4 w-5 "/>{session.data.user.name}</Button>: 
                        <Button onClick={()=>signIn()} className="cursor-pointer text-md">
                            Sign In
                        </Button> 
                    }
                    
                </div>
            </div>
        </div>
    )
}