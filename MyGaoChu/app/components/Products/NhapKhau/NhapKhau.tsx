"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = {
  PACKET: 1,
  BOTTLE: 2,
};

const importProducts = [
  {
    id: 1,
    name: "Mì Trộn Tôm Chua Cay",
    flavor: "Spicy",
    image: "/images/products/Mi/mi_tron_tom_chua_cay.png",
    description: "Mì trộn tôm với hương vị chua cay đặc trưng",
    link: "/products/mi/tron-tom-chua-cay",
    category: CATEGORIES.PACKET,
  },
  {
    id: 2,
    name: "Mì Trộn Sườn Heo Nướng",
    flavor: "Bali",
    image: "/images/products/Mi/mi_tron_suon_heo_nuong.png",
    description: "Mì trộn với sườn heo nướng vị Bali",
    link: "/products/mi/tron-suon-heo-bali",
    category: CATEGORIES.PACKET,
  },
  {
    id: 3,
    name: "Mì bò cay Hàn Quốc",
    flavor: "140g",
    image: "/images/products/Mi/mi_bo_cay_han_quoc.png",
    description: "Mì bò cay phong cách Hàn Quốc",
    link: "/products/mi/bo-cay-han-quoc",
    category: CATEGORIES.BOTTLE,
  },
  {
    id: 4,
    name: "Mì Sườn heo nướng Bali",
    flavor: "Gói",
    image: "/images/products/Mi/mi_suon_heo_nuong_bali.png",
    description: "Mì với hương vị sườn heo nướng Bali",
    link: "/products/mi/suon-heo-bali",
    category: CATEGORIES.PACKET,
  },
  {
    id: 5,
    name: "Mì Tôm chua cay Hoàng Đế",
    flavor: "Gói",
    image: "https://vifon.com.vn/uploads/products/mi-tom-chua-cay-hoang-de.png",
    description: "Mì tôm chua cay phong cách Hoàng Đế",
    link: "/products/mi/tom-chua-cay-hoang-de",
    category: CATEGORIES.PACKET,
  },
  {
    id: 6,
    name: "Mì KIM CHI",
    flavor: "80g",
    image: "https://vifon.com.vn/uploads/products/mi-kim-chi.png",
    description: "Mì hương vị kim chi Hàn Quốc",
    link: "/products/mi/kim-chi",
    category: CATEGORIES.PACKET,
  },
  {
    id: 7,
    name: "Mì LẨU THÁI",
    flavor: "80g",
    image: "https://vifon.com.vn/uploads/products/mi-lau-thai.png",
    description: "Mì hương vị lẩu Thái",
    link: "/products/mi/lau-thai",
    category: CATEGORIES.PACKET,
  },
  {
    id: 8,
    name: "CURRY MÌ CÀ RI GÀ",
    flavor: "70gr",
    image: "https://vifon.com.vn/uploads/products/curry-mi-ca-ri-ga.png",
    description: "Mì cà ri gà",
    link: "/products/mi/ca-ri-ga",
    category: CATEGORIES.PACKET,
  },
];

const sideIcons = [
  {
    id: CATEGORIES.PACKET,
    name: "Gói",
    icon: (
      <svg
        className="w-[96px] max-h-[67.2px]"
        viewBox="0 0 315.1 235.1"
        fill="#919191"
      >
        <path
          className="transition-colors duration-200"
          d="M276.1,17.4C227.8-0.5,87.2-0.5,38.9,17.4l-27.8-5.3c-1.8-0.3-3.6,0.1-4.9,1.3C4.8,14.5,4,16.2,4,18v198.9c0,1.8,0.8,3.5,2.2,4.6c1.4,1.1,3.2,1.6,4.9,1.3l27.9-5.2c48.3,17.9,188.9,17.9,237.2,0l27.8,5.2c1.8,0.3,3.6-0.1,4.9-1.3c1.4-1.1,2.2-2.8,2.2-4.6V18l0,0c0-3.3-2.7-6-6-6c-0.6,0-1.1,0.1-1.6,0.2L276.1,17.4z M16,25.2l17.5,3.3v177.9L16,209.7V25.2z M45.5,207.2V27.8C92.4,12,222.7,12,269.6,27.8v179.4C222.7,223,92.4,223,45.5,207.2z M299.1,209.7l-17.5-3.3V28.6l17.5-3.3V209.7z"
          strokeWidth="9"
          stroke="#919191"
        />
      </svg>
    ),
  },
  {
    id: CATEGORIES.BOTTLE,
    name: "Chai",
    icon: (
      <svg
        className="w-[96px] max-h-[67.2px]"
        viewBox="90.14 86.1 319.115 520.87"
        fill="#919191"
      >
        <path
          className="transition-colors duration-200"
          d="M407.393,265.242l-51.323-89.664v-70.876c0-10.273-11.906-18.602-26.594-18.602H169.919c-14.686,0-26.593,8.329-26.593,18.602v70.876l-51.324,89.664c-1.238,2.191-1.869,4.527-1.862,6.883v316.242c0,10.274,11.907,18.603,26.593,18.603h265.93c14.687,0,26.593-8.328,26.593-18.603V272.125C409.264,269.769,408.631,267.433,407.393,265.242z M196.511,123.305h106.372v37.205H196.511V123.305z M356.07,569.766H143.326V275.66l44.677-77.945h123.655l44.411,77.945V569.766z"
        />
      </svg>
    ),
  },
];

const PRODUCTS_PER_PAGE = 16;

const NhapKhau = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProducts = selectedCategory
    ? importProducts.filter((product) => product.category === selectedCategory)
    : importProducts;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mt-12">
          {/* Side Icons */}
          <div className="flex flex-col mr-20">
            {sideIcons.map((icon) => (
              <div
                key={icon.id}
                className={`w-[96px] h-[96px] relative cursor-pointer group flex items-center justify-center ${
                  selectedCategory === icon.id ? "bg-white" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(
                    selectedCategory === icon.id ? null : icon.id
                  );
                  setCurrentPage(1);
                }}
              >
                <div
                  className={`group-hover:[&_svg]:fill-[#64ac58] hover:scale-110 transition-all duration-200 ${
                    selectedCategory === icon.id ? "[&_svg]:fill-[#64ac58]" : ""
                  }`}
                >
                  {icon.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-x-4 gap-y-4 w-[1000px] min-h-[400px] items-start">
            {currentProducts.map((product) => (
              <Link
                href={product.link}
                key={product.id}
                className="group text-center flex flex-col items-center"
                style={{ margin: 0, padding: 0 }}
              >
                <div
                  className="relative w-[144px] h-[144px] flex justify-center items-center"
                  style={{ margin: 0, padding: 0 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </div>
                <h3
                  className="text-[--primary-green] text-base font-medium"
                  style={{ margin: 0, padding: 0 }}
                >
                  {product.name}
                </h3>
                <div
                  className="text-[--primary-green] text-sm"
                  style={{ margin: 0, padding: 0 }}
                >
                  {product.flavor}
                </div>
              </Link>
            ))}
          </div>
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
  );
};

export default NhapKhau;
