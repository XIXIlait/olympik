import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';

interface ImageCarouselProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent" onClick={handleClose}>
      <div className="relative w-[30%] h-[30%] max-w-lg max-h-lg p-2 rounded-lg mt-80">
        <div className="relative w-full h-full">
          <Image src={images[currentIndex]} layout="fill" objectFit="contain" alt={`Image ${currentIndex + 1}`} />
        </div>
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
