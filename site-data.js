/* =====================================================================
   CÀI ĐẶT TRANG · dành cho người làm web, chủ quán KHÔNG cần mở file này
   ---------------------------------------------------------------------
   Chủ quán sửa thực đơn, giá, giờ mở cửa, số điện thoại trong Google Sheets
   (xem HUONG-DAN-CHU-QUAN.md). Bảng tính được ưu tiên hơn file này.

   Dữ liệu bên dưới là BẢN DỰ PHÒNG: trang dùng nó khi chưa nối bảng tính,
   hoặc khi Google tạm thời không trả lời.
   ===================================================================== */
window.SITE = {

  /* Link CSV của hai tab trong Google Sheets
     (Tệp → Chia sẻ → Công bố lên web → chọn tab → Giá trị được phân tách bằng dấu phẩy (.csv) → Công bố).
     Để trống thì trang chỉ dùng dữ liệu trong file này. */
  sheets: {
    menu: "",                     // tab "Thực đơn"
    info: "",                     // tab "Thông tin quán"
  },

  /* true  = trang mẫu (hiện dòng "thương hiệu giả định", form không gửi thật)
     false = trang chính thức của quán */
  demo: true,

  /* Địa chỉ trang web, có dấu / ở cuối. Dùng cho Google và khi chia sẻ link. */
  url: "https://kienbuilds.github.io/suong-coffee/",

  name: "Sương",
  legalName: "Sương Coffee Roasters",   // tên trên giấy phép kinh doanh (hiện ở chính sách riêng tư)

  /* ------------------------------------------------------------ liên hệ -- */
  phone: "0900 000 000",          // số hiện trên trang, viết sao cũng được
  zalo: "0900000000",             // số Zalo, viết liền không cách
  email: "",                      // để trống nếu không muốn hiện

  address: {
    display: "Phố cổ, Hà Nội (địa chỉ minh họa)",  // dòng hiện trên trang
    street: "",                   // số nhà, tên phố (cho Google)
    district: "Hoàn Kiếm",
    city: "Hà Nội",
  },
  /* Link Google Maps: mở Google Maps, tìm quán, bấm "Chia sẻ" → "Sao chép đường liên kết" */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%91+c%E1%BB%95+H%C3%A0+N%E1%BB%99i",

  socials: {
    facebook: "",                 // ví dụ "https://www.facebook.com/tenquan"
    instagram: "",
    tiktok: "",
  },

  /* ---------------------------------------------------------- giờ mở cửa -- */
  /* Mỗi dòng một khung giờ. days: 1 = thứ Hai ... 7 = Chủ nhật. */
  hours: [
    { days: [1, 2, 3, 4, 5, 6, 7], open: "07:00", close: "18:00" },
  ],
  hoursText: "7:00 đến 18:00, mỗi ngày",
  roastDays: "Mỗi sáng thứ Ba và thứ Sáu",

  /* ------------------------------------------------------------- giữ chỗ -- */
  reservation: {
    /* Dán địa chỉ form Formspree vào đây (dạng "https://formspree.io/f/abcdwxyz").
       Để trống thì form chỉ hiện lời nhắn gọi điện / nhắn Zalo. */
    formEndpoint: "",
    times: ["7:00", "8:00", "9:00", "10:00", "14:00", "16:00"],
    defaultTime: "8:00",
    maxGuests: 6,
    daysAhead: 14,                // cho đặt trước tối đa bao nhiêu ngày
  },

  /* ------------------------------------------------------------ thực đơn -- */
  /* Mỗi món một khối { ... }. Thêm món: chép nguyên một khối, dán xuống dưới, sửa chữ.
     image: tên file ảnh trong thư mục assets/ (nên là ảnh dọc, tỉ lệ 4:5).
     notes: ghi chú vị theo 3 độ rang, trang tự đổi khi khách bấm Sáng / Vừa / Đậm. */
  menu: [
    {
      name: "Phin đen",
      image: "assets/menu-phin.webp", width: 900, height: 1350,
      alt: "Phin nhôm đặt trên ly, cà phê nhỏ giọt",
      bean: "Cầu Đất, sơ chế ướt",
      brew: "Phin nhôm, 5 phút",
      notes: { light: "Chanh vàng, trà đen, chua sáng", medium: "Sô cô la sữa, hạt phỉ, đường thốt nốt", dark: "Sô cô la đắng, mật mía, khói nhẹ" },
      price: 45000,
    },
    {
      name: "Bạc xỉu",
      image: "assets/menu-bacxiu.webp", width: 900, height: 1350,
      alt: "Ly bạc xỉu nhiều lớp sữa và cà phê",
      bean: "Cầu Đất, sơ chế ướt",
      brew: "Phin, sữa đặc, sữa tươi",
      notes: { light: "Sữa chua, đào, ngọt nhẹ", medium: "Caramel, sữa, bánh quy", dark: "Kẹo dừa cháy, ca cao" },
      price: 55000,
    },
    {
      name: "Rót tay",
      image: "assets/menu-rottay.webp", width: 900, height: 621,
      alt: "Cốc cà phê nóng trong nắng sớm",
      bean: "Lô rang trong tuần",
      brew: "Phễu nón, 3 phút",
      notes: { light: "Hoa nhài, cam, mật ong", medium: "Táo đỏ, caramel, hạnh nhân", dark: "Sô cô la, gỗ tuyết tùng" },
      price: 70000,
    },
    {
      name: "Cà phê muối",
      image: "assets/menu-muoi.webp", width: 900, height: 1318,
      alt: "Ly cà phê phủ lớp kem muối dày",
      bean: "Cầu Đất, sơ chế ướt",
      brew: "Phin, kem muối",
      notes: { light: "Chanh muối, kem, tươi", medium: "Caramel muối, bơ", dark: "Sô cô la đen, kem mặn" },
      price: 55000,
    },
    {
      name: "Ủ lạnh",
      image: "assets/menu-ulanh.webp", width: 900, height: 1350,
      alt: "Ly cà phê ủ lạnh với đá",
      bean: "Cầu Đất, xay thô",
      brew: "Ngâm 16 giờ, rót đá",
      notes: { light: "Trà ô long, mận", medium: "Ca cao, anh đào", dark: "Mạch nha rang, ca cao đắng" },
      price: 60000,
    },
  ],
  menuNote: "Hạt rang bán theo túi 250 g ở quầy. Hỏi chúng tôi mẻ nào vừa ra lò.",
};
