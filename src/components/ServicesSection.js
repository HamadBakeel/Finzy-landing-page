"use client"
import {
    TbChartLine,
    TbUsers,
    TbRefresh,
    TbShield,
    TbTarget,
    TbTrendingUp
} from "react-icons/tb";

export default function ServicesSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Customized Strategies */}
                    <div className="p-6 border-gray-200 border-b-[1.5px] md:border-r-[1.5px] lg:border-r-[1.5px] lg:border-b-[1.5px]">
                        <h2 className="text-4xl sm:text-5xl font-medium text-black mb-4 leading-12 tracking-tight">
                            We support<br />
                            your every<br />
                            step
                        </h2>
                        <p className="text-gray-600 text-sm max-w-md mx-auto leading-tight">
                            Find more than just a house, find your sanctuary. Explore our curated listings.
                        </p>
                    </div>

                    {/* Proven Results */}
                    <div className="text-center bg-gradient-to-b from-white to-[#fafafa] px-10 py-14 border-gray-200 border-b-[1.5px] lg:border-r-[1.5px] lg:border-b-[1.5px]">
                        <div className="w-16 h-16 bg-[#6366b9] rounded-full flex items-center justify-center mx-auto mb-6">
                            <TbTrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-black mb-4">
                            Proven Results
                        </h3>
                        <p className="text-gray-500 text-sm leading-tight">
                            We have a track record of delivering measurable results, helping businesses grow their online presence.
                        </p>
                    </div>

                    {/* Transparent Reporting */}
                    <div className="text-center px-10 py-14 border-gray-200 border-b-[1.5px] md:border-r-[1.5px] lg:border-r-0 lg:border-b-[1.5px]">
                        <div className="w-16 h-16 bg-[#6366b9] rounded-full flex items-center justify-center mx-auto mb-6">
                            <TbChartLine className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-black mb-4">
                            Transparent Reporting
                        </h3>
                        <p className="text-gray-500 text-sm leading-tight">
                            We believe in transparency and keep you informed with regular reports and insights into your campaign performance.
                        </p>
                    </div>

                    {/* Client-Centric Approach */}
                    <div className="text-center bg-gradient-to-t from-white to-[#fafafa] px-10 py-14 border-gray-200 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px]">
                        <div className="w-16 h-16 bg-[#6366b9] rounded-full flex items-center justify-center mx-auto mb-6">
                            <TbUsers className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-black mb-4">
                            Client-Centric Approach
                        </h3>
                        <p className="text-gray-500 text-sm leading-tight">
                            Your success is priority. We work closely with you to understand your business and deliver solutions real impact.
                        </p>
                    </div>

                    {/* Expert Team */}
                    <div className="text-center px-10 py-14 border-gray-200 border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] lg:border-r-[1.5px]">
                        <div className="w-16 h-16 bg-[#6366b9] rounded-full flex items-center justify-center mx-auto mb-6">
                            <TbShield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-black mb-4">
                            Our team of experts leverages
                        </h3>
                        <p className="text-gray-500 text-sm leading-tight">
                            Our team of experts leverages the latest tools and techniques to deliver results that matter and techniques to deliver.
                        </p>
                    </div>

                    {/* Continuous Optimization */}
                    <div className="text-center bg-gradient-to-t from-white to-[#fafafa] px-10 py-14">
                        <div className="w-16 h-16 bg-[#6366b9] rounded-full flex items-center justify-center mx-auto mb-6">
                            <TbRefresh className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-black mb-4">
                            Continuous Optimization
                        </h3>
                        <p className="text-gray-500 text-sm leading-tight">
                            We continuously monitor and optimize your campaigns to ensure maximum performance and return on investment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}