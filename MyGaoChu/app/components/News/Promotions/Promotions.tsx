"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Khuyến mãi nổi bật
const featuredPromotions = [
  {
    id: 1,
    title: "Giảm giá 50% cho tất cả sản phẩm mì gói",
    date: "2024-03-10",
    image: "/images/promotions/promotion1.jpg",
    description: "Chương trình khuyến mãi đặc biệt nhân dịp sinh nhật công ty",
    link: "/promotions/special-promotion",
    featured: true,
  },
  {
    id: 2,
    title: "Mua 1 tặng 1 cho sản phẩm mới",
    date: "2024-03-20",
    image: "/images/promotions/promotion2.jpg",
    description: "Ưu đãi đặc biệt cho sản phẩm mới ra mắt",
    link: "/promotions/buy-one-get-one",
    featured: true,
  },
  {
    id: 3,
    title: "Combo tiết kiệm mùa tựu trường",
    date: "2024-03-25",
    image: "/images/promotions/promotion3.jpg",
    description: "Ưu đãi đặc biệt cho học sinh, sinh viên",
    link: "/promotions/student-combo",
    featured: true,
  },
];

// Khuyến mãi khác
const promotionsData = [
  {
    id: 4,
    title: "Tích điểm đổi quà tháng 3",
    date: "2024-03-01",
    image: "/images/promotions/promotion4.jpg",
    description: "Chương trình tích điểm hấp dẫn",
    link: "/promotions/points-rewards",
  },
  // ... thêm các khuyến mãi khác
];

const ITEMS_PER_PAGE = 6;
const SLIDE_INTERVAL = 5000; // 5 seconds per slide

const Promotions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide for featured promotions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPromotions.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const totalPages = Math.ceil(promotionsData.length / ITEMS_PER_PAGE);
  const currentItems = promotionsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white -mb-96">
      <div className="min-h-screen pb-96">
        {/* Featured Promotions Slider */}
        <div className="container mx-auto px-4 pt-12 mb-12">
          <h2 className="text-2xl font-bold text-[--primary-green] mb-6">
            Khuyến Mãi Nổi Bật
          </h2>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            {featuredPromotions.map((item, index) => (
              <div
                key={item.id}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-2">{item.description}</p>
                  <p className="text-sm opacity-75">{item.date}</p>
                </div>
              </div>
            ))}
            {/* Slide indicators */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {featuredPromotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other Promotions Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[--primary-green] mb-6">
            Các Khuyến Mãi Khác
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {currentItems.map((item) => (
              <Link href={item.link} key={item.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[--primary-green] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center mt-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[--primary-green] text-xl">Trang</span>
              {[...Array(totalPages)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`text-xl cursor-pointer ${
                    currentPage === index + 1
                      ? "text-[--primary-green] font-bold underline"
                      : "text-gray-400"
                  }`}
                >
                  {index + 1}
                </span>
              ))}
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-[--primary-green] hover:underline"
            >
              <span>‹</span>
              <span className="underline">Về trang chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
