'use client'
import { Button } from "@/components/ui/button"
import { BookOpen, LogOut } from "lucide-react"
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


export function NavBar(){
    const session = useSession()
    return(
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 shadow-xl border-b border-gray-700/50">
            <div className="container mx-auto w-3/4">
                <div className="w-full flex justify-between items-center mx-8 px-4 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl shadow-lg">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-emerald-300 hover:to-cyan-300 transition-all duration-200">
                            Review Book
                        </a>
                    </div>
                    
                    {session.data?.user &&                     
                        <div className="flex items-center space-x-1">
                            <a href="/browse-books" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50">
                                Browse Books
                            </a>
                            <a href="/my-books" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50">
                                My Books
                            </a>
                        </div>
                    }
                    
                    <div>
                        {
                            session.data?.user ? 
                                <button 
                                    className="flex items-center gap-2 justify-center cursor-pointer text-sm bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-lg transition-all duration-200 rounded-lg px-5 py-2.5 font-medium" 
                                    onClick={()=>signOut()}
                                >
                                    <LogOut className="h-4 w-4"/>
                                    {session.data?.user?.name}
                                </button>
                                :                          
                                <button 
                                    onClick={()=>signIn()} 
                                    className="cursor-pointer text-sm bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-lg transition-all duration-200 rounded-lg px-5 py-2.5 font-medium"
                                >
                                    Sign In
                                </button>                     
                        }                                    
                    </div>
                </div>
            </div>
        </nav>
    )
}