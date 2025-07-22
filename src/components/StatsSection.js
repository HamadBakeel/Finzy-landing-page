import { CiUser } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

export default function StatsSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">
          <div className="lg:max-w-lg mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-medium text-black mb-4 leading-tight">
              Save Time By Having<br />
              In One Platform
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-end">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              With decades of experience and a commitment to personalized service, we ensure a seamless journey.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm hover:bg-indigo-700 transition-colors">
              See More
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Users Stat */}
          <div className="text-center px-8 py-6 md:py-0 lg:px-12 border-r-0 md:border-r border-gray-300 border-b md:border-b-0">
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <CiUser className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-gray-600 font-medium">Users</span>
            </div>
            <div className="text-5xl font- text-black mb-2 md:mb-4">2,500</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec maximus ac dignissim.
            </p>
          </div>

          {/* Impact Stat */}
          <div className="text-center px-8 py-6 md:py-0 lg:px-12 border-r-0 md:border-r border-gray-300 border-b md:border-b-0">
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <PiHandCoins className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-gray-600 font-medium">Impact</span>
            </div>
            <div className="text-5xl font- text-black mb-2 md:mb-4">92%</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec maximus ac dignissim.
            </p>
          </div>

          {/* Experience Stat */}
          <div className="text-center px-8 py-6 md:py-0 lg:px-12">
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <SlBadge className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-gray-600 font-medium">Experience</span>
            </div>
            <div className="text-5xl font- text-black mb-2 md:mb-4">7 years</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec maximus ac dignissim.
            </p>
          </div>
        </div>

        {/* Header Section 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-20 pt-26">
          <div className="lg:max-w-lg mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-medium text-black mb-4 leading-tight">
              Save Time By Having<br />
              In One Platform
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-end">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              With decades of experience and a commitment to personalized service, we ensure a seamless journey.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm hover:bg-indigo-700 transition-colors">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}