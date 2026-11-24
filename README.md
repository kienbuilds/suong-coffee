# Sương · Cà phê rang mỗi sáng

Landing page mẫu cho một quán cà phê giả định, dựng bằng skill
[scroll-craft](https://github.com/nateherkai/scroll-craft): cuộn chuột để rang một hạt cà phê,
nghe nó nứt "tách", rồi chọn độ rang để cả trang đổi màu và đổi ghi chú hương vị.

## Xem trang

Mở `index.html` qua một máy chủ tĩnh bất kỳ, hoặc bật GitHub Pages cho repo này
(Settings → Pages → Branch: `main`, thư mục `/ (root)`).

## Thành phần

- Chủ quán sửa thực đơn, giá, giờ, liên hệ trong **Google Sheets** (mẫu: `ban-giao/bang-tinh-mau-suong.xlsx`).
  Xem `HUONG-DAN-CHU-QUAN.md`.
- `site-data.js`: cài đặt (link bảng tính, Formspree, chế độ demo) và dữ liệu dự phòng.
- `index.html`: bố cục, chữ giới thiệu các chương và hiệu ứng riêng của trang.
- `chinh-sach-rieng-tu.html`, `404.html`, `page.css`: trang phụ.
- `og-image.jpg`, `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml`: chia sẻ link và SEO.
- `scrollcraft.js`, `scrollcraft.css`: engine cuộn của scroll-craft, giấy phép MIT
  (xem `LICENSE-scrollcraft.txt`).
- `assets/`: ảnh từ Unsplash, nguồn từng ảnh trong `CREDITS.md`.
- `BRIEF.md`: bản brief thiết kế.

Thương hiệu, địa chỉ, số điện thoại và giá trong trang đều là giả định (`demo: true` trong `site-data.js`).
