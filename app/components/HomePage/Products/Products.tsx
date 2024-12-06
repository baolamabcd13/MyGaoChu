"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Mì Xào Spaghetti",
    image: "/images/products/mi_xao_spageti.png",
    link: "/products/mi-xao-spaghetti",
  },
  {
    name: "Mì Trộn Tôm Chua Cay Thái",
    image: "/images/products/mi_tron_tom_chua_cay.png",
    link: "/products/mi-tron-tom",
  },
  {
    name: "Phở Gà 65g",
    image: "/images/products/pho_ga.png",
    link: "/products/pho-ga",
  },
  {
    name: "Phở Chay Rau Nấm 65g",
    image: "/images/products/pho_chay_rau_nam.png",
    link: "/products/pho-chay",
  },
  {
    name: "Mì Trộn Pad Thai Khay",
    image: "/images/products/mi_tron_padthai.png",
    link: "/products/pad-thai",
  },
  {
    name: "Phở Bò 65g",
    image: "/images/products/pho_bo_65g.png",
    link: "/products/pho-bo",
  },
  {
    name: "Hoàng Gia Phở Thịt Bò",
    image: "/images/products/pho_hoang_gia_thit_bo.png",
    link: "/products/pho-hoang-gia",
  },
  {
    name: "Hoàng Gia Phở Thịt Gà",
    image: "/images/products/pho_hoang_gia_thit_ga.png",
    link: "/products/hoang-gia-pho-thit-ga",
  },
  {
    name: "Phở Thịt Bò Tô 120g",
    image: "/images/products/pho_thit_bo_120g.png",
    link: "/products/pho-thit-bo-to",
  },
  {
    name: "Cháo Thịt Gà 70g",
    image: "/images/products/chao_thit_ga.png",
    link: "/products/chao-thit-ga",
  },
  {
    name: "Phở Thịt Gà Tô 120g",
    image: "/images/products/pho_thit_ga_120g.png",
    link: "/products/pho-thit-ga-to",
  },
  {
    name: "Phở Ký 500g",
    image: "/images/products/pho_ky_500g.png",
    link: "/products/pho-ky",
  },
  {
    name: "Cháo Thịt Bằm 70g",
    image: "/images/products/chao_thit_bam_70g.png",
    link: "/products/chao-thit-bam",
  },
];

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState("TRONG NƯỚC");
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = ["GẠO", "MÌ", "GIA VỊ", "NHẬP KHẨU"];

  // Tạo mảng sản phẩm vô tận
  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
  ];

  const handlePrevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => {
      if (prev === 0) {
        // Khi ở đầu, nhảy đến vị trí cuối của mảng products gốc
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentPage(products.length - 1);
        }, 0);
        return products.length * 2 - 1;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prev - 1;
    });
  };

  const handleNextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => {
      if (prev === products.length * 2) {
        // Khi ở cuối, nhảy về vị trí đầu của mảng products gốc
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentPage(1);
        }, 0);
        return 0;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prev + 1;
    });
  };

  return (
    <div className="bg-[#FBECD7] w-full">
      <style jsx>{`
        .products-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .products-track {
          display: flex;
          transition: ${isTransitioning
            ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none"};
          will-change: transform;
        }

        .product-column {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;
          gap: 5rem;
          padding: 0 1rem;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-12 z-0">
        <h2 className="text-5xl font-bold text-center text-[--primary-green] my-8">
          SẢN PHẨM
        </h2>

        {/* Tab switching */}
        <div className="flex justify-center my-12">
          <div className="inline-flex rounded-2xl border-2 border-[--primary-green] overflow-hidden">
            {["TRONG NƯỚC", "XUẤT KHẨU"].map((tab) => (
              <button
                key={tab}
                className={`text-2xl font-extrabold px-6 py-1  ${
                  activeTab === tab
                    ? "bg-[--primary-green] text-white"
                    : "bg-white text-[--primary-green]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-12 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="text-2xl font-extrabold hover:text-[--primary-green] transition-colors m-4"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid with navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Prev button */}
          <button
            onClick={handlePrevPage}
            className="absolute left-24 top-1/2 -translate-y-1/2 w-14 h-14 text-[--primary-green] rounded-full border-2 border-[--primary-green] flex items-center justify-center hover:bg-[--primary-green] hover:text-white transition-colors"
          >
            <span className="text-3xl">&larr;</span>
          </button>

          {/* Products grid container */}
          <div className="relative overflow-hidden max-w-4xl mx-auto px-8">
            <div className="products-container">
              <div
                className="products-track"
                style={{
                  transform: `translateX(-${currentPage * 25}%)`,
                }}
              >
                {Array.from({
                  length: Math.ceil(infiniteProducts.length / 2),
                }).map((_, colIndex) => (
                  <div key={colIndex} className="product-column">
                    {infiniteProducts
                      .slice(colIndex * 2, colIndex * 2 + 2)
                      .map((product, index) => (
                        <Link
                          href={product.link}
                          key={`${product.name}-${colIndex}-${index}`}
                          className="group flex flex-col items-center"
                        >
                          <div className="relative w-32 h-32 mb-6">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 112px) 100vw, 112px"
                            />
                          </div>
                          <h3 className="text-center text-[#4CAF50] text-base">
                            {product.name}
                          </h3>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNextPage}
            className="absolute right-40 top-1/2 -translate-y-1/2 translate-x-12 w-14 h-14 text-[--primary-green] rounded-full border-2 border-[--primary-green] flex items-center justify-center hover:bg-[--primary-green] hover:text-white transition-colors"
          >
            <span className="text-3xl">&rarr;</span>
          </button>
        </div>

        {/* Action buttons */}
        <div className="text-2xl flex justify-center gap-4 mt-12 font-extrabold">
          <button className="px-8 py-1 border-2 border-[--primary-green] text-[--primary-green] rounded-2xl hover:bg-[--primary-green] hover:text-white transition-colors">
            Xem tất cả
          </button>
          <button className="px-8 py-1 bg-[--primary-green] text-white rounded-2xl hover:bg-[--primary-green] hover:text-white transition-colors">
            Cửa hàng online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
