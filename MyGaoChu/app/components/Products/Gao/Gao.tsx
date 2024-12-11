"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = {
  PACKET: 1,
  BOWL: 2,
  DISH: 3,
  CUP: 4,
};

const riceProducts = [
  {
    id: 1,
    name: "Phở Gà",
    flavor: "65g",
    image: "/images/products/Gao/pho_ga_65g.png",
    description: "Phở gà với nước dùng đậm đà, thơm ngon",
    link: "/products/pho/ga-65g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 2,
    name: "Phở Bò",
    flavor: "65g",
    image: "/images/products/Gao/pho_bo_65g.png",
    description: "Phở bò truyền thống với hương vị đặc trưng",
    link: "/products/pho/bo-65g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 3,
    name: "Phở Chay Rau Nấm",
    flavor: "65g",
    image: "/images/products/Gao/pho_chay_rau_nam_65g.png",
    description: "Phở chay thanh đạm với rau nấm tươi ngon",
    link: "/products/pho/chay-65g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 4,
    name: "Hoàng Gia Phở Thịt Bò",
    flavor: "120g",
    image: "/images/products/Gao/hoang_gia_pho_thit_bo_120g.png",
    description: "Phở bò cao cấp với thịt bò thật",
    link: "/products/pho/hoang-gia-bo-120g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 5,
    name: "Hoàng Gia Phở Thịt Gà",
    flavor: "120g",
    image: "/images/products/Gao/hoang_gia_pho_thit_ga_120g.png",
    description: "Phở gà cao cấp với thịt gà thật",
    link: "/products/pho/hoang-gia-ga-120g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 6,
    name: "Phở Trộn Long Triều Hải",
    flavor: "Spicy",
    image: "/images/products/pho_tron_long_trieu_hai.png",
    description: "Phở trộn với hương vị hải sản cay",
    link: "/products/pho/tron-long-trieu-hai",
    category: CATEGORIES.PACKET,
  },
  {
    id: 7,
    name: "Phở Có Gói Xốt Thịt Vị Gà",
    flavor: "70g",
    image: "/images/products/pho_co_goi_xot_thit_vi_ga.png",
    description: "Phở có gói xốt thịt vị gà",
    link: "/products/pho/co-goi-xot-thit-vi-ga",
    category: CATEGORIES.PACKET,
  },
  {
    id: 8,
    name: "Phở Thịt Gà Tô",
    flavor: "120g",
    image: "/images/products/pho_thit_ga_to_120g.png",
    description: "Phở thịt gà tô 120g",
    link: "/products/pho/thit-ga-to-120g",
    category: CATEGORIES.BOWL,
  },
  {
    id: 9,
    name: "Phở Trộn Long Triều Bò",
    flavor: "Beef",
    image: "/images/products/pho_tron_long_trieu_bo.png",
    description: "Phở trộn với hương vị bò",
    link: "/products/pho/tron-long-trieu-bo",
    category: CATEGORIES.PACKET,
  },
  {
    id: 10,
    name: "Phở Có Gói Xốt Thịt Vị Bò",
    flavor: "70g",
    image: "/images/products/pho_co_goi_xot_thit_vi_bo.png",
    description: "Phở có gói xốt thịt vị bò",
    link: "/products/pho/co-goi-xot-thit-vi-bo",
    category: CATEGORIES.BOWL,
  },
  {
    id: 11,
    name: "Phở Thịt Bò Tô",
    flavor: "120g",
    image: "/images/products/pho_thit_bo_to_120g.png",
    description: "Phở thịt bò tô 120g",
    link: "/products/pho/thit-bo-to-120g",
    category: CATEGORIES.BOWL,
  },
  {
    id: 12,
    name: "Phở Long Triều Vị Gà",
    flavor: "Chicken",
    image: "/images/products/pho_long_trieu_vi_ga.png",
    description: "Phở long triều vị gà",
    link: "/products/pho/long-trieu-vi-ga",
    category: CATEGORIES.PACKET,
  },
  {
    id: 13,
    name: "Phở Long Triều Vị Bò",
    flavor: "Beef",
    image: "/images/products/pho_long_trieu_vi_bo.png",
    description: "Phở long triều vị bò",
    link: "/products/pho/long-trieu-vi-bo",
    category: CATEGORIES.PACKET,
  },
  {
    id: 14,
    name: "Phở Đũa Gạo Lứt",
    flavor: "200g",
    image: "/images/products/pho_dua_gao_lut_200g.png",
    description: "Phở đũa gạo lứt 200g",
    link: "/products/pho/dua-gao-lut-200g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 15,
    name: "Phở Đũa Khoai Lang",
    flavor: "200g",
    image: "/images/products/pho_dua_khoai_lang_200g.png",
    description: "Phở đũa khoai lang 200g",
    link: "/products/pho/dua-khoai-lang-200g",
    category: CATEGORIES.PACKET,
  },
  {
    id: 16,
    name: "Cháo Thịt Gà",
    flavor: "70g",
    image: "/images/products/chao_thit_ga_70g.png",
    description: "Cháo thịt gà 70g",
    link: "/products/chao/thit-ga-70g",
    category: CATEGORIES.CUP,
  },
];

const PRODUCTS_PER_PAGE = 16;

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
    id: CATEGORIES.DISH,
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

const Gao = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProducts = selectedCategory
    ? riceProducts.filter((product) => product.category === selectedCategory)
    : riceProducts;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  function handlePageChange(arg0: number): void {
    throw new Error("Function not implemented.");
  }

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
                onClick={() => handlePageChange(index + 1)}
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

export default Gao;
