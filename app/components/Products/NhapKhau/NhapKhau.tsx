import Link from "next/link";

const importedProducts = [
  {
    id: 1,
    name: "Mì Ramen TOKYOTO",
    type: "Mì Nhật",
    image: "/images/products/nhap-khau/mi-ramen-tokyoto.jpg",
    link: "/products/nhap-khau/mi-ramen-tokyoto",
  },
  {
    id: 2,
    name: "Mì Soba TOKYOTO",
    type: "Mì Nhật",
    image: "/images/products/nhap-khau/mi-soba-tokyoto.jpg",
    link: "/products/nhap-khau/mi-soba-tokyoto",
  },
  {
    id: 3,
    name: "Trà Hương Sen",
    type: "100G",
    image: "/images/products/nhap-khau/tra-huong-sen.jpg",
    link: "/products/nhap-khau/tra-huong-sen",
  },
  {
    id: 4,
    name: "Trà Hoa Nhài",
    type: "100G",
    image: "/images/products/nhap-khau/tra-hoa-nhai.jpg",
    link: "/products/nhap-khau/tra-hoa-nhai",
  },
  {
    id: 5,
    name: "Trà Xanh",
    type: "100G",
    image: "/images/products/nhap-khau/tra-xanh.jpg",
    link: "/products/nhap-khau/tra-xanh",
  },
  {
    id: 6,
    name: "Cà Phê Gold",
    type: "Hảo Hạng",
    image: "/images/products/nhap-khau/ca-phe-gold.jpg",
    link: "/products/nhap-khau/ca-phe-gold",
  },
  {
    id: 7,
    name: "Rượu Vodka",
    type: "Polish",
    image: "/images/products/nhap-khau/ruou-vodka-polish.jpg",
    link: "/products/nhap-khau/ruou-vodka-polish",
  },
  {
    id: 8,
    name: "Oliu Kalamata",
    type: "Ngâm 350G",
    image: "/images/products/nhap-khau/oliu-kalamata.jpg",
    link: "/products/nhap-khau/oliu-kalamata",
  },
  {
    id: 9,
    name: "Oliu Xanh",
    type: "Nhồi Tỏi Ngâm",
    image: "/images/products/nhap-khau/oliu-xanh-toi.jpg",
    link: "/products/nhap-khau/oliu-xanh-toi",
  },
  {
    id: 10,
    name: "Dầu Oliu",
    type: "Nguyên Chất",
    image: "/images/products/nhap-khau/dau-oliu.jpg",
    link: "/products/nhap-khau/dau-oliu",
  },
  {
    id: 11,
    name: "Sữa Dê",
    type: "500Ml",
    image: "/images/products/nhap-khau/sua-de-500ml.jpg",
    link: "/products/nhap-khau/sua-de",
  },
  {
    id: 12,
    name: "Sữa Tươi Tiệt Trùng",
    type: "Nguyên",
    image: "/images/products/nhap-khau/sua-tuoi-nguyen.jpg",
    link: "/products/nhap-khau/sua-tuoi-nguyen",
  },
  {
    id: 13,
    name: "Bún Gạo",
    type: "TaoTao 200g",
    image: "/images/products/nhap-khau/bun-gao-taotao.jpg",
    link: "/products/nhap-khau/bun-gao-taotao",
  },
  {
    id: 14,
    name: "Dầu Hào",
    type: "150ml",
    image: "/images/products/nhap-khau/dau-hao-150ml.jpg",
    link: "/products/nhap-khau/dau-hao",
  },
  {
    id: 15,
    name: "Nước Tương",
    type: "Đen 150ml",
    image: "/images/products/nhap-khau/nuoc-tuong-den.jpg",
    link: "/products/nhap-khau/nuoc-tuong-den",
  },
  {
    id: 16,
    name: "Tương Ớt Cay",
    type: "Ngọt 200g",
    image: "/images/products/nhap-khau/tuong-ot-cay-ngot.jpg",
    link: "/products/nhap-khau/tuong-ot-cay-ngot",
  },
];

const NhapKhau = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px]">
        <img
          src="/images/products/banners/nhap_khau_banner.jpg"
          alt="VIFON Sản Phẩm Nhập Khẩu"
          className="object-cover pt-2 w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <img
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
            SẢN PHẨM NHẬP KHẨU
          </h2>
          <div className="w-[400px] h-[2px] bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đa dạng các sản phẩm nhập khẩu chất lượng cao từ nhiều quốc gia
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {importedProducts.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={1920}
                  height={1080}
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

export default NhapKhau;
