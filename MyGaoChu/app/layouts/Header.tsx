"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/constants/routes";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === "/";
  const headerStyles = {
    background: isHomePage ? "bg-white" : "bg-[--primary-green]",
    text: isHomePage ? "text-[--primary-green]" : "text-white",
  };

  useLayoutEffect(() => {
    setMounted(true);
    setIsOpen(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const menuClasses = `fixed inset-0 z-40 transition-all duration-300 
    ${isScrolled ? "pt-[64px]" : "pt-[120px]"}
    ${isOpen ? "animate-slideDown" : "animate-slideUp"}
    ${!mounted || !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 
          ${isScrolled ? "h-[64px]" : "h-[120px]"}
          ${headerStyles.background}`}
      >
        <div
          className={`container mx-auto h-full flex items-center justify-between px-0 transition-all duration-300 
            ${isScrolled ? "py-0" : "py-9"}`}
        >
          <div className="flex items-center h-full">
            <div
              ref={buttonRef}
              className="flex items-center h-full cursor-pointer"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className={`w-14 h-14 ${headerStyles.text}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className={`w-14 h-14 ${headerStyles.text}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
              <span className={`font-bold text-3xl ml-2 ${headerStyles.text}`}>
                MENU
              </span>
            </div>
          </div>
          <div className="logo absolute left-1/2 transform -translate-x-1/2 flex items-center h-full">
            <Link href="" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={isScrolled ? 60 : 120}
                height={isScrolled ? 60 : 120}
                className="transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center h-full space-x-8">
            <div className="cursor-pointer">
              <svg
                className={`w-11 h-11 ${headerStyles.text}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className={`w-11 h-11 ${headerStyles.text}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/vie-flag.png"
                alt="Vietnam"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Menu overlay - positioned below header */}
      <div className={menuClasses}>
        <div
          ref={menuRef}
          className={`w-[560px] h-full bg-primary-green relative overflow-auto scrollbar ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <ul
            className={`flex flex-col text-2xl font-bold text-white ${
              isOpen ? "animate-slideInFromLeft" : "animate-slideOutToLeft"
            }`}
          >
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href={ROUTES.HOME}>TRANG CHỦ</Link>
            </li>

            {/* VỀ VIFON */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "about" ? "bg-[rgba(255,255,255,0.3)]" : ""
                }`}
                onClick={() => toggleSubmenu("about")}
              >
                <span>VỀ VIFON</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeSubmenu === "about" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "about" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-1xl font-extrabold font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.ABOUT.INTRODUCTION}>Giới Thiệu</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.ABOUT.HISTORY}>Lịch Sử</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.ABOUT.ACHIEVEMENTS}>Thành Tựu</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.ABOUT.COMMUNITY}>Cộng Đồng</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* SẢN PHẨM */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "products"
                    ? "bg-[rgba(255,255,255,0.3)]"
                    : ""
                }`}
                onClick={() => toggleSubmenu("products")}
              >
                <span>SẢN PHẨM</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeSubmenu === "products" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "products" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-1xl font-bold text-gray-700">
                  {/* <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.PRODUCTS.GAO}>Gạo</Link>
                  </li> */}
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.PRODUCTS.MI}>Mì Gạo Chũ</Link>
                  </li>
                  {/* <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.PRODUCTS.GIAVI}>Gia Vị</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.PRODUCTS.NHAPKHAU}>Nhập Khẩu</Link>
                  </li> */}
                </ul>
              </div>
            </li>

            {/* <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/cua-hang-vifonmart">CỬA HÀNG VIFONMART</Link>
            </li> */}

            {/* TRUYỀN THÔNG & KHUYẾN MÃI */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "media" ? "bg-[rgba(255,255,255,0.3)]" : ""
                }`}
                onClick={() => toggleSubmenu("media")}
              >
                <span>TRUYỀN THÔNG & KHUYẾN MÃI</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeSubmenu === "media" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "media" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-1xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.NEWS.EVENTS}>Tin Tức & Sự Kiện</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href={ROUTES.NEWS.PROMOTIONS}>Khuyến Mãi</Link>
                  </li>
                  {/* <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/tin-tuc-co-dong">Tin Tức Cổ Đông</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/them-gia-vi">Thêm Gia Vị Vào Cuộc Sống</Link>
                  </li> */}
                </ul>
              </div>
            </li>

            {/* BẾP VIFON */}
            {/* <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "kitchen"
                    ? "bg-[rgba(255,255,255,0.3)]"
                    : ""
                }`}
                onClick={() => toggleSubmenu("kitchen")}
              >
                <span>BẾP VIFON</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeSubmenu === "kitchen" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "kitchen" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-1xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("kitchen")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/gia-vi-yeu-thuong">Gia Vị Yêu Thương</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("kitchen")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/mon-ngon-cung-vifon">Món Ngon Cùng VIFON</Link>
                  </li>
                </ul>
              </div>
            </li> */}

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href={ROUTES.GALLERY.IMAGES}>THƯ VIỆN VIFON</Link>
            </li>

            {/* <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/nghe-nghiep">NGHỀ NGHIỆP</Link>
            </li> */}

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href={ROUTES.FOOD_SAFETY.POLICY}>AN TOÀN THỰC PHẨM</Link>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/lien-he">LIÊN HỆ</Link>
            </li>
            {/* Social media icons */}
            <div className="flex justify-center space-x-6 mt-12 pb-[30px]">
              <div>
                <Image
                  src="/images/Facebook_Icon.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <Image
                  src="/images/YouTube_Icon.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-10px);
            opacity: 0;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-in-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-in-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.8s ease-in-out forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-in-out forwards;
        }

        .animate-slideOutToLeft {
          animation: slideOutToLeft 0.8s ease-in-out forwards;
        }

        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: white transparent;
        }

        .scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar::-webkit-scrollbar-thumb {
          background-color: white;
          border: 10px solid black;
        }
      `}</style>
    </>
  );
};

export default NavBar;
