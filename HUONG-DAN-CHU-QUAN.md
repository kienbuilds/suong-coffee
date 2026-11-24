# Hướng dẫn cho chủ quán

Tài liệu này dành cho người không rành kỹ thuật. Hầu hết việc hằng ngày chỉ cần sửa **một file**: `site-data.js`.

---

## 1. Sửa thông tin quán, giá, thực đơn

Mở `site-data.js` bằng Notepad (hoặc sửa thẳng trên GitHub: mở file, bấm biểu tượng bút chì, sửa, rồi bấm **Commit changes**). Trang tự cập nhật sau khoảng 1 phút.

| Muốn đổi | Sửa dòng |
|---|---|
| Số điện thoại, Zalo, email | `phone`, `zalo`, `email` |
| Địa chỉ hiện trên trang | `address.display` |
| Link chỉ đường | `mapsUrl` (Google Maps → tìm quán → Chia sẻ → Sao chép đường liên kết) |
| Facebook, Instagram, TikTok | trong `socials`; để `""` thì ẩn |
| Giờ mở cửa | `hours` (để tính "Đang mở / Đang đóng cửa") và `hoursText` (dòng chữ hiện ra) |
| Ngày rang | `roastDays` |
| Giờ nhận giữ chỗ, số người tối đa | trong `reservation` |
| Giá một món | `price: 45000` (viết số liền, không dấu chấm) |
| Thêm món | chép nguyên một khối `{ ... },` trong `menu`, dán xuống dưới, sửa chữ |
| Bỏ món | xoá nguyên khối `{ ... },` của món đó |

Quy tắc an toàn: chỉ sửa chữ nằm trong dấu ngoặc kép, giữ nguyên dấu phẩy cuối dòng. Nếu sửa xong trang bị trắng phần thực đơn, thường là do thiếu một dấu phẩy hoặc dấu ngoặc kép.

**Ảnh món mới:** ảnh dọc (tỉ lệ 4:5), rộng khoảng 900 px, định dạng `.webp` hoặc `.jpg`, dưới 150 KB. Bỏ vào thư mục `assets/` rồi ghi tên file vào `image`. Có thể nén ảnh miễn phí tại squoosh.app.

## 2. Bật form giữ chỗ thật (Formspree, miễn phí 50 lượt/tháng)

1. Vào formspree.io, đăng ký bằng email của quán.
2. Bấm **New Form**, đặt tên "Giữ chỗ", chọn email nhận.
3. Chép địa chỉ dạng `https://formspree.io/f/xxxxxxx`.
4. Dán vào `site-data.js`, dòng `formEndpoint: "..."`.
5. Đổi `demo: true` thành `demo: false`.
6. Tự điền thử một lần trên trang. Lần đầu Formspree gửi email xác nhận, bấm xác nhận là xong.

Từ đó mỗi lượt giữ chỗ sẽ về email, tiêu đề dạng *"Giữ chỗ: Lan, bàn 2 người, 8:00 ngày 25/11"*. Quán gọi hoặc nhắn lại cho khách để chốt.

Khi chưa nối Formspree, form vẫn chạy nhưng chỉ hiện lời nhắn mời khách gọi điện hoặc nhắn Zalo.

## 3. Trước khi mở trang chính thức (làm một lần)

- [ ] `demo: false` trong `site-data.js` (ẩn dòng "thương hiệu giả định", bật dữ liệu cho Google).
- [ ] Điền đúng số điện thoại, Zalo, địa chỉ, `mapsUrl`, `legalName`.
- [ ] Nối Formspree (mục 2) và thử gửi một lần.
- [ ] Đọc lại `chinh-sach-rieng-tu.html`: thời hạn lưu, cách liên hệ. Đây là bản mẫu theo tinh thần Nghị định 13/2023/NĐ-CP, không phải tư vấn pháp lý.
- [ ] Thay ảnh minh họa Unsplash bằng ảnh thật của quán (ảnh Unsplash dùng được nhưng quán khác cũng có thể dùng).
- [ ] Nếu đổi tên miền: xem mục 4.
- [ ] Đăng ký Google Business Profile cho quán và dán link website vào đó (việc quan trọng nhất để khách tìm thấy trên Google Maps).

## 4. Tên miền riêng (ví dụ suongcoffee.vn)

1. Mua tên miền ở nhà cung cấp trong nước (Mắt Bão, PA Vietnam, Tenten...).
2. Trên GitHub: **Settings → Pages → Custom domain**, nhập tên miền, bật **Enforce HTTPS**.
3. Tại nhà cung cấp tên miền, thêm bản ghi DNS theo hướng dẫn của GitHub Pages.
4. Đổi địa chỉ cũ `https://kienbuilds.github.io/suong-coffee/` thành tên miền mới ở các chỗ sau:
   - `site-data.js`: dòng `url`
   - `index.html`: các dòng `canonical`, `og:url`, `og:image` (ở đầu file)
   - `sitemap.xml`, `robots.txt`
   - `404.html`: đổi mọi `/suong-coffee/` thành `/`

## 5. Kiểm tra sau khi sửa

- Mở trang trên điện thoại, cuộn hết một lượt, bấm thử Sáng / Vừa / Đậm.
- Bấm thử nút Gọi, Nhắn Zalo, Chỉ đường.
- Kiểm tra ảnh khi chia sẻ link: dán link vào developers.facebook.com/tools/debug và bấm **Scrape Again** (Zalo và Messenger dùng cùng ảnh `og-image.jpg`).

## 6. Danh sách file

| File | Là gì | Có nên tự sửa |
|---|---|---|
| `site-data.js` | Thông tin quán, thực đơn, giá, form | **Có** |
| `assets/` | Ảnh | Có (thêm, thay ảnh) |
| `chinh-sach-rieng-tu.html` | Chính sách riêng tư | Có, phần chữ |
| `og-image.jpg` | Ảnh hiện khi chia sẻ link (1200×630) | Có thể thay |
| `index.html` | Bố cục, hiệu ứng, chữ giới thiệu các chương | Nhờ người làm web |
| `scrollcraft.js`, `scrollcraft.css` | Bộ máy hiệu ứng cuộn | Không |
| `page.css`, `404.html`, `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml` | Phụ trợ | Hiếm khi |

Cần hỗ trợ: liên hệ người làm web cho quán.
