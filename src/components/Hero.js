"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-white overflow-hidden isolate">
      {/* Navigation */}
      <header className="mx-auto max-w-7xl absolute w-[calc(100%-1rem)] top-2 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-3 flex justify-between items-center rounded-full">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/finzy-logo.svg" alt="Finzy Logo" width={24} height={24} />
          </div>
          <span className="text-lg font-medium">Finzy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-gray-300">Personal</Link>
          <Link href="#" className="text-white hover:text-gray-300">Business</Link>
          <Link href="#" className="text-white hover:text-gray-300">Partner</Link>
          <Link href="#" className="text-white hover:text-gray-300">About Us</Link>
        </nav>


        <div className="flex items-center gap-2">
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
            Sign In
          </button>
          {/* Mobile Burger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="bg-black text-white rounded-2xl p-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-white hover:text-gray-300 py-2 border-b border-gray-700 last:border-b-0 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Personal
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 py-2 border-b border-gray-700 last:border-b-0 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 py-2 border-b border-gray-700 last:border-b-0 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 py-2 border-b border-gray-700 last:border-b-0 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl h-screen mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font- mb-4 tracking-tight">
            All Financial Under<br />Control With Your Hand
          </h1>
          <p className="text-sm text-black max-w-4xl mx-auto">
            Manage your money anywhere with our mobile app. Banking on-the-go has never been easier with our mobile
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button className="bg-white text-black border border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition shadow-sm">
              Get Started
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition shadow-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Phone Images */}
        <div className="relative h-[500px] max-w-4xl mx-auto">
          {/* Left phone - dark UI with balance */}
          <div className="phone-container absolute -right-5 sm:right-initial sm:left-[calc(50%+10px)] bottom-[60px] sm:bottom-[85px] transform  z-20 w-[300px]">
            <Image
              src="/images/hero phone 2.png"
              alt="Mobile banking app showing balance"
              width={300}
              height={600}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          {/* Right phone - activity screen */}
          <div className="phone-container absolute -left-5 md:left-[initial] sm:right-[calc(50%+10px)] bottom-[60px] sm:bottom-[85px] transform  z-20 w-[300px]">
            <Image
              src="/images/hero phone 1.png"
              alt="Mobile banking app showing activities"
              width={300}
              height={600}
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute w-[100vh] h-[100vh] bg-[#fdfdfd] rounded-full -z-0 left-1/2 -translate-x-1/2 bottom-[-40vh] shadow-[0_0_110px_133px_#f6f6f6]" />
      <div className="absolute w-[135vh] h-[135vh] bg-[#fdfdfd] rounded-full -z-[1] left-1/2 -translate-x-1/2 bottom-[-55vh] shadow-[0_0_110px_133px_#f0f0f0]" />
    </div>
  );
}