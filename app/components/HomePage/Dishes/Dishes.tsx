"use client";

import Link from "next/link";
import Image from "next/image";

const dishCategories = [
  {
    title: "MÓN KHAI VỊ",
    count: "5 món",
    image: "/images/dishes/Khai_vi.png",
    link: "/mon-khai-vi",
  },
  {
    title: "MÓN CANH - HẤP - LUỘC",
    count: "6 món",
    image: "/images/dishes/Canh_hap_luoc.png",
    link: "/mon-canh-hap-luoc",
  },
  {
    title: "MÓN KHO XÀO",
    count: "8 món",
    image: "/images/dishes/Mon_kho_xao.png",
    link: "/mon-kho-xao",
  },
  {
    title: "MÓN CHIÊN - NƯỚNG",
    count: "4 món",
    image: "/images/dishes/Mon_chien_nuong.png",
    link: "/mon-chien-nuong",
  },
];

const Dishes = () => {
  return (
    <section className="relative py-12 w-full">
      {/* Background Images */}
      <div
        className="absolute inset-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://vifon.com.vn/modules/main/images/main/bg-top.jpg)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://vifon.com.vn/modules/main/images/main/bg-bottom.jpg)",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <style jsx>{`
          .container {
            max-width: 1200px;
            height: 800px;
          }
        `}</style>
        <h2 className="text-center text-[--primary-green] text-5xl font-bold my-8">
          MÓN NGON CÙNG VIFON
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {dishCategories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="relative group overflow-hidden rounded-lg border-8 border-white shadow-lg bg-white">
                {/* Image Container */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-bold text-center mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-base drop-shadow-lg">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 font-extrabold">
          <Link
            href="/tat-ca-mon-an"
            className="inline-flex items-center justify-center font-extrabold text-2xl px-8 py-1 border-2 border-[--primary-green] text-[--primary-green] rounded-2xl hover:bg-[--primary-green] hover:text-white transition-colors duration-300 bg-white"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
