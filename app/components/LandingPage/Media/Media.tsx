"use client";

import Link from "next/link";
import Image from "next/image";

const mediaItems = [
  {
    title: "Tin Tức & Sự Kiện",
    image: "/images/news-events.jpg",
    link: "/tin-tuc-su-kien",
  },
  {
    title: "Khuyến Mãi",
    image: "/images/promotions.jpg",
    link: "/khuyen-mai",
  },
  {
    title: "Tin Tức Cổ Đông",
    image: "/images/shareholders.jpg",
    link: "/tin-tuc-co-dong",
  },
];

const Media = () => {
  return (
    <section className="py-12 bg-[#FBECD7] w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[--primary-green] text-5xl font-bold mb-8">
          TRUYỀN THÔNG & KHUYẾN MÃI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="relative group overflow-hidden rounded-lg">
                {/* Image Container */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src="https://vifon.com.vn/vnt_upload/news/09_2019/thumbs/370_crop_1.jpg"
                    alt="Tin Tức & Sự Kiện"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                </div>

                {/* Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="w-full h-[2px] bg-white mb-3 relative overflow-hidden group-hover:bg-transparent">
                      <div className="absolute inset-0 bg-[--primary-green] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </div>
                    <h3 className="text-white text-3xl font-bold text-center px-4">
                      {item.title}
                    </h3>
                    <div className="w-full h-[2px] bg-white mt-3 relative overflow-hidden group-hover:bg-transparent">
                      <div className="absolute inset-0 bg-[--primary-green] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
};

export default Media;
