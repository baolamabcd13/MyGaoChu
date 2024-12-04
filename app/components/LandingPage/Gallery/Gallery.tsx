"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);

  // Add images data
  const images = [
    { src: "/images/gallery/KV_line_option.jpg", alt: "Vifon Gallery 1" },
    { src: "/images/gallery/Vifon_Confirm.jpg", alt: "Vifon Gallery 2" },
    { src: "/images/gallery/Vifon_Master_Image.jpg", alt: "Vifon Gallery 3" },
    { src: "/images/gallery/Vifon_Master_YouTube.jpg", alt: "Vifon Gallery 4" },
    { src: "/images/gallery/Vifon_Thumbnail_1963.png", alt: "Vifon Gallery 5" },
    // Add more images here
  ];

  // Add auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!transitioning) {
        handleNextSlide();
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [transitioning]);

  const handleNextSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  return (
    <>
      <style jsx global>{`
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

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
      <section className="w-full bg-[#FBECD7] overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-[--primary-green] text-5xl font-bold pt-8">
            THƯ VIỆN VIFON
          </h2>

          {/* Tab Buttons */}
          <div className="flex justify-center mt-4">
            <div className="text-2xl inline-flex rounded-2xl border-2 border-[--primary-green] overflow-hidden">
              <button
                className={`px-8 py-1 font-extrabold ${
                  activeTab === "video"
                    ? "bg-[--primary-green] text-white"
                    : "bg-white text-[--primary-green]"
                }`}
                onClick={() => setActiveTab("video")}
              >
                VIDEO
              </button>
              <button
                className={`px-8 py-1 font-extrabold ${
                  activeTab === "image"
                    ? "bg-[--primary-green] text-white"
                    : "bg-white text-[--primary-green]"
                }`}
                onClick={() => setActiveTab("image")}
              >
                HÌNH ẢNH
              </button>
            </div>
          </div>

          {/* Slider Section */}
          <div className="relative w-full mx-auto h-[500px]">
            {/* Navigation Arrows */}
            <button
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-[5]"
              onClick={handlePrevSlide}
            >
              <div className="relative group cursor-pointer">
                {/* Outer circle with pulse animation */}
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse group-hover:bg-white/40 transition-all duration-300"></div>

                {/* Main circle */}
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[--primary-green]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </div>
              </div>
            </button>

            <button
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-[5]"
              onClick={handleNextSlide}
            >
              <div className="relative group cursor-pointer">
                {/* Outer circle with pulse animation */}
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse group-hover:bg-white/40 transition-all duration-300"></div>

                {/* Main circle */}
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[--primary-green]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Slider Content */}
            <div className="flex justify-center items-center w-full h-full mt-12">
              <div className="flex relative" style={{ width: "100%" }}>
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const index =
                    (currentSlide + offset + images.length) % images.length;
                  return (
                    <div
                      key={index}
                      className={`relative transition-all duration-500 ease-in-out flex-shrink-0 ${
                        offset === 0
                          ? "w-[800px] h-[500px] z-[4]"
                          : offset === -1 || offset === 1
                          ? "w-[400px] h-[400px] opacity-70 z-[3]"
                          : "w-[200px] h-[300px] opacity-40 z-[2]"
                      }`}
                      style={{
                        transform: `translateX(${offset * 60}%)`,
                        position: "absolute",
                        left: "50%",
                        marginLeft:
                          offset === 0
                            ? "-400px"
                            : offset === -1
                            ? "-600px"
                            : offset === 1
                            ? "200px"
                            : offset === -2
                            ? "-800px"
                            : "400px",
                        top: "50%",
                        marginTop:
                          offset === 0
                            ? "-250px"
                            : offset === -1 || offset === 1
                            ? "-200px"
                            : "-150px",
                      }}
                    >
                      <Image
                        src={images[index].src}
                        alt={images[index].alt}
                        fill
                        className="object-cover rounded-lg"
                        style={{
                          transition: "all 500ms ease-in-out",
                          animation: transitioning
                            ? slideDirection > 0
                              ? "slideLeft 500ms ease-in-out"
                              : "slideRight 500ms ease-in-out"
                            : "none",
                        }}
                      />
                      {activeTab === "video" && offset === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative group cursor-pointer">
                            {/* Outer circle with pulse animation */}
                            <div className="absolute -inset-4 bg-white/30 rounded-full animate-pulse group-hover:bg-white/40 transition-all duration-300"></div>

                            {/* Main circle */}
                            <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {/* Play icon */}
                              <svg
                                className="w-8 h-8 text-[--primary-green] translate-x-0.5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center py-6 mb-12">
            <Link
              href="/thu-vien"
              className="text-2xl font-extrabold inline-flex items-center justify-center px-8 py-1 border-2 border-[--primary-green] text-[--primary-green] rounded-2xl hover:bg-[--primary-green] hover:text-white transition-colors duration-300"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
