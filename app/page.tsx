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

export default function Home() {
  return (
    <div className="min-w-[100vw] min-h-[calc(100vh-5rem)] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl mb-6 shadow-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Review Book
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your next favorite read through authentic reviews from passionate readers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200">
                Start Reading Reviews
              </button>
              <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-200">
                Add Your First Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Review Book?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join a community of book lovers sharing honest, thoughtful reviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Connect with fellow readers and discover books through authentic community reviews and recommendations
              </p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Reviews</h3>
              <p className="text-gray-300 leading-relaxed">
                Read detailed, thoughtful reviews that help you make informed decisions about your next read
              </p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Easy Discovery</h3>
              <p className="text-gray-300 leading-relaxed">
                Find books across all genres with powerful search and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to join our reading community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Create Account</h3>
              <p className="text-gray-300">
                Sign up for free and join our community of passionate readers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Add Books</h3>
              <p className="text-gray-300">
                Share books you've read and add detailed descriptions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Write Reviews</h3>
              <p className="text-gray-300">
                Share your thoughts and read what others think about books
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">10K+</div>
              <div className="text-gray-300">Books Reviewed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5K+</div>
              <div className="text-gray-300">Active Readers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">25K+</div>
              <div className="text-gray-300">Reviews Written</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl mb-6 shadow-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to discover your next great read?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of readers sharing their favorite books and honest reviews
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}