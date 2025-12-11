let tenSanPham = prompt("sản phẩm: "), gia = prompt("giá:"), soLuong = prompt("số lượng:");
const giamGia = 0.1;
let tinhTongGia = gia*soLuong*(1-giamGia);
console.log ("sản phẩm:", tenSanPham , ",Số lượng:", soLuong, ",Tổng giá:", tinhTongGia);