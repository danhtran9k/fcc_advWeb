// var sinHVien = { //scope
//   maSV: 1, //key là thuộc tính :value
//   tenSV: 'Nguyễn Văn A',
//   loaiSinhVien: 'Khó khăn',
//   diemToan: 1,
//   diemLy: 2,
//   diemHoa: 3,
//   tinhDiemTrungBinh: function () {
//     var dtb = (Number(sinhVien.diemHoa) + Number(sinhVien.diemToan) + Number(sinhVien.diemLy) )/3;
//     return dtb;
//   },
//   xepLoai: function() {
//     return 'Khá'
//   }
// }

// var sinHVien2 = {
//   maSV: 2, //key là thuộc tính :value
//   tenSV: 'Nguyễn Văn b',
//   loaiSinhVien: 'Khó khăn',
//   diemToan: 1,
//   diemLy: 5,
//   diemHoa: 5,
//   tinhDiemTrungBinh: function () {
//     var dtb = (Number(sinhVien.diemHoa) + Number(sinhVien.diemToan) + Number(sinhVien.diemLy) )/3;
//     return dtb;
//   }
// }

// // console.log(sinhVien);
// // diemTrungBinh: Giá trị nào tính toán được ta không đưa vào lưu trự

// // console.log(maSV)
// // Truy xuất giá trị thuộc tính của đối tượng
// // 2 cách truy xuất giá trị thuộc tính
// // Cách 1: [ten_doi_tuong].[ten_thuoc_tinh]
// // // console.log('mã sv', sinhVien.maSV);
// // Cách 2: [ten_doi_tuong]['ten_thuoc_tinh']
// // // console.log('tên sinh viên', sinhVien['tenSV']);

// var dtb = sinhVien.tinhDiemTrungBinh()
// console.log('điểm trung bình', dtb);

var sinhVien = new SinhVien();
var validation = new Validation();

var xuLyXacNhan = function () {
  // Lấy thông tin người dùng nhập vào từ input
  sinhVien.maSV = document.querySelector('#maSinhVien').value;
  sinhVien.tenSV = document.querySelector('#tenSinhVien').value;
  sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
  sinhVien.diemToan = document.querySelector('#diemToan').value;
  sinhVien.diemLy = document.querySelector('#diemLy').value;
  sinhVien.diemHoa = document.querySelector('#diemHoa').value;
  sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
  // Dom đến giao diện hiển thị dữ liệu

  // ==============================================
  // Kiểm tra validation
  var valid = true;

  valid &=
    validation.kiemTraRong(
      sinhVien.maSV,
      'Mã sinh viên',
      '#error_maSinhVien_required'
    ) &
    validation.kiemTraRong(
      sinhVien.tenSV,
      'Tên sinh viên',
      '#error_tenSinhVien_required'
    ) &
    validation.kiemTraRong(
      sinhVien.diemHoa,
      'Điểm hoá',
      '#error_diemHoa_required'
    ) &
    validation.kiemTraRong(
      sinhVien.diemLy,
      'Điểm lý',
      '#error_diemLy_required'
    ) &
    validation.kiemTraRong(
      sinhVien.diemToan,
      'Điểm toán',
      '#error_diemToan_required'
    ) &
    validation.kiemTraRong(
      sinhVien.diemRenLuyen,
      'Điểm rèn luyện',
      '#error_diemRenLuyen_required'
    );

  // ==============================================
  // Kiểm tra tất cả là số
  valid &=
    validation.kiemTraDoDaiChuoi(
      sinhVien.maSV,
      'Mã sinh viên',
      '#error_maSinhVien_all_number'
    ) &
    validation.kiemTraDoDaiChuoi(
      sinhVien.diemToan,
      'Điểm toán',
      '#error_diemToan_all_number'
    ) &
    validation.kiemTraDoDaiChuoi(
      sinhVien.diemLy,
      'Điểm lý',
      '#error_diemLy_all_number'
    ) &
    validation.kiemTraDoDaiChuoi(
      sinhVien.diemHoa,
      'Điểm hoá',
      '#error_diemHoa_all_number'
    ) &
    validation.kiemTraDoDaiChuoi(
      sinhVien.diemRenLuyen,
      'Điểm rèn luyện',
      '#error_diemRenLuyen_all_number'
    );

  // ==============================================
  // Kiểm tra độ dài
  valid &= validation.kiemTraDoDaiChuoi(
    sinhVien.maSV,
    'Mã sinh viên',
    '#error_maSinhVien_min_max_length',
    4,
    4
  );

  // ==============================================
  // Kiểm tra giá trị
  valid &=
    validation.kiemTraGiaTri(
      sinhVien.diemToan,
      'Điểm toán',
      '#error_diemToan_min_max_value',
      0,
      10
    ) &
    validation.kiemTraGiaTri(
      sinhVien.diemToan,
      'Điểm lý',
      '#error_diemLy_min_max_value',
      0,
      10
    ) &
    validation.kiemTraGiaTri(
      sinhVien.diemToan,
      'Điểm hoá',
      '#error_diemHoa_min_max_value',
      0,
      10
    ) &
    validation.kiemTraGiaTri(
      sinhVien.diemRenLuyen,
      'Điểm rèn luyện',
      '#error_diemRenLuyen_min_max_value',
      0,
      10
    );

  // ==============================================
  // Kiểm tra tất cả là chữ
  valid &= validation.kiemTraTatCaLaChu(
    sinhVien.tenSV,
    'Tên sinh viên',
    '#error_tenSinhVien_all_letter'
  );

  if (!valid) {
    alert('Dữ liệu không hợp lệ');
    return;
  }

  // ==============================================
  // Xử lý in kết quả ra giao diện
  document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSV;
  document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSV;
  document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
  document.querySelector('#txtDiemTrungBinh').innerHTML =
    sinhVien['tinhDiemTrungBinh']().toFixed(2);
  document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoai(); //sinhVien['xepLoai']()
};

document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;
