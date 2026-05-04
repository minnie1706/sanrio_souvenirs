# Sanrio Souvenir Web System (ExpressJS MVC)

Dự án website bán **đồ lưu niệm Sanrio** được xây dựng theo mô hình **MVC** sử dụng **ExpressJS**.  
Hệ thống cho phép quản lý sản phẩm, đơn hàng và người dùng với giao diện thân thiện, dễ sử dụng.

---

## 📁 Cấu trúc thư mục


config/ # Cấu hình hệ thống (DB, env,...)
constants/ # Các hằng số dùng chung
middlewares/ # Middleware (auth, validation,...)
models/ # Định nghĩa schema / model
services/ # Xử lý logic nghiệp vụ
controllers/ # Điều hướng và xử lý request
routes/ # Khai báo API routes
views/ # Giao diện (EJS/Handlebars,...)
public/ # Tài nguyên tĩnh (CSS, JS, images,...)


---

## 🎀 Các module chính

### 🛍️ Quản lý sản phẩm (đồ lưu niệm Sanrio)
- Thêm / sửa / xóa sản phẩm  
- Tìm kiếm theo tên (Hello Kitty, My Melody, Cinnamoroll,...)  
- Quản lý hình ảnh, giá, số lượng  

### 📂 Quản lý danh mục
- Phân loại sản phẩm: gấu bông, móc khóa, sổ tay,...  
- CRUD danh mục  

### 🏷️ Quản lý thương hiệu (Sanrio Characters)
- Quản lý các nhân vật: Hello Kitty, Kuromi, Pompompurin,...  

### 🧾 Quản lý đơn hàng & hóa đơn
- Tạo đơn hàng  
- Theo dõi trạng thái (đang xử lý, đã giao, hủy)  
- Xuất hóa đơn  

### 🎁 Quản lý khuyến mãi
- Tạo mã giảm giá  
- Áp dụng theo sản phẩm hoặc toàn đơn  

### 👤 Quản lý người dùng
- Phân quyền: Admin / Staff / Khách hàng  
- Đăng ký / đăng nhập / phân quyền  

### 📦 Quản lý nhập kho
- Nhập hàng mới  
- Cập nhật số lượng tồn kho  

### 📊 Thống kê doanh thu
- Doanh thu theo ngày / tháng / năm  
- Biểu đồ bán hàng  

---

## ⚙️ Công nghệ sử dụng

- Node.js + ExpressJS  
- MVC Architecture  
- MongoDB / MySQL (tuỳ cấu hình)  
- EJS / Handlebars (View Engine)  
- Bootstrap / CSS  

---

## 🚀 Cách chạy dự án

### 1. Cài đặt dependencies
```bash
npm install
