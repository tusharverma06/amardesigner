import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, items]);

  const nextItem = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-xl">
        <button
          className="w-8 h-8 text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400 hover:text-white"
          onClick={prevItem}
        >
          &lt;
        </button>

        <div className="flex-1 px-4">
          <div className="relative h-56 overflow-hidden rounded-lg">
            {items.map((item, index) => (
              <div
                key={index}
                className={`${index === activeIndex ? "" : "hidden"} absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
              >
                <div className="relative flex flex-col items-center justify-center h-full p-4 bg-gray-100 rounded-lg shadow-md">
                  <p className="text-lg font-medium text-gray-800">{item.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-8 h-8 text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400 hover:text-white"
          onClick={nextItem}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
