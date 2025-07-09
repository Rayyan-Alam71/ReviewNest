// import Image from "next/image";
// import React from "react"
// export default function Home() {
//   return (
//     <div className="min-w-[100vw] min-h-[calc(100vh-5rem)]">
      
//     </div>
//   );
// }
import React from 'react';
import { BookOpen, Users, Star, MessageCircle, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-w-[100vw] min-h-[calc(100vh-5rem)] bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-8 shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-[#1c2a41] mb-8">
              Review Book
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover your next favorite read through authentic reviews from passionate readers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Reading Reviews
              </button>
              <button className="px-10 py-5 bg-white border-2 border-indigo-500 text-indigo-600 rounded-xl font-semibold text-lg hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <Link href={'/add-book'}>Add your First Book</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Why Choose Review Book?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a community of book lovers sharing honest, thoughtful reviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Connect with fellow readers and discover books through authentic community reviews and recommendations
              </p>
            </div>
            
            <div className="group p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quality Reviews</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Read detailed, thoughtful reviews that help you make informed decisions about your next read
              </p>
            </div>
            
            <div className="group p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Easy Discovery</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Find books across all genres with powerful search and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our reading community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create Account</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sign up for free and join our community of passionate readers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add Books</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Share books you've read and add detailed descriptions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Write Reviews</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Share your thoughts and read what others think about books
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
              <div className="text-gray-600 text-lg font-medium">Books Reviewed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">5K+</div>
              <div className="text-gray-600 text-lg font-medium">Active Readers</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">25K+</div>
              <div className="text-gray-600 text-lg font-medium">Reviews Written</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-8 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Ready to discover your next great read?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers sharing their favorite books and honest reviews
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}