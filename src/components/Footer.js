import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative pb-6 pt-12 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-300 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gray-300 rounded-full -translate-x-40 translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-300 rounded-full translate-x-36 translate-y-36"></div>
      </div> */}

      {/* Finzy Logo/Brand */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-8 lg:mb-44">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-black">Finzy</span>
        </div>
      </div>

      <div className="container-fluid mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
          {/* Left Side - Navigation Links */}
          <div className="flex flex-col space-y-6 lg:space-y-8 mb-2 border-b-1 lg:border-b-0 pb-2 lg:pb-0 lg:mb-0">
            <nav className="flex flex-col items-center md:items-end space-y-4">
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Contact Us
              </a>
              <a href="#careers" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Careers
              </a>
              <a href="#imprint" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Imprint
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Center - Phone Images */}
          <div className="hidden md:flex items-center justify-center gap-3 absolute -bottom-[280px] left-1/2 -translate-x-1/2  w-[70vw] md:w-[65vw] lg:w-[60vw] xl:w-[50vw]">
            <div>
              <Image
                src="/images/phone 1.png"
                alt="Finzy App Screen 1"
                width={300}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
            <div>
              <Image
                src="/images/phone 2.png"
                alt="Finzy App Screen 2"
                width={300}
                height={400}
                className="drop-shadow-2xl relative -top-14"
              />
            </div>
            <div>
              <Image
                src="/images/phone 3.png"
                alt="Finzy App Screen 3"
                width={300}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <nav className="flex flex-col space-y-4 text-right">
              <a href="#instagram" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Instagram
              </a>
              <a href="#linkedin" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                LinkedIn
              </a>
              <a href="#facebook" className="text-gray-700 hover:text-black transition-colors text-lg font-medium">
                Facebook
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}