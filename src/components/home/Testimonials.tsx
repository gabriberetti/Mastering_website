"use client";

import { useState } from 'react';
import Image from 'next/image';

type TestimonialType = {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    image: string;
};

const testimonials: TestimonialType[] = [
    {
        id: 1,
        name: "Alex Weber",
        role: "Mastering",
        comment: "Incredible attention to detail. The master came back with perfect dynamics and punch - exactly what my techno track needed.",
        rating: 5,
        image: "/testimonials/person1.jpg"
    },
    {
        id: 2,
        name: "Maria Rodriguez",
        role: "Mixing",
        comment: "The mix was transformed completely. Every element sits perfectly in its space now. Will definitely come back for more projects!",
        rating: 5,
        image: "/testimonials/person2.jpg"
    },
    {
        id: 3,
        name: "Tom Chen",
        role: "Masterclass",
        comment: "The production masterclass was eye-opening. Learned so many new techniques and approaches to sound design.",
        rating: 5,
        image: "/testimonials/person3.jpg"
    },
    {
        id: 4,
        name: "Lisa Schmidt",
        role: "Sound Design",
        comment: "Created exactly the signature sound I was looking for. Professional approach and great communication throughout the process.",
        rating: 5,
        image: "/testimonials/person4.jpg"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="w-full py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                
                <div className="relative">
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 relative mr-4">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                                        <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-gray-700 italic">&quot;{testimonials[currentIndex].comment}&quot;</p>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials; 