import React from "react";
import Image from "next/image";
import Link from "next/link";

const seasoningProducts = [
  {
    id: 1,
    name: "Bột Canh",
    type: "900gr",
    image: "/images/products/gia-vi/bot-canh-900g.jpg",
    link: "/products/gia-vi/bot-canh-900g",
  },
  {
    id: 2,
    name: "Bột Canh",
    type: "450gr",
    image: "/images/products/gia-vi/bot-canh-450g.jpg",
    link: "/products/gia-vi/bot-canh-450g",
  },
  {
    id: 3,
    name: "Bột Canh",
    type: "200gr",
    image: "/images/products/gia-vi/bot-canh-200g.jpg",
    link: "/products/gia-vi/bot-canh-200g",
  },
  {
    id: 4,
    name: "Bột Canh Nấm",
    type: "200gr",
    image: "/images/products/gia-vi/bot-canh-nam-200g.jpg",
    link: "/products/gia-vi/bot-canh-nam-200g",
  },
  {
    id: 5,
    name: "Bột Canh Tôm",
    type: "200gr",
    image: "/images/products/gia-vi/bot-canh-tom-200g.jpg",
    link: "/products/gia-vi/bot-canh-tom-200g",
  },
  {
    id: 6,
    name: "Bột Canh I-ốt",
    type: "200gr",
    image: "/images/products/gia-vi/bot-canh-iot-200g.jpg",
    link: "/products/gia-vi/bot-canh-iot-200g",
  },
  {
    id: 7,
    name: "Bột Canh I-ốt",
    type: "900g",
    image: "/images/products/gia-vi/bot-canh-iot-900g.jpg",
    link: "/products/gia-vi/bot-canh-iot-900g",
  },
  {
    id: 8,
    name: "Bột Canh I-ốt",
    type: "180g",
    image: "/images/products/gia-vi/bot-canh-iot-180g.jpg",
    link: "/products/gia-vi/bot-canh-iot-180g",
  },
  {
    id: 9,
    name: "Bột Canh Tôm",
    type: "10g",
    image: "/images/products/gia-vi/bot-canh-tom-10g.jpg",
    link: "/products/gia-vi/bot-canh-tom-10g",
  },
  {
    id: 10,
    name: "Tương Ớt Vị Cay Bùng Nổ",
    type: "Tương Ớt",
    image: "/images/products/gia-vi/tuong-ot-cay-bung-no.jpg",
    link: "/products/gia-vi/tuong-ot-cay-bung-no",
  },
  {
    id: 11,
    name: "Tương Ớt",
    type: "560g",
    image: "/images/products/gia-vi/tuong-ot-560g.jpg",
    link: "/products/gia-vi/tuong-ot-560g",
  },
  {
    id: 12,
    name: "Tương Ớt",
    type: "260g",
    image: "/images/products/gia-vi/tuong-ot-260g.jpg",
    link: "/products/gia-vi/tuong-ot-260g",
  },
  {
    id: 13,
    name: "Tương Ớt",
    type: "135g",
    image: "/images/products/gia-vi/tuong-ot-135g.jpg",
    link: "/products/gia-vi/tuong-ot-135g",
  },
  {
    id: 14,
    name: "Nước Tương Đậu Nành",
    type: "Nước Tương",
    image: "/images/products/gia-vi/nuoc-tuong-dau-nanh.jpg",
    link: "/products/gia-vi/nuoc-tuong-dau-nanh",
  },
  {
    id: 15,
    name: "Nước Chấm Đậu Nành",
    type: "Nước Chấm",
    image: "/images/products/gia-vi/nuoc-cham-dau-nanh.jpg",
    link: "/products/gia-vi/nuoc-cham-dau-nanh",
  },
  {
    id: 16,
    name: "Nước chấm cá cơm",
    type: "900mlx15",
    image: "/images/products/gia-vi/nuoc-cham-ca-com.jpg",
    link: "/products/gia-vi/nuoc-cham-ca-com",
  },
];

const GiaVi = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/products/banners/gia_vi_banner.jpg"
          alt="VIFON Gia Vị"
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

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[--primary-green] mb-4">
            GIA VỊ VIFON
          </h2>
          <div className="w-[400px] h-[2px] bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đa dạng các loại gia vị cho món ăn thêm đậm đà
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seasoningProducts.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-[--primary-green] font-semibold mb-2">
                  {product.type}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[--primary-green] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center text-[--primary-green] font-semibold group-hover:translate-x-2 transition-transform">
                  XEM CHI TIẾT
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <span className="text-[--primary-green] font-bold">Trang</span>
          <span className="text-[--primary-green] font-bold">1</span>
          <span className="text-gray-400">2</span>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </div>
  );
};

export default GiaVi;
