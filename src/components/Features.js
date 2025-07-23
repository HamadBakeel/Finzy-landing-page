"use client"
import Image from 'next/image';
import { useState } from 'react';
import { TbCreditCardPay, TbCreditCardRefund } from "react-icons/tb";

export default function Features() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalance = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <section className="pb-20 pt- px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start">
        {/* Personalize Card Section */}
        <div className="pt-8 bg-gradient-to-br from-white to-[#f2f2f2]">
          <div className="px-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
              Personalize And Craft Your Card To Make It Unique
            </h2>
            <p className="text-gray-500 mb-6 tracking-tight leading-4.5">
              There are no fees charged when you pay with PayPal. You will only be charged when you sell an item or request payment.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/section 3 cards.png"
              alt="Personalized Finzy credit cards"
              width={500}
              height={300}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* Customize Financial Insights Section */}
        <div className="px-10 pt-8 text-center md:text-start">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
              Customize Your Financial Insights And Goals
            </h2>
            <p className="text-gray-500 mb-6 tracking-tight leading-4.5">
              There are no fees charged when you pay with PayPal. You will only be charged when you sell an item or request payment.
            </p>
          </div>

          {/* Balance Card */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white relative max-w-md mx-auto mb-6 md:mb-0">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-100 text-sm md:text-lg text-start mb-2">Available on card</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-5xl">
                    {isBalanceVisible ? '$90,570.10' : '••••••••'}
                  </span>
                  <button
                    onClick={toggleBalance}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {isBalanceVisible ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Finzy Logo */}
              <div className="bg-white rounded-full p-3">
                <Image src="/finzy-logo.svg" alt="Finzy Logo" width={24} height={24} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 absolute -bottom-5 right-1/2 translate-x-1/2 w-full justify-between px-6">
              <button className="bg-[#7a7cc2] hover:bg-indigo-700 text-white w-[45%] py-3 rounded-full flex justify-center gap-2 transition-colors">
                <TbCreditCardPay size={25} />
                Top Up
              </button>
              <button className="bg-[#7a7cc2] hover:bg-indigo-700 text-white w-[45%] py-3 rounded-full flex justify-center gap-2 transition-colors">
                <TbCreditCardRefund size={25} />
                Pay
              </button>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="px-10 pt-8 text-center md:text-start">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
              Personalize And Craft Your Card To Make It Unique
            </h2>
            <p className="text-gray-500 tracking-tight leading-4.5">
              There are no fees charged when you pay with PayPal. You will only be charged when you sell an item or request payment.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/section 3 graph.png"
              alt="Financial analytics and insights"
              width={500}
              height={300}
              className="object-contain mx-auto"
            />
          </div>
        </div>

        {/* Global Transfers Section */}
        <div className="pt-8 bg-gradient-to-br from-[#f2f2f2] to-white">
          <div className="px-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
              Free-Of-Charge Transfers Everywhere The World
            </h2>
            <p className="text-gray-500 tracking-tight leading-4.5">
              There are no fees charged when you pay with PayPal. You will only be charged when you sell an item or request payment.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/section 3 map.png"
              alt="Global money transfers map"
              width={500}
              height={300}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}