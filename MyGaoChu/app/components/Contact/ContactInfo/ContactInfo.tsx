"use client";

import React, { useState } from "react";

interface ContactFormData {
  name: string;
  contact: string;
  message: string;
}

const ContactInfo = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white w-full min-h-screen absolute top-0 left-0 pt-20">
      <div className="container mx-auto px-4 py-12 pt-32">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Information Box */}
          <div className="md:w-1/3">
            <div className="border-2 border-gray-300 rounded-lg p-8">
              {/* Business Contact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">LIÊN HỆ KINH DOANH</h3>
                <div className="space-y-2">
                  <p>Email: vifon@vifon.com.vn</p>
                  <p>Hotline: 1800 - 1097</p>
                </div>
              </div>

              {/* Export Contact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">LIÊN HỆ P.XUẤT KHẨU</h3>
                <div className="space-y-2">
                  <p>Email: export@vifon.com.vn</p>
                  <p>Hotline: +8428 38 153 933 - Ext:134</p>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-bold mb-4">THỜI GIAN LÀM VIỆC</h3>
                <p>Thứ 2 - Thứ 6: 8AM - 5PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-8">
              Mọi thắc mắc vui lòng gửi tin nhắn cho chúng tôi
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Họ tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ tên"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[--primary-green]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email/Sđt</label>
                <input
                  type="text"
                  placeholder="Nhập Email hoặc Sđt"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[--primary-green]"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tin nhắn</label>
                <textarea
                  placeholder="Nhập nội dung tin nhắn"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[--primary-green]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* reCAPTCHA */}
              <div className="mb-6">{/* Add reCAPTCHA component here */}</div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-white text-[--primary-green] border-2 border-[--primary-green] px-12 py-2 rounded-full hover:bg-[--primary-green] hover:text-white transition-colors"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
