"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const slides = [
    { src: "/images/banner/Vifon_Confirm.jpg", alt: "Vifon Confirm" },
    { src: "/images/banner/Vifon_Master_Image.jpg", alt: "Vifon Master Image" },
    {
      src: "/images/banner/Vifon_Master_YouTube.jpg",
      alt: "Vifon Master YouTube",
    },
    { src: "/images/banner/KV_line_option.jpg", alt: "Kv Line Option" },
    {
      src: "/images/banner/Vifon_Thumbnail_1963.png",
      alt: "Vifon Thumbnail 1963",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const scaleInterval = React.useRef<NodeJS.Timeout | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);

  useEffect(() => {
    return () => {
      if (scaleInterval.current) {
        clearInterval(scaleInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!transitioning) {
        nextSlide();
      }
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [transitioning]);

  const nextSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  const handleMouseEnter = () => {
    if (scaleInterval.current) {
      clearInterval(scaleInterval.current);
    }
    setScale(1);
    scaleInterval.current = setInterval(() => {
      setScale((prev) => {
        if (prev >= 1.1) {
          if (scaleInterval.current) {
            clearInterval(scaleInterval.current);
          }
          return 1.1;
        }
        return prev + 0.001;
      });
    }, 10);
  };

  const handleMouseLeave = () => {
    if (scaleInterval.current) {
      clearInterval(scaleInterval.current);
    }
    scaleInterval.current = setInterval(() => {
      setScale((prev) => {
        if (prev <= 1) {
          if (scaleInterval.current) {
            clearInterval(scaleInterval.current);
          }
          return 1;
        }
        return prev - 0.001;
      });
    }, 10);
  };

  return (
    <>
      <style jsx>{`
        @keyframes spread-effect {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .play-button::after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
          animation: spread-effect 1.5s infinite;
          box-shadow: 0px 0px 5px #dd363e;
          background: rgba(221, 54, 62, 0.2);
        }
      `}</style>

      <div className="w-full flex justify-center items-center py-8 relative">
        <div
          className="relative overflow-hidden border-4 border-gray-200 bg-transparent group mt-8"
          style={{ width: "870px", height: "585px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: "860px",
              height: "485px",
              margin: "auto",
              marginTop: "0px",
            }}
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              fill
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${scale})`,
                animation: transitioning
                  ? slideDirection > 0
                    ? "slideLeft 0.5s ease-in-out"
                    : "slideRight 0.5s ease-in-out"
                  : "none",
                opacity: 1,
              }}
            />
            {transitioning && (
              <Image
                src={
                  slides[
                    (currentSlide +
                      (slideDirection > 0 ? -1 : 1) +
                      slides.length) %
                      slides.length
                  ].src
                }
                alt={
                  slides[
                    (currentSlide +
                      (slideDirection > 0 ? -1 : 1) +
                      slides.length) %
                      slides.length
                  ].alt
                }
                fill
                className="w-full h-full object-cover absolute top-0 left-0"
                style={{
                  animation:
                    slideDirection > 0
                      ? "slideOutLeft 0.5s ease-in-out"
                      : "slideOutRight 0.5s ease-in-out",
                }}
              />
            )}

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative play-button w-20 h-20 rounded-full bg-[#dd363e] cursor-pointer flex items-center justify-center transition-all duration-300">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="absolute left-[calc(50%-480px)] transform -translate-x-16"
          onClick={prevSlide}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 490.4 490.4"
            className="fill-gray-700 hover:fill-[--primary-green] transition-colors duration-300 cursor-pointer"
          >
            <g>
              <path d="M245.2,490.4C110,490.4,0,380.4,0,245.2S110,0,245.2,0s245.2,110,245.2,245.2S380.4,490.4,245.2,490.4z M245.2,24.5c-121.7,0-220.7,99-220.7,220.7s99,220.7,220.7,220.7s220.7-99,220.7-220.7S366.9,24.5,245.2,24.5z" />
              <path d="M351.7,257.5H168.3l48,48c4.8,4.8,4.8,12.5,0,17.3c-2.4,2.4-5.5,3.6-8.7,3.6s-6.3-1.2-8.7-3.6L130,253.9c-4.8-4.8-4.8-12.5,0-17.3l68.9-68.9c4.8-4.8,12.5-4.8,17.3,0s4.8,12.5,0,17.3l-48,48h183.5c6.8,0,12.3,5.5,12.3,12.3C364,252.1,358.5,257.5,351.7,257.5z" />
            </g>
          </svg>
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-[calc(50%-480px)] transform translate-x-16"
          onClick={nextSlide}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 490.4 490.4"
            className="fill-gray-700 hover:fill-[--primary-green] transition-colors duration-300 cursor-pointer"
          >
            <g>
              <path d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2S110,490.4,245.2,490.4z M245.2,24.5c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z" />
              <path d="M138.7,257.5h183.4l-48,48c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l68.9-68.9c4.8-4.8,4.8-12.5,0-17.3l-68.9-68.9c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l48,48H138.7c-6.8,0-12.3,5.5-12.3,12.3C126.4,252.1,131.9,257.5,138.7,257.5z" />
            </g>
          </svg>
        </div>

        {/* Add dots navigation */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full border-2 border-white transition-colors duration-300 hover:bg-black mx-1 ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => {
                if (!transitioning) {
                  setTransitioning(true);
                  setSlideDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                  setTimeout(() => {
                    setTransitioning(false);
                    setSlideDirection(0);
                  }, 500);
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
