"use client"
import React, { useState } from 'react';
import Image from 'next/image'

interface CarouselProps {
    imageURLS: string[]
}

const ImageCarousel = ({imageURLS} : CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
    <div>
        <div className="carousel w-full">
            <div className="carousel-item w-full">
                <img src={imageURLS[currentSlide]} className="w-full" />
            </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
            {imageURLS.map((imageUrl, index) => (
                <a key={index} onClick={() => setCurrentSlide(index)} className="btn btn-xs bg-gray-900 hover:bg-gray-900 text-white">{index+1}</a>
            ))}
        </div>
    </div>
    )
}


export default ImageCarousel