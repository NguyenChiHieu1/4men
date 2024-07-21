const Advertisement = require("../models/Advertisement");
const cloudinary = require('../config/cloudinary.config.js')

function extractPublicId(url) {
    const prefix = `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/`;
    let publicId = url.replace(prefix, ''); // Loại bỏ phần tiền tố URL
    publicId = publicId.replace(/v\d+\/(.+)\.\w+$/, '$1'); // Loại bỏ phần tiền tố phiên bản và phần mở rộng tệp
    return publicId;
}

class Advertise {
    async getAdver(req, res) {
        try {
            const response = await Advertisement.find();
            return res.status(200).json({ success: true, data: response });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi khi lấy quảng cáo',
                error: error.message
            });
        }
    }

    async createAdver(req, res) {
        try {
            const { title } = req.body
            const image = req.file;

            if (!title || !req.file) { return res.status(400).json({ success: false, message: "Missing input" }, { new: true }); }
            const response = await Advertisement.create({ title: title, image: image.path });
            if (response) {
                return res.status(200).json({
                    success: true,
                    createAdvertise: response,
                    message: "Create advertisements success @_@!!!"
                });
            } else {
                return res.status(400).json({ success: false, message: "error upload image" });
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };

    async deleteAdver(req, res) {
        try {
            const { pid } = req.params;

            // Tìm kiếm quảng cáo theo ID
            const findIdAdver = await Advertisement.findById(pid);
            if (!findIdAdver) {
                throw new Error('Not find advertise');
            }
            console.log(findIdAdver);

            const publicId = extractPublicId(findIdAdver.image);

            // Kiểm tra sự tồn tại của ảnh trước khi xóa
            const resource = await cloudinary.api.resource(publicId);
            console.log('Tài nguyên tồn tại:', resource);

            // Xóa ảnh
            const delResult = await cloudinary.uploader.destroy(publicId);
            console.log('Kết quả:', delResult);

            // Xóa quảng cáo từ cơ sở dữ liệu
            const findAdver = await Advertisement.findByIdAndDelete(pid, { new: true });
            if (!delResult || !findAdver) {
                return res.status(400).json({ success: true, message: "Delete error" });
            } else {
                return res.status(200).json({ success: true, message: "Delete success @_@" });
            }
        } catch (error) {
            console.error('Lỗi khi xử lý yêu cầu:', error);
            return res.status(500).json({ success: false, message: error.message });
        }
    };


}
module.exports = new Advertise();