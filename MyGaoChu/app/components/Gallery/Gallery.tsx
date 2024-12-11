"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data mẫu cho gallery
const galleryData = {
  images: [
    {
      id: 1,
      title: "Nhà máy sản xuất",
      category: "factory",
      src: "/images/gallery/factory1.jpg",
      description: "Dây chuyền sản xuất hiện đại",
    },
    {
      id: 2,
      title: "Sản phẩm mới",
      category: "products",
      src: "/images/gallery/product1.jpg",
      description: "Dòng sản phẩm mới ra mắt 2024",
    },
    // Thêm nhiều hình ảnh khác...
  ],
  videos: [
    {
      id: 1,
      title: "Quy trình sản xuất",
      category: "production",
      src: "https://www.youtube.com/embed/VIDEO_ID_1",
      thumbnail: "/images/gallery/video-thumb1.jpg",
      description: "Quy trình sản xuất đạt chuẩn quốc tế",
    },
    {
      id: 2,
      title: "Giới thiệu công ty",
      category: "company",
      src: "https://www.youtube.com/embed/VIDEO_ID_2",
      thumbnail: "/images/gallery/video-thumb2.jpg",
      description: "Giới thiệu về lịch sử và tầm nhìn công ty",
    },
    // Thêm nhiều video khác...
  ],
};

// Navigation items
const navItems = [
  { title: "HÌNH ẢNH", href: "/gallery/images" },
  { title: "VIDEO", href: "/gallery/videos" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const pathname = usePathname();

  const filterItems = (items: any[], category: string) => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  };

  const isImages = pathname === "/gallery/images";
  const displayItems = isImages ? galleryData.images : galleryData.videos;

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md pt-20">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-4 text-3xl relative group
                      ${isActive ? "text-[--primary-green]" : "text-gray-600"}`}
                  >
                    {/* Static text */}
                    <span className="relative inline-block">
                      {item.title}

                      {/* Text with sliding color effect */}
                      <span
                        className={`absolute inset-0 text-[--primary-green] inline-block w-0 overflow-hidden whitespace-nowrap
                          group-hover:w-full transition-[width] duration-300 ease-out
                          ${isActive ? "w-full" : ""}`}
                      >
                        {item.title}
                      </span>
                    </span>

                    {/* Border bottom with sliding effect */}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
                      <span
                        className={`absolute inset-0 bg-[--primary-green] w-0
                          group-hover:w-full transition-[width] duration-300 ease-out
                          ${isActive ? "w-full" : ""}`}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="min-h-screen pb-12">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-[--primary-green] mb-8">
            {isImages ? "Thư Viện Hình Ảnh" : "Thư Viện Video"}
          </h1>

          {/* Category Filter */}
          <div className="mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--primary-green]"
            >
              <option value="all">Tất cả</option>
              <option value="factory">Nhà máy</option>
              <option value="products">Sản phẩm</option>
              <option value="events">Sự kiện</option>
            </select>
          </div>

          {/* Gallery Grid */}
          {isImages ? (
            // Images Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterItems(displayItems, selectedCategory).map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Videos Grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filterItems(displayItems, selectedCategory).map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[--primary-green] mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
