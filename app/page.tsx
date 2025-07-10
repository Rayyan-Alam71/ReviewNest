import React from 'react';
import { BookOpen, Users, Star, MessageCircle, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-w-full min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
          <div className="text-center">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-6 sm:mb-8 shadow-lg">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              ReviewNest
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Discover your next favorite read through authentic reviews from passionate readers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Link href={'/browse-books'}>Start Reading Reviews</Link>
              </button>
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white border-2 border-indigo-500 text-indigo-600 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <Link href={'/add-book'}>Add your First Book</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Why Choose ReviewNest ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Join a community of book lovers sharing honest, thoughtful reviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="group p-6 sm:p-8 md:p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-md">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Community Driven</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Connect with fellow readers and discover books through authentic community reviews and recommendations
              </p>
            </div>
            
            <div className="group p-6 sm:p-8 md:p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-md">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Quality Reviews</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Read detailed, thoughtful reviews that help you make informed decisions about your next read
              </p>
            </div>
            
            <div className="group p-6 sm:p-8 md:p-10 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-md">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Easy Discovery</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Find books across all genres with powerful search and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">How It Works</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Simple steps to join our reading community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Create Account</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                Sign up for free and join our community of passionate readers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Add Books</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                Share books you've read and add detailed descriptions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Write Reviews</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                Share your thoughts and read what others think about books
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Books Reviewed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">5K+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Active Readers</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">25K+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Reviews Written</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-6 sm:mb-8 shadow-lg">
              <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 px-4">
            Ready to discover your next great read?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of readers sharing their favorite books and honest reviews
          </p>
          <button className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link href={'/browse-books'}>Get Started Today</Link>
          </button>
        </div>
      </section>
    </div>
  );
}