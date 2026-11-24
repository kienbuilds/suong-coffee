# Hướng dẫn sửa thông tin trên website

## Phần dành cho chủ quán

Mọi thông tin trên trang (thực đơn, giá, giờ mở cửa, số điện thoại, địa chỉ, Facebook...) nằm trong **một bảng tính Google Sheets**, giống Excel. Bạn không cần đụng vào website.

**Cách sửa**

1. Mở bảng tính (link người làm web gửi bạn; trên điện thoại dùng ứng dụng **Google Trang tính**).
2. Bấm vào ô muốn sửa, gõ nội dung mới, bấm Enter. Google tự lưu.
3. Khoảng 5 phút sau, mở lại website là thấy thay đổi.

**Những việc hay làm**

| Muốn | Làm thế này |
|---|---|
| Đổi giá | Tab **Thực đơn**, gõ số mới vào cột Giá (ví dụ `49000`) |
| Món tạm hết | Cột **Còn bán** chọn **Không**. Có hàng lại thì chọn **Có** |
| Thêm món | Gõ vào dòng trống đầu tiên. Chỉ cần Tên món và Giá |
| Xoá món | Chuột phải vào số dòng bên trái → **Xoá hàng** |
| Đổi giờ mở cửa, số điện thoại, ngày nghỉ | Tab **Thông tin quán**, sửa cột **Nội dung** |
| Món mới có ảnh | Gửi ảnh cho người làm web. Chưa có ảnh thì trang tự hiện hình vẽ tách cà phê |
| Lỡ sửa sai | **Tệp → Nhật ký phiên bản** → chọn bản cũ → **Khôi phục** |

Trong bảng tính có sẵn tab **Hướng dẫn** nhắc lại những điều này.

**Đừng** đổi tên các tab hay sửa hàng tiêu đề màu đen.

**Khách giữ chỗ:** mỗi lượt giữ chỗ trên trang sẽ về email của quán, tiêu đề dạng *"Giữ chỗ: Lan, bàn 2 người, 8:00 ngày 25/11"*. Quán gọi hoặc nhắn lại để chốt với khách.

---

## Phần dành cho người làm web (cài đặt một lần)

### 1. Tạo bảng tính cho quán

1. Tải `ban-giao/bang-tinh-mau-suong.xlsx` lên Google Drive của quán (hoặc của bạn).
2. Mở bằng Google Sheets, chọn **Tệp → Lưu dưới dạng Google Trang tính**.
3. Điền thông tin thật của quán vào hai tab **Thực đơn** và **Thông tin quán**.
4. **Chia sẻ** quyền *Người chỉnh sửa* cho Gmail của chủ quán.

### 2. Nối bảng tính với trang

1. Trong bảng tính: **Tệp → Chia sẻ → Công bố lên web**.
2. Chọn tab **Thực đơn**, định dạng **Giá trị được phân tách bằng dấu phẩy (.csv)**, bấm **Công bố**, rồi chép link.
3. Làm lại bước 2 cho tab **Thông tin quán**.
4. Dán hai link vào `site-data.js`, mục `sheets.menu` và `sheets.info`.

Lưu ý:
- Google cập nhật bản công bố sau khoảng 5 phút. Trang còn nhớ dữ liệu bảng tính của lần xem trước để hiện ngay, rồi lấy bản mới.
- Bản công bố ai có link cũng xem được. Đừng để thông tin riêng tư trong bảng tính này.
- Nếu Google tạm không trả lời, trang dùng dữ liệu dự phòng trong `site-data.js`. Thỉnh thoảng nên chép thông tin mới vào đó.
- Trang nhận cột theo **tên tiêu đề**, nên chủ quán có đổi thứ tự cột cũng không sao.

### 3. Form giữ chỗ (Formspree, miễn phí 50 lượt/tháng)

1. Đăng ký formspree.io bằng email của quán, tạo form mới, chép link dạng `https://formspree.io/f/xxxxxxx`.
2. Dán vào `site-data.js`, dòng `formEndpoint`.
3. Gửi thử một lượt, rồi bấm link xác nhận trong email Formspree gửi về.

Chưa nối thì form vẫn chạy, chỉ hiện lời nhắn mời khách gọi điện hoặc nhắn Zalo.

### 4. Trước khi mở trang chính thức

- [ ] `demo: false` trong `site-data.js`: ẩn dòng "thương hiệu giả định" và bật dữ liệu có cấu trúc cho Google.
- [ ] Điền `legalName` và `url` trong `site-data.js`.
- [ ] Nối bảng tính và Formspree, thử cả hai.
- [ ] Đọc lại `chinh-sach-rieng-tu.html` cùng chủ quán (bản mẫu theo tinh thần Nghị định 13/2023/NĐ-CP, không phải tư vấn pháp lý).
- [ ] Thay ảnh Unsplash bằng ảnh thật của quán, bỏ vào `assets/` (ảnh dọc 4:5, rộng khoảng 900 px, dưới 150 KB; nén ở squoosh.app). Ghi tên file vào cột Ảnh.
- [ ] Đăng ký Google Business Profile và gắn link website (quan trọng nhất để khách tìm thấy trên Google Maps).
- [ ] Kiểm tra ảnh khi chia sẻ link: developers.facebook.com/tools/debug → **Scrape Again**.

### 5. Tên miền riêng

1. Mua tên miền (Mắt Bão, PA Vietnam, Tenten...).
2. GitHub: **Settings → Pages → Custom domain**, bật **Enforce HTTPS**; thêm bản ghi DNS theo hướng dẫn của GitHub.
3. Thay `https://kienbuilds.github.io/suong-coffee/` bằng địa chỉ mới ở: `site-data.js` (`url`), `index.html` (`canonical`, `og:url`, `og:image`), `sitemap.xml`, `robots.txt`; trong `404.html` đổi `/suong-coffee/` thành `/`.

### 6. Danh sách file

| File | Là gì |
|---|---|
| `ban-giao/bang-tinh-mau-suong.xlsx` | Bảng tính mẫu cho chủ quán (3 tab: Hướng dẫn, Thực đơn, Thông tin quán) |
| `site-data.js` | Cài đặt: link bảng tính, Formspree, chế độ demo, dữ liệu dự phòng |
| `index.html` | Bố cục, chữ giới thiệu các chương, hiệu ứng |
| `scrollcraft.js`, `scrollcraft.css` | Bộ máy hiệu ứng cuộn (giấy phép MIT, không sửa) |
| `assets/` | Ảnh |
| `chinh-sach-rieng-tu.html`, `404.html`, `page.css` | Trang phụ |
| `og-image.jpg`, `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml` | Chia sẻ link và SEO |
