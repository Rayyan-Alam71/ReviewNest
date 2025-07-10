'use client'
import { Button } from "@/components/ui/button"
import { BookOpen, LogOut, Menu, X } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useState } from "react"

export default function NavBar(){
    const session = useSession()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return(
        <nav className="sticky top-0 z-50 bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100">
            <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-full flex justify-between items-center py-3 sm:py-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                            <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <a href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e293b] cursor-pointer transition-all duration-200">
                            ReviewNest
                        </a>
                    </div>
                    
                    {/* Desktop Navigation Links */}
                    {session.data?.user && (
                        <div className="hidden md:flex items-center space-x-2">
                            <a href="/browse-books" className="text-sm lg:text-base text-neutral-800 hover:text-[#1e293b] transition-colors duration-200 font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-purple-400">
                                Browse Books
                            </a>
                            <a href="/my-books" className="text-sm lg:text-base text-neutral-800 hover:text-[#1e293b] transition-colors duration-200 font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-purple-400">
                                My Books
                            </a>
                        </div>
                    )}
                    
                    {/* Desktop Auth Section */}
                    <div className="hidden md:flex items-center">
                        {session.data?.user ? 
                            <DropdownMenuDemo username={session?.data?.user?.name!} imageUrl={session.data.user.image!}/>
                            :  
                            <button 
                                onClick={()=>signIn()} 
                                className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 font-medium"
                            >
                                Sign In
                            </button>        
                        }                                    
                    </div>

                    {/* Mobile Menu Button - Only show if user is logged in */}
                    <div className="md:hidden flex items-center space-x-2">
                        {session.data?.user ? (
                            <>
                                <DropdownMenuDemo username={session?.data?.user?.name!} imageUrl={session.data.user.image!}/>
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-5 h-5 text-neutral-800" />
                                    ) : (
                                        <Menu className="w-5 h-5 text-neutral-800" />
                                    )}
                                </button>
                            </>
                        ) : (
                            <button 
                                onClick={()=>signIn()} 
                                className="cursor-pointer text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-200 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 font-medium"
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu - Only show if user is logged in */}
                {isMobileMenuOpen && session.data?.user && (
                    <div className="md:hidden border-t border-purple-200 bg-white/80 backdrop-blur-sm">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a 
                                href="/browse-books" 
                                className="block px-3 py-2 text-sm font-medium text-neutral-800 hover:text-[#1e293b] hover:bg-purple-100 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Browse Books
                            </a>
                            <a 
                                href="/my-books" 
                                className="block px-3 py-2 text-sm font-medium text-neutral-800 hover:text-[#1e293b] hover:bg-purple-100 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                My Books
                            </a>
                        </div>
                    </div>
                )}
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
        <Button className="rounded-full w-7 h-7 sm:w-8 sm:h-8">
            <AvatarIcon imageUrl={imageUrl}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 sm:w-56" align="start">
        <DropdownMenuLabel className="text-sm sm:text-base">{username}</DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer text-sm sm:text-base" onClick={()=>signOut()}>
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5 mr-2"/> Log out
          <DropdownMenuShortcut className="text-xs sm:text-sm">⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function AvatarIcon({imageUrl} : {imageUrl : string}){
    return (
        <Avatar className="w-6 h-6 sm:w-7 sm:h-7">
            <AvatarImage src={imageUrl} />
            <AvatarFallback className="text-xs sm:text-sm text-indigo-500">CN</AvatarFallback>
        </Avatar>
    )
}