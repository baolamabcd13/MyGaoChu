"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Tin tức nổi bật
const featuredNews = [
  {
    id: 1,
    title: "Khai trương cửa hàng mới tại Quận 1",
    date: "2024-03-15",
    image: "/images/news/store-opening.jpg",
    description: "Khai trương cửa hàng mới với nhiều ưu đãi hấp dẫn",
    category: "events",
    link: "/news/store-opening",
    featured: true,
  },
  {
    id: 2,
    title: "Ra mắt sản phẩm mì gói mới",
    date: "2024-03-12",
    image: "/images/news/new-product.jpg",
    description: "Sản phẩm mì gói mới với hương vị độc đáo",
    category: "events",
    link: "/news/new-product",
    featured: true,
  },
  {
    id: 3,
    title: "Chương trình từ thiện tại địa phương",
    date: "2024-03-08",
    image: "/images/news/charity.jpg",
    description: "Hoạt động từ thiện và cộng đồng",
    category: "events",
    link: "/news/charity-event",
    featured: true,
  },
];

// Tin tức khác
const newsData = [
  {
    id: 4,
    title: "Giải thưởng Chất lượng Quốc gia",
    date: "2024-03-05",
    image: "/images/news/award.jpg",
    description:
      "Vinh dự nhận giải thưởng chất lượng sản phẩm xuất sắc năm 2024",
    category: "events",
    link: "/news/quality-award",
  },
  {
    id: 5,
    title: "Hợp tác phát triển bền vững",
    date: "2024-03-03",
    image: "/images/news/partnership.jpg",
    description: "Ký kết hợp tác chiến lược với các đối tác trong ngành",
    category: "events",
    link: "/news/partnership",
  },
  {
    id: 6,
    title: "Chương trình đào tạo kỹ năng",
    date: "2024-03-01",
    image: "/images/news/training.jpg",
    description: "Đào tạo và phát triển nguồn nhân lực chất lượng cao",
    category: "events",
    link: "/news/training-program",
  },
  {
    id: 7,
    title: "Triển lãm Thực phẩm Quốc tế",
    date: "2024-02-28",
    image: "/images/news/exhibition.jpg",
    description: "Tham gia triển lãm thực phẩm lớn nhất Đông Nam Á",
    category: "events",
    link: "/news/food-exhibition",
  },
  {
    id: 8,
    title: "Chứng nhận An toàn Thực phẩm",
    date: "2024-02-25",
    image: "/images/news/certification.jpg",
    description: "Đạt chứng nhận an toàn thực phẩm quốc tế ISO 22000",
    category: "events",
    link: "/news/food-safety",
  },
  {
    id: 9,
    title: "Phát triển Sản phẩm Xanh",
    date: "2024-02-20",
    image: "/images/news/green-product.jpg",
    description: "Ra mắt dòng sản phẩm thân thiện với môi trường",
    category: "events",
    link: "/news/green-products",
  },
  {
    id: 10,
    title: "Hội thảo Dinh dưỡng",
    date: "2024-02-15",
    image: "/images/news/nutrition.jpg",
    description: "Tổ chức hội thảo về dinh dưỡng và sức khỏe cộng đồng",
    category: "events",
    link: "/news/nutrition-seminar",
  },
  {
    id: 11,
    title: "Chương trình Học bổng",
    date: "2024-02-10",
    image: "/images/news/scholarship.jpg",
    description: "Trao học bổng cho sinh viên ngành công nghệ thực phẩm",
    category: "events",
    link: "/news/scholarship-program",
  },
  {
    id: 12,
    title: "Nghiên cứu Phát triển",
    date: "2024-02-05",
    image: "/images/news/research.jpg",
    description: "Đầu tư vào nghiên cứu và phát triển sản phẩm mới",
    category: "events",
    link: "/news/research-development",
  },
];

const ITEMS_PER_PAGE = 6;
const SLIDE_INTERVAL = 5000; // 5 seconds per slide

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();

  // Auto slide for featured news
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Lọc tin tức theo category dựa vào pathname
  const filteredNews =
    pathname === "/news/promotions"
      ? newsData.filter((item) => item.category === "promotions")
      : newsData.filter((item) => item.category === "events");

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentItems = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white">
      <div className="min-h-screen pb-12">
        {/* Featured News Slider */}
        <div className="container mx-auto px-4 pt-12 mb-2">
          <h2 className="text-2xl font-bold text-[--primary-green] mb-6">
            Tin Tức & Sự Kiện Nổi Bật
          </h2>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            {featuredNews.map((item, index) => (
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
              {featuredNews.map((_, index) => (
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

        {/* Other News Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[--primary-green] mb-6">
            Các Tin Tức & Sự Kiện Khác
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

export default News;
