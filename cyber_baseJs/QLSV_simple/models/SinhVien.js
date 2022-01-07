// function SinhVien () {

// }
// Prototype là lớp đối tượng trong javascript <= 5
var SinhVien = function () {
  // Khai báo các thuộc tính
  this.maSV = '';
  this.tenSV = '';
  this.loaiSinhVien = '';
  this.diemToan = '';
  this.diemLy = '';
  this.diemHoa = '';
  this.diemRenLuyen = '';

  this.tinhDiemTrungBinh = function () {
    var dtb =
      (Number(sinhVien.diemHoa) +
        Number(sinhVien.diemToan) +
        Number(sinhVien.diemLy)) /
      3;
    return dtb;
  };
  this.xepLoai = function () {
    var diemTrungBinh = this.tinhDiemTrungBinh();
    if (this.diemRenLuyen < 5) {
      return 'Yếu';
    } else {
      if (diemTrungBinh < 5) {
        return 'Yếu';
      } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
        return 'Trung Bình';
      } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
        return 'Khá';
      } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
        return 'Giỏi';
      } else if (diemTrungBinh >= 9 && diemTrungBinh < 10) {
        return 'Xuất sắc';
      } else {
        return 'Không hợp lệ';
      }
    }
  };
};

// Vừa có xếp loại lại có thêm method xepLoai ??
// Việc cứ mỗi lần gọi method diemTrungBinh mới tính lại chưa rõ -> load càng nhiều càng tính lại nhiều
// Trong xepLoai cũng xài lại diemTrungBinh -> tính đi tính lại
// Tại sao ko lưu kq tính toán thẳng, input lag nhưng tiện về sau
// -> diemTrungBinh qua method sẽ là điểm động
// Hoặc khi gọi method tinhDiemTrungBinh sẽ check this.diemTrungBinh chưa có thì tính rồi assign ??
