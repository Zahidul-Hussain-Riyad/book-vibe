import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden relative border border-slate-700/50">
        
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ✨ Discover Your Next Great Read
            </span>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Books to freshen up <br className="hidden sm:inline" /> 
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                your bookshelf
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore our curated selection of top-rated books. Dive into new worlds, learn fresh ideas, and enrich your personal library today.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-emerald-500/25 cursor-pointer">
                Explore Genres
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm lg:max-w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
                <Image
                  src={bannerImage}
                  alt="Book Vibe Banner"
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 ease-out"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;