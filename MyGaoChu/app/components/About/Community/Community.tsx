import React from "react";
import Image from "next/image";
import Link from "next/link";

const communityEvents = [
  {
    title:
      "VIFON ỦNG HỘ HƠN 35.000 GÓI SẢN PHẨM CHO CÔNG TÁC PHÒNG CHỐNG DỊCH COVID-19",
    date: "02 Tháng 07 2020",
    image: "/images/community/covid-support.jpg",
    link: "/community/covid-support",
  },
  {
    title: 'VIFON TỔ CHỨC "ĐÊM HỘI TRĂNG RẰM" CHO CON EM CÁN BỘ CÔNG NHÂN VIÊN',
    date: "27 Tháng 08 2015",
    image: "/images/community/mid-autumn.jpg",
    link: "/community/mid-autumn",
  },
  {
    title: 'VIFON HÒA CHUNG DÒNG CHẢY "GỬI YÊU THƯƠNG VỀ VÙNG LŨ MIỀN TRUNG"',
    date: "08 Tháng 11 2018",
    image: "/images/community/flood-support.jpg",
    link: "/community/flood-support",
  },
  {
    title:
      "VIFON CHUNG TAY KHẮC PHỤC CƠN BÃO SỐ 12, HỖ TRỢ 1000 THÙNG MÌ ĂN LIỀN, PHỞ ĂN LIỀN",
    date: "12 Tháng 08 2015",
    image: "/images/community/storm-support.jpg",
    link: "/community/storm-support",
  },
  {
    title: "VIFON ĐỒNG HÀNH CÙNG QUỸ HỌC BỔNG VỪ A DÍNH",
    date: "05 Tháng 08 2015",
    image: "/images/community/scholarship.jpg",
    link: "/community/scholarship",
  },
];

const Community = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner with Image Overlay */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/about/about_banner_commu.png"
          alt="VIFON Community"
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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[--primary-green] mb-4">
            HOẠT ĐỘNG CỘNG ĐỒNG
          </h2>
          <div className="w-[400px] h-[2px] bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VIFON luôn đặt trách nhiệm xã hội lên hàng đầu, tích cực tham gia
            các hoạt động từ thiện và phát triển cộng đồng bền vững.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {communityEvents.map((event, index) => (
            <Link
              href={event.link}
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-[--primary-green] font-semibold mb-3">
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-[--primary-green] transition-colors">
                  {event.title}
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

        {/* Social Responsibility Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-10">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[--primary-green] mb-6">
              Trách Nhiệm Xã Hội
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>
                  Tích cực tham gia các hoạt động từ thiện và hỗ trợ cộng đồng
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>
                  Đóng góp vào sự phát triển của giáo dục và y tế địa phương
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>Hỗ trợ người dân vùng khó khăn và thiên tai</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg ">
            <h3 className="text-2xl font-bold text-[--primary-green] mb-6">
              Phát Triển Bền Vững
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>Cam kết bảo vệ môi trường trong sản xuất</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>
                  Tạo việc làm và phát triển nguồn nhân lực địa phương
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[--primary-green] rounded-full mt-2"></span>
                <span>Đầu tư vào công nghệ sạch và tiết kiệm năng lượng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
