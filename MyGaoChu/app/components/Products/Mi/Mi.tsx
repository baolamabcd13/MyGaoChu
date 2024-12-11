"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = {
  PACKET: 1,
  BOWL: 2,
  TRAY: 3,
  CUP: 4,
};

const noodleProducts = [
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
    category: CATEGORIES.BOWL,
  },
  {
    id: 4,
    name: "Mì Sờn heo nướng Bali",
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
    category: CATEGORIES.BOWL,
  },
  {
    id: 4,
    name: "Mì Sờn heo nướng Bali",
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
    category: CATEGORIES.BOWL,
  },
  {
    id: 4,
    name: "Mì Sờn heo nướng Bali",
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
    id: CATEGORIES.BOWL,
    name: "Tô",
    icon: (
      <svg
        className="w-[96px] max-h-[67.2px]"
        viewBox="0 0 512 288"
        fill="#919191"
      >
        <path
          className="transition-colors duration-200"
          d="M496,0H16C8,0,0,6.4,0,16c0,96,46.4,176,128,220.8V272c0,9.6,6.4,16,16,16h224c9.6,0,16-6.4,16-16v-36.8C465.6,190.4,512,112,512,16C512,6.4,504,0,496,0z M360,211.2c-4.8,3.2-8,8-8,14.4V256H160v-28.8c0-6.4-3.2-11.2-9.6-14.4C80,177.6,38.4,113.6,33.6,32H480C473.6,112,432,176,360,211.2z"
        />
      </svg>
    ),
  },
  {
    id: CATEGORIES.TRAY,
    name: "Khay",
    icon: (
      <svg
        className="w-[96px] max-h-[67.2px]"
        viewBox="0 0 419 123.8"
        fill="#919191"
      >
        <path
          className="transition-colors duration-200"
          d="M416.4,18.4c2.8-3.4,3.3-8,1.5-12S412.1,0,407.7,0H11.3C6.9,0,3,2.5,1.1,6.5s-1.3,8.6,1.5,12l50.6,61.7l10.6,35.6c1.4,4.8,5.8,8.1,10.8,8.1h269.9c5,0,9.4-3.3,10.8-8.1l10.6-35.6L416.4,18.4z M383.9,22.6l-33.6,40.9H68.7L35.1,22.6H383.9z M336,101.3H83l-4.5-15.2h262.1L336,101.3z"
        />
      </svg>
    ),
  },
  {
    id: CATEGORIES.CUP,
    name: "Ly",
    icon: (
      <svg
        className="w-[96px] max-h-[67.2px]"
        viewBox="0 0 368 512"
        fill="#919191"
      >
        <path
          className="transition-colors duration-200"
          d="M352,0H16C6.4,0,0,8,0,16c0,6.4,3.2,11.2,9.6,14.4L40,467.2c1.6,25.6,24,44.8,49.6,44.8H280c25.6,0,46.4-19.2,49.6-44.8L360,28.8c4.8-1.6,8-6.4,8-12.8C368,6.4,361.6,0,352,0z M296,465.6c0,8-6.4,14.4-16,14.4H89.6c-8,0-16-6.4-17.6-14.4L65.6,384h236.8L296,465.6z M305.6,352c-0.8,0-1.2,0-1.2,0H64l-1.6-32h244.8L305.6,352z M310.4,288H59.2l-1.6-32H312L310.4,288z M313.6,224H54.4L41.6,32H328L313.6,224z"
          strokeWidth="9"
          stroke="#919191"
        />
      </svg>
    ),
  },
];

const PRODUCTS_PER_PAGE = 12;

const Mi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProducts = selectedCategory
    ? noodleProducts.filter((product) => product.category === selectedCategory)
    : noodleProducts;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-14">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-[--primary-green] mb-4 mt-8">
          SẢN PHẨM MÌ VIFON
        </h2>
        <div className="w-[400px] h-[2px] bg-black mx-auto mb-16"></div>

        {/* Category Description */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-600">
            Khám phá thế giới mì VIFON với đa dạng hương vị, từ truyền thống đến
            hiện đại. Mỗi sản phẩm được chế biến từ nguyên liệu chọn lọc, đảm
            bảo chất lượng cao nhất.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          {/* Side Icons with Labels */}
          <div className="flex flex-col mr-20">
            {sideIcons.map((icon) => (
              <div
                key={icon.id}
                className={`w-[96px] h-[96px] relative cursor-pointer group flex flex-col items-center ${
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
                  className={`group-hover:[&_svg]:fill-[--primary-green] hover:scale-110 transition-all duration-200 ${
                    selectedCategory === icon.id
                      ? "[&_svg]:fill-[--primary-green]"
                      : ""
                  }`}
                >
                  {icon.icon}
                </div>
                {/* Add label under icon */}
                <span
                  className={`text-sm mt-2 text-center ${
                    selectedCategory === icon.id
                      ? "text-[--primary-green]"
                      : "text-gray-600"
                  }`}
                ></span>
              </div>
            ))}
          </div>

          {/* Products Grid with Hover Effects */}
          <div className="grid grid-cols-4 gap-x-4 gap-y-8 w-[1000px] min-h-[400px] items-start">
            {currentProducts.map((product) => (
              <Link
                href={product.link}
                key={product.id}
                className="group text-center flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-[144px] h-[144px] flex justify-center items-center mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[--primary-green] text-base font-medium mb-2 group-hover:text-[--primary-green]/80">
                  {product.name}
                </h3>
                <div className="text-[--primary-green] text-sm opacity-80">
                  {product.flavor}
                </div>
                {/* Add description on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-2">
                  {product.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {currentProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Không tìm thấy sản phẩm nào trong danh mục này.
            </p>
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-12">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="text-[--primary-green] disabled:text-gray-400"
              >
                ‹
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[--primary-green] text-xl">Trang</span>
                {[...Array(totalPages)].map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`text-xl cursor-pointer transition-all duration-200 ${
                      currentPage === index + 1
                        ? "text-[--primary-green] font-bold underline"
                        : "text-gray-400 hover:text-[--primary-green]"
                    }`}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="text-[--primary-green] disabled:text-gray-400"
              >
                ›
              </button>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-[--primary-green] hover:underline transition-all duration-200"
            >
              <span>‹</span>
              <span>Về trang chủ</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mi;
