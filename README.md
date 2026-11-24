# Sương · Cà phê rang mỗi sáng

Landing page mẫu cho một quán cà phê giả định, dựng bằng skill
[scroll-craft](https://github.com/nateherkai/scroll-craft): cuộn chuột để rang một hạt cà phê,
nghe nó nứt "tách", rồi chọn độ rang để cả trang đổi màu và đổi ghi chú hương vị.

## Xem trang

Mở `index.html` qua một máy chủ tĩnh bất kỳ, hoặc bật GitHub Pages cho repo này
(Settings → Pages → Branch: `main`, thư mục `/ (root)`).

## Thành phần

- `site-data.js`: thông tin quán, giờ mở cửa, liên hệ, thực đơn, giá, cấu hình form giữ chỗ.
  Chủ quán chỉ cần sửa file này, xem `HUONG-DAN-CHU-QUAN.md`.
- `index.html`: bố cục, chữ giới thiệu các chương và hiệu ứng riêng của trang.
- `chinh-sach-rieng-tu.html`, `404.html`, `page.css`: trang phụ.
- `og-image.jpg`, `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml`: chia sẻ link và SEO.
- `scrollcraft.js`, `scrollcraft.css`: engine cuộn của scroll-craft, giấy phép MIT
  (xem `LICENSE-scrollcraft.txt`).
- `assets/`: ảnh từ Unsplash, nguồn từng ảnh trong `CREDITS.md`.
- `BRIEF.md`: bản brief thiết kế.

Thương hiệu, địa chỉ, số điện thoại và giá trong trang đều là giả định (`demo: true` trong `site-data.js`).
