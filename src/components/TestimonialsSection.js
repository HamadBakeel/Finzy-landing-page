"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: "Astuti Jennatun",
            role: "(Freelance)",
            image: "/images/person 1.jpg",
            testimonial: "This App Makes Managing My Daily Finances So Much Easier. All My Expenses Are Automatically Recorded, And I Can View Detailed Reports Anytime. Super Practical And Helpful!"
        },
        {
            id: 2,
            name: "Astuti Jennatun",
            role: "(Freelance)",
            image: "/images/person 2.jpg",
            testimonial: "This App Makes Managing My Daily Finances So Much Easier. All My Expenses Are Automatically Recorded, And I Can View Detailed Reports Anytime. Super Practical And Helpful!"
        },
        {
            id: 3,
            name: "Astuti Jennatun",
            role: "(Freelance)",
            image: "/images/person 3.jpg",
            testimonial: "This App Makes Managing My Daily Finances So Much Easier. All My Expenses Are Automatically Recorded, And I Can View Detailed Reports Anytime. Super Practical And Helpful!"
        }
    ];

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="pt-0 pb-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-center md:justify-between items-start text-center md:text-start mb-2 md:mb-16">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-medium text-black mb-4 leading-tight">
                            What Our Clients Say<br />
                            About Us
                        </h2>
                    </div>
                    <div className="hidden md:block text-end">
                        <p className="text-gray-500 text-sm max-w-md mb-6 leading-relaxed">
                            With decades of experience and a commitment to<br />
                            personalized service, we ensure a seamless journey
                        </p>
                        <button className="bg-[#6366b9] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#5856b3] transition-colors">
                            See More
                        </button>
                    </div>
                </div>

                {/* Desktop Grid - Hidden on mobile/tablet */}
                <div className="hidden md:grid grid-cols-3 gap-0">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                            onMouseEnter={() => setHoveredCard(testimonial.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Background Image */}
                            <Image
                                src={testimonial.image}
                                alt={`${testimonial.name} testimonial`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="33vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                            {/* Default Content */}
                            <div className={`absolute bottom-6 left-6 text-white transition-opacity duration-300 ${hoveredCard === testimonial.id ? 'opacity-0' : 'opacity-100'
                                }`}>
                                <h3 className="text-lg font-medium">{testimonial.name}</h3>
                                <p className="text-sm opacity-80">{testimonial.role}</p>
                            </div>

                            {/* Hover Content */}
                            <div className={`absolute inset-0 bg-[#6366b9] p-8 flex flex-col justify-between transition-opacity duration-300 ${hoveredCard === testimonial.id ? 'opacity-100' : 'opacity-0'
                                }`}>
                                <p className="text-white text-lg leading-relaxed mb-6">
                                    "{testimonial.testimonial}"
                                </p>
                                <div className="text-white">
                                    <h3 className="font-medium">{testimonial.name}</h3>
                                    <p className="text-sm opacity-80">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 relative aspect-[3/4] overflow-hidden"
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={testimonial.image}
                                        alt={`${testimonial.name} testimonial`}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 bg-[#6366b9]/80 p-6 sm:p-8 flex flex-col justify-between">
                                        <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
                                            "{testimonial.testimonial}"
                                        </p>
                                        <div className="text-white">
                                            <h3 className="font-medium text-lg">{testimonial.name}</h3>
                                            <p className="text-sm opacity-80">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center mt-6">
                        {/* Previous Arrow */}
                        <button
                            onClick={prevSlide}
                            className="bg-white/20 backdrop-blur-sm text-gray-600 p-2 rounded-full hover:bg-white/30 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#6366b9]' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Arrow */}
                        <button
                            onClick={nextSlide}
                            className="bg-white/20 backdrop-blur-sm text-gray-600 p-2 rounded-full hover:bg-white/30 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}