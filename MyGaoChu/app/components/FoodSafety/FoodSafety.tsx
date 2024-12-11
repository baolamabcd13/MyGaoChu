"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items
const navItems = [
  { title: "CHÍNH SÁCH", href: "/food-safety/policy" },
  { title: "CÔNG BỐ", href: "/food-safety/certification" },
];

// Data mẫu cho chính sách
const policyData = {
  title: "Chính Sách An Toàn Thực Phẩm",
  intro:
    "Chúng tôi cam kết đảm bảo an toàn thực phẩm trong toàn bộ quy trình sản xuất và phân phối sản phẩm.",
  policies: [
    {
      id: 1,
      title: "Nguyên Liệu",
      content:
        "Lựa chọn nguyên liệu chất lượng cao từ các nhà cung cấp uy tín, có đầy đủ chứng nhận an toàn.",
      icon: "/images/food-safety/ingredients-icon.svg",
    },
    {
      id: 2,
      title: "Quy Trình Sản Xuất",
      content:
        "Áp dụng quy trình sản xuất nghiêm ngặt theo tiêu chuẩn GMP, HACCP và ISO 22000.",
      icon: "/images/food-safety/production-icon.svg",
    },
    {
      id: 3,
      title: "Kiểm Soát Chất Lượng",
      content:
        "Kiểm tra chất lượng sản phẩm tại mọi công đoạn, từ nguyên liệu đến thành phẩm.",
      icon: "/images/food-safety/quality-icon.svg",
    },
    {
      id: 1,
      title: "Nguyên Liệu",
      content:
        "Lựa chọn nguyên liệu chất lượng cao từ các nhà cung cấp uy tín, có đầy đủ chứng nhận an toàn.",
      icon: "/images/food-safety/ingredients-icon.svg",
    },
    {
      id: 2,
      title: "Quy Trình Sản Xuất",
      content:
        "Áp dụng quy trình sản xuất nghiêm ngặt theo tiêu chuẩn GMP, HACCP và ISO 22000.",
      icon: "/images/food-safety/production-icon.svg",
    },
    {
      id: 3,
      title: "Kiểm Soát Chất Lượng",
      content:
        "Kiểm tra chất lượng sản phẩm tại mọi công đoạn, từ nguyên liệu đến thành phẩm.",
      icon: "/images/food-safety/quality-icon.svg",
    },
    {
      id: 1,
      title: "Nguyên Liệu",
      content:
        "Lựa chọn nguyên liệu chất lượng cao từ các nhà cung cấp uy tín, có đầy đủ chứng nhận an toàn.",
      icon: "/images/food-safety/ingredients-icon.svg",
    },
    {
      id: 2,
      title: "Quy Trình Sản Xuất",
      content:
        "Áp dụng quy trình sản xuất nghiêm ngặt theo tiêu chuẩn GMP, HACCP và ISO 22000.",
      icon: "/images/food-safety/production-icon.svg",
    },
    {
      id: 3,
      title: "Kiểm Soát Chất Lượng",
      content:
        "Kiểm tra chất lượng sản phẩm tại mọi công đoạn, từ nguyên liệu đến thành phẩm.",
      icon: "/images/food-safety/quality-icon.svg",
    },
  ],
};

// Data mẫu cho chứng nhận
const certificationData = {
  title: "Chứng Nhận An Toàn Thực Phẩm",
  intro:
    "Chúng tôi tự hào đạt được các chứng nhận an toàn thực phẩm quan trọng từ các tổ chức uy tín.",
  certificates: [
    {
      id: 1,
      name: "ISO 22000:2018",
      description: "Chứng nhận Hệ thống quản lý an toàn thực phẩm",
      image: "/images/food-safety/iso22000.jpg",
      issueDate: "2024",
    },
    {
      id: 2,
      name: "HACCP",
      description:
        "Chứng nhận Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn",
      image: "/images/food-safety/haccp.jpg",
      issueDate: "2024",
    },
    {
      id: 3,
      name: "GMP",
      description: "Chứng nhận Thực hành sản xuất tốt",
      image: "/images/food-safety/gmp.jpg",
      issueDate: "2024",
    },
    {
      id: 1,
      name: "ISO 22000:2018",
      description: "Chứng nhận Hệ thống quản lý an toàn thực phẩm",
      image: "/images/food-safety/iso22000.jpg",
      issueDate: "2024",
    },
    {
      id: 2,
      name: "HACCP",
      description:
        "Chứng nhận Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn",
      image: "/images/food-safety/haccp.jpg",
      issueDate: "2024",
    },
    {
      id: 3,
      name: "GMP",
      description: "Chứng nhận Thực hành sản xuất tốt",
      image: "/images/food-safety/gmp.jpg",
      issueDate: "2024",
    },
    {
      id: 1,
      name: "ISO 22000:2018",
      description: "Chứng nhận Hệ thống quản lý an toàn thực phẩm",
      image: "/images/food-safety/iso22000.jpg",
      issueDate: "2024",
    },
    {
      id: 2,
      name: "HACCP",
      description:
        "Chứng nhận Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn",
      image: "/images/food-safety/haccp.jpg",
      issueDate: "2024",
    },
    {
      id: 3,
      name: "GMP",
      description: "Chứng nhận Thực hành sản xuất tốt",
      image: "/images/food-safety/gmp.jpg",
      issueDate: "2024",
    },
  ],
};

const ITEMS_PER_PAGE = 6; // Số lượng items trên mỗi trang

// Đổi tên function type guard
const isPolicyItem = (item: any): item is (typeof policyData.policies)[0] => {
  return "icon" in item;
};

const isCertificationItem = (
  item: any
): item is (typeof certificationData.certificates)[0] => {
  return "image" in item;
};

const FoodSafety = () => {
  const pathname = usePathname();
  const isPolicyPage = pathname === "/food-safety/policy"; // Đổi tên biến boolean
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán items cho trang hiện tại
  const currentItems = isPolicyPage
    ? policyData.policies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : certificationData.certificates.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );

  // Tính tổng số trang
  const totalPages = Math.ceil(
    (isPolicyPage
      ? policyData.policies.length
      : certificationData.certificates.length) / ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white">
      {/* Hero Banner with Image Overlay */}
      <div className="relative w-full h-[330px]">
        <Image
          src="/images/foodsafety.png"
          alt="VIFON Food Safety"
          fill
          className="object-cover pt-2"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src="/images/about/about_slide.png"
            alt="Decorative overlay"
            width={1920}
            height={100}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
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
          {pathname === "/food-safety/policy" ? (
            <div>
              <h1 className="text-4xl font-bold text-[--primary-green] mb-6">
                {policyData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-12">{policyData.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentItems.map((item) => {
                  if (isPolicyItem(item)) {
                    // Sử dụng tên mới
                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 relative flex-shrink-0">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[--primary-green] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ) : (
            // Công bố Content
            <div>
              <h1 className="text-4xl font-bold text-[--primary-green] mb-6">
                {certificationData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                {certificationData.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentItems.map((item) => {
                  if (isCertificationItem(item)) {
                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden group"
                      >
                        <div className="relative h-48">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[--primary-green] mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            Cấp năm: {item.issueDate}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodSafety;
