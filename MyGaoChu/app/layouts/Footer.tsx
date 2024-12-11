"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ROUTES } from "@/lib/constants/routes";

const countries = [
  {
    code: "vn",
    name: "VIỆT NAM",
    flagSrc: "/images/flags/Vie_flag.svg",
  },
  { code: "pl", name: "BA LAN", flagSrc: "/images/flags/Po_flag.svg" },
  { code: "cz", name: "CỘNG HÒA SÉC", flagSrc: "/images/flags/Czech_flag.svg" },
  { code: "de", name: "ĐỨC", flagSrc: "/images/flags/Germany_flag.png" },
  { code: "ru", name: "NGA", flagSrc: "/images/flags/Russia_flag.svg" },
  { code: "sk", name: "SLOVAKIA", flagSrc: "/images/flags/Slovakia_flag.png" },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <footer className="bg-[--primary-green] text-white py-8 relative w-full h-[785px]">
      <div className="container mx-auto px-4 flex justify-center items-center mb-8">
        <div className="relative w-[220px] h-[190px]">
          <Image
            src="/images/logo.png"
            alt="My Gao Chu Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="text-xl font-extrabold flex flex-wrap justify-center text-center gap-x-4 mb-8">
        <Link href={ROUTES.ABOUT.INTRODUCTION} className="hover:underline">
          VỀ VIFON
        </Link>
        <span>•</span>
        <Link href={ROUTES.PRODUCTS.ROOT} className="hover:underline">
          SẢN PHẨM
        </Link>
        <span>•</span>
        <Link href="/cua-hang-vifon" className="hover:underline">
          CỬA HÀNG VIFON
        </Link>
        <span>•</span>
        <Link href="/truyen-thong-khuyen-mai" className="hover:underline">
          TRUYỀN THÔNG & KHUYẾN MÃI
        </Link>
      </div>

      <div className="text-xl font-extrabold flex flex-wrap justify-center text-center gap-x-4 mb-12">
        <Link href="/bep-vifon" className="hover:underline">
          BẾP VIFON
        </Link>
        <span>•</span>
        <Link href="/thu-vien-vifon" className="hover:underline">
          THƯ VIỆN VIFON
        </Link>
        <span>•</span>
        <Link href="/nghe-nghiep" className="hover:underline">
          NGHỀ NGHIỆP
        </Link>
        <span>•</span>
        <Link href="/lien-he" className="hover:underline">
          LIÊN HỆ
        </Link>
        <span>•</span>
        <Link href="/an-toan-thuc-pham" className="hover:underline">
          AN TOÀN THỰC PHẨM
        </Link>
      </div>

      {/* Website Selection */}
      <div className="text-center mb-8">
        <div className="border-t border-dashed border-white/30 w-full my-8"></div>
        <p className="mb-4 text-2xl font-medium">
          Ghé thăm các website khác của VIFON
        </p>
        <div className="relative inline-block">
          {/* Dropdown Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white text-gray-700 w-[300px] py-1.5 px-4 rounded flex items-center justify-between border border-gray-300"
          >
            <div className="flex items-center gap-3">
              <Image
                src={selectedCountry.flagSrc}
                alt=""
                width={20}
                height={14}
                className="object-contain"
              />
              <span className="text-base">{selectedCountry.name}</span>
            </div>
            <span
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`
                absolute top-full left-0 w-full bg-white rounded-b border border-t-0 
                border-gray-300 shadow-lg z-50 transition-all duration-200 origin-top
                ${
                  isOpen
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 invisible"
                }
              `}
          >
            {countries.map((country, index) => (
              <div
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                className={`
                    flex items-center gap-3 px-4 py-1.5 hover:bg-gray-100 
                    cursor-pointer border-b border-gray-200 last:border-b-0
                    transition-opacity duration-200
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <Image
                  src={country.flagSrc}
                  alt=""
                  width={20}
                  height={14}
                  className="object-contain"
                />
                <span className="text-gray-700 text-base">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="text-center">
        <h3 className="font-bold mb-4">
          CÔNG TY CỔ PHẦN KỸ NGHỆ THỰC PHẨM VIỆT NAM (VIFON)
        </h3>
        <p className="mb-2">
          913 Trường Chinh, P. Tây Thạnh, Q. Tân Phú, Tp HCM
        </p>
        <p className="mb-2">
          Lô đất CN8, KCN Tân Trường, X. Tân Trường, H. Cẩm Giàng, Tỉnh Hải
          Dương
        </p>
        <p className="mb-4">Hotline: 1800-1097</p>
        <p>© 2019 by VIFON. All right reserved.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-end mt-2">
        <Link href="/" className="mx-2">
          <Image
            src="/images/Facebook_Icon.svg"
            alt="Facebook"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/" className="mx-2 mt-1">
          <Image
            src="/images/YouTube_Icon.svg"
            alt="YouTube"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
