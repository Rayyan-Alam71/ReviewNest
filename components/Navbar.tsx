'use client'
import { Button } from "@/components/ui/button"
import { BookOpen, LogOut } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
// export default function Navbar(){
//     const session =  useSession()
//     return(
//         <div className="container mx-auto w-3/4">
//             <div className="w-full flex justify-between  items-center mx-8 px-4 py-4 border-b-2 border-gray-800">
//                 <div className="text-2xl font-medium text-gray-950 cursor-pointer">
//                     {/* logo */}
//                     <Link href={"/"}>Review Book</Link>
//                 </div>
//                 {session?.data?.user && 
//                     <div className="">
//                         {/* browse books and add books */}
//                         <Button asChild variant={"link"}><Link href={"/browse-books"}> Browse Books</Link></Button>
//                         <Button asChild variant={"link"}><Link href={"/my-books"}>My Books</Link></Button>
//                     </div>    
//                 }
//                 <div>
//                     {/* buttons */}
//                     {
//                         session.data?.user ? <Button className="flex items-center gap-2 justify-center cursor-pointer text-md" variant="default" onClick={()=>{
//                             signOut()
//                         }}><LogOut className="h-4 w-5 "/>{session.data.user.name}</Button>: 
//                         <Button onClick={()=>signIn()} className="cursor-pointer text-md">
//                             Sign In
//                         </Button> 
//                     }
                    
//                 </div>
//             </div>
//         </div>
//     )
// }


export function NavBar(){
    const session = useSession()
    return(
        <nav className="sticky top-0 z-50 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto w-3/4">
                <div className="w-full flex justify-between items-center mx-8 px-4 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                            <a href="/" className="text-2xl font-bold text-[#1e293b] cursor-pointer transition-all duration-200 ">
                                ReviewNest
                            </a>
                        </div>
                    
                    {session.data?.user &&                     
                        <div className="flex items-center space-x-2">
                            <a href="/browse-books" className="text-neutral-800 hover:text-[#1e293b] transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-purple-400 ">
                                Browse Books
                            </a>
                            <a href="/my-books" className="text-neutral-800 hover:text-[#1e293b] transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-purple-400">
                                My Books
                            </a>
                        </div>
                    }
                    
                    <div>
                        {
                            session.data?.user ? 
                             <DropdownMenuDemo username={session?.data?.user?.name!} imageUrl={session.data.user.image!}/>
                                
                                :  
                                <>                        
                               
                                <button 
                                    onClick={()=>signIn()} 
                                    className="cursor-pointer text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-5 py-2.5 font-medium"
                                >
                                    Sign In
                                </button>        
                                </>             
                        }                                    
                    </div>
                </div>
            </div>
        </nav>
    )
}


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

function DropdownMenuDemo({username, imageUrl} : {username : string , imageUrl : string}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full w-8 h-8">
            <AvatarIcon imageUrl={imageUrl}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer" onClick={()=>signOut()}>
          <LogOut/> Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function AvatarIcon({imageUrl} : {imageUrl : string}){
    return (
        <Avatar>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}