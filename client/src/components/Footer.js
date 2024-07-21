import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaApple, FaGooglePlay } from 'react-icons/fa'; // Thêm FaApple và FaGooglePlay
import { SiZalo } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">4 MEN</h2>
                        <p>Địa chỉ: Xã Tân Hải, Duy Tiên, Hà Nam</p>
                        <p>Số điện thoại: 0999 999 999</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Liên Hệ</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                    <FaFacebook className="text-2xl mr-2" /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                    <SiZalo className="text-2xl mr-2" /> Zalo
                                </a>
                            </li>
                            <li>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                    <FaTiktok className="text-2xl mr-2" /> TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                    <FaInstagram className="text-2xl mr-2" /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Hỗ Trợ Khách Hàng</h2>
                        <ul>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Chính Sách Thành Viên</a></li>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Chính Sách Đổi Hàng</a></li>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Chính Sách Bảo Hành</a></li>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Hướng Dẫn Mua Hàng</a></li>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Hướng Dẫn Chọn Size</a></li>
                            <li className="mb-2"><a href="http://localhost:3000/" className="hover:underline">Câu Hỏi Thường Gặp</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Đăng Kí Nhận Tin Khuyến Mãi</h2>
                        <form className="flex flex-col">
                            <input type="email" placeholder="Nhập email của bạn" className="p-2 mb-2 rounded text-black" />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </form>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Tải App</h2>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <FaApple className="text-2xl mr-2" /> <a href="http://localhost:3000/" className="hover:underline">App - iOS App Store</a>
                            </li>
                            <li className="flex items-center">
                                <FaGooglePlay className="text-2xl mr-2" /> <a href="http://localhost:3000/" className="hover:underline">App - Google Play Store</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
