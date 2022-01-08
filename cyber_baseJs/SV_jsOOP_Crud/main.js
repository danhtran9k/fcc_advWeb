/**
 * Việc ko dùng es6 import để quản lý namespace khiến phải thêm crud để phân biệt với proj trước
 * VScode ko nhận biết được, link loạn xạ nhắc sai code
 * Tuy nhiên html import đúng nên ko sao
 * Khi sửa tên ko thông qua import của es6 phải cẩn thận các vị trí dùng new
 * Nếu ko thì rename hàng loạt nhưng tên các biến kèm crud xấu
 */

const danhSachSinhVien = new DanhSachSinhVienCrud();
const validate = new ValidationCrud();

function domID(id) {
  var element = document.getElementById(id);
  return element;
}

GetStorage();

//===========================================
//Bổ sung thuộc tính
SinhVienCrud.prototype.DiemToan = '';
SinhVienCrud.prototype.DiemLy = '';
SinhVienCrud.prototype.DiemHoa = '';
SinhVienCrud.prototype.DiemTB = '';
SinhVienCrud.prototype.Loai = '';

//Thêm phương thức
SinhVienCrud.prototype.TinhDiemTB = function () {
  this.DiemTB =
    (Number(this.DiemHoa) + Number(this.DiemLy) + Number(this.DiemHoa)) / 3;
};

SinhVienCrud.prototype.XepLoai = function () {
  if (this.DiemTB <= 10 && this.DiemTB >= 8) {
    this.Loai = 'Xếp loại Giỏi';
  } else if (this.DiemTB < 8 && this.DiemTB >= 6.5) {
    this.Loai = 'Xếp loại Khá';
  } else if (this.DiemTB < 6.5 && this.DiemTB >= 5) {
    this.Loai = 'Xếp loại Trung Bình';
  } else {
    this.Loai = 'Xếp loại yếu';
  }
};

//===========================================
function KiemTraDauVaoRong(ID, value) {
  //Kiểm tra mã sinh viên rổng
  if (validate.KiemTraRong(value) == true) {
    domID(ID).style.borderColor = 'red';
    return true;
  } else {
    domID(ID).style.borderColor = 'green';
    return false;
  }
}

//===========================================
function ThemSinhVien() {
  //Lấy dữ liệu từ người dùng nhập vào
  var masv = domID('masv').value;
  var hoten = domID('hoten').value;
  var cmnd = domID('cmnd').value;
  var email = domID('email').value;
  var sdt = domID('sdt').value;
  var loi = 0;
  //   Dùng biến lỗi để ko return break code sớm,
  //   tuy nhiên cách setup vậy ko hay
  //Kiểm tra validation
  if (KiemTraDauVaoRong('masv', masv) == true) {
    loi++;
  }
  if (KiemTraDauVaoRong('hoten', hoten) == true) {
    loi++;
  }
  if (KiemTraDauVaoRong('cmnd', cmnd) == true) {
    loi++;
  }
  // email và sdt check valid đã bao gồm rỗng sẵn
  // Tuy nhiên cách viết tận dụng logic set border lại -> lặp code
  // Bài này chỉ demo báo lỗi qua màu sắc, ko show error nên trường lỗi ko dùng
  if (validate.KiemTraEmail(email)) {
    document.getElementById('email').style.borderColor = 'green';
  } else {
    document.getElementById('email').style.borderColor = 'red';
    loi++;
  }
  if (validate.KiemTraSoDT(sdt)) {
    document.getElementById('sdt').style.borderColor = 'green';
  } else {
    document.getElementById('sdt').style.borderColor = 'red';
    loi++;
  }
  if (loi != 0) {
    return;
  }
  //Thêm sinh viên
  const sinhvien = new SinhVienCrud(masv, hoten, email, sdt, cmnd);
  sinhvien.DiemHoa = domID('Toan').value;
  sinhvien.DiemLy = domID('Ly').value;
  sinhvien.DiemHoa = domID('Hoa').value;

  //   2 phương thức dưới khi gọi sẽ modified lại thuộc tính của SV luôn
  // Khi đó sinhVien.DiemTB và sinhVien.Loai sẽ được tính toán và gán ngầm
  // code demo tham khảo, có vẻ ko tối ưu
  sinhvien.TinhDiemTB();
  sinhvien.XepLoai();

  danhSachSinhVien.ThemSinhVien(sinhvien);
  renderTableDSSV(danhSachSinhVien);
  console.log('danhSachSinhVien:', danhSachSinhVien);
}

//===========================================

function TaoTheTD(className, value) {
  const td = document.createElement('td');
  td.className = className;
  td.innerHTML = value;
  return td;
}

function renderTableDSSV(DanhSachSinhVien) {
  const lstTableSV = domID('tbodySinhVien');
  lstTableSV.innerHTML = '';
  for (var i = 0; i < DanhSachSinhVien.DSSV.length; i++) {
    //Lấy thông tin sinh viên từ trong mảng sinh viên
    const sv = DanhSachSinhVien.DSSV[i];
    //Tạo thẻ tr
    const trSinhVien = document.createElement('tr');
    trSinhVien.id = sv.MaSV;
    trSinhVien.className = 'trSinhVien';
    // VIPPPP
    // Ép sv.MV khi truyền vào html sẽ là dạng onClick = "ChinhSuaSinhVien('_')"
    trSinhVien.setAttribute('onclick', "ChinhSuaSinhVien('" + sv.MaSV + "')");

    //Tạo các thẻ td và filter dữ liệu sinh viên thứ [i] vào
    // Tạo checkbox input ở ô đầu tiên
    const tdCheckBox = document.createElement('td');
    const ckbMaSinhVien = document.createElement('input');
    // console.log('ckbMaSinhVien:', ckbMaSinhVien)
    ckbMaSinhVien.setAttribute('class', 'ckbMaSV');
    ckbMaSinhVien.setAttribute('type', 'checkbox');
    ckbMaSinhVien.setAttribute('value', sv.MaSV);
    tdCheckBox.appendChild(ckbMaSinhVien);

    const tdMaSV = TaoTheTD('MaSV', sv.MaSV);
    const tdHoTen = TaoTheTD('HoTen', sv.HoTen);
    const tdCMND = TaoTheTD('CMND', sv.CMND);
    const tdEmail = TaoTheTD('Email', sv.Email);
    const tdSoDT = TaoTheTD('SoDT', sv.SoDT);

    //Tạo td  DiemTB và  xếp loại
    const tdDiemTB = TaoTheTD('DiemTB', sv.DiemTB);
    const tdXepLoai = TaoTheTD('XepLoai', sv.Loai);
    //Append các td vào tr
    trSinhVien.appendChild(tdCheckBox);
    trSinhVien.appendChild(tdMaSV);
    trSinhVien.appendChild(tdHoTen);
    trSinhVien.appendChild(tdCMND);
    trSinhVien.appendChild(tdEmail);
    trSinhVien.appendChild(tdSoDT);
    trSinhVien.appendChild(tdDiemTB);
    trSinhVien.appendChild(tdXepLoai);

    //Append các tr vào tbodySinhVien
    lstTableSV.appendChild(trSinhVien);
  }
}

//===========================================
//Xóa sinh viên
function XoaSinhVien() {
  //Mảng checkbox
  const lstMaSV = document.getElementsByClassName('ckbMaSV');
  //Mảng mã sinh viên được chọn
  const lstMaSVDuocChon = [];
  for (i = 0; i < lstMaSV.length; i++) {
    console.log('lstMaSV[i]:', lstMaSV[i]);
    if (lstMaSV[i].checked) {
      //Kiểm phần tử checkbox đó có được chọn hay chưa
      lstMaSVDuocChon.push(lstMaSV[i].value);
    }
  }
  console.log('lstMaSVDuocChon:', lstMaSVDuocChon);
  danhSachSinhVien.XoaSinhVien(lstMaSVDuocChon);
  renderTableDSSV(danhSachSinhVien);
}

//===========================================
function TimKiemSinhVien() {
  var tukhoa = domID('tukhoa').value;
  const lstDanhSachSinhVienTimKiem = danhSachSinhVien.TimKiemSinhVien(tukhoa);
  console.log('lstDanhSachSinhVienTimKiem:', lstDanhSachSinhVienTimKiem);
  renderTableDSSV(lstDanhSachSinhVienTimKiem);
}

//===========================================
function ChinhSuaSinhVien(masv) {
  const sinhvien = danhSachSinhVien.TimSVTheoMa(masv);
  if (sinhvien != null) {
    domID('masv').value = sinhvien.MaSV;
    domID('hoten').value = sinhvien.HoTen;
    domID('cmnd').value = sinhvien.CMND;
    domID('email').value = sinhvien.Email;
    domID('sdt').value = sinhvien.SoDT;
  }
}

//===========================================
function LuuThongTin() {
  //Lấy dữ liệu từ người dùng nhập vào
  var masv = domID('masv').value;
  var hoten = domID('hoten').value;
  var cmnd = domID('cmnd').value;
  var email = domID('email').value;
  var sdt = domID('sdt').value;
  var loi = 0;
  //Kiểm tra validation
  if (KiemTraDauVaoRong('masv', masv) == true) {
    loi++;
  }
  if (KiemTraDauVaoRong('hoten', hoten) == true) {
    loi++;
  }
  if (KiemTraDauVaoRong('cmnd', cmnd) == true) {
    loi++;
  }
  if (validate.KiemTraEmail(email)) {
    document.getElementById('email').style.borderColor = 'green';
  } else {
    document.getElementById('email').style.borderColor = 'red';
    loi++;
  }
  if (validate.KiemTraSoDT(sdt)) {
    document.getElementById('sdt').style.borderColor = 'green';
  } else {
    document.getElementById('sdt').style.borderColor = 'red';
    loi++;
  }
  if (loi != 0) {
    return;
  }
  //Thêm sinh viên
  var sinhvien = new SinhVienCrud(masv, hoten, email, sdt, cmnd);
  sinhvien.DiemToan = domID('Toan').value;
  sinhvien.DiemLy = domID('Ly').value;
  sinhvien.DiemHoa = domID('Hoa').value;
  sinhvien.TinhDiemTB();
  sinhvien.XepLoai();
  danhSachSinhVien.SuaSinhVien(sinhvien);
  renderTableDSSV(danhSachSinhVien);
}

//===========================================
function SetStorage() {
  //Chuyển đổi object mảng danh sách sinh viên thành chuỗi json
  var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);
  //Rồi đem chuỗi json lưu vào storage và đặt tên là DanhSachSV
  localStorage.setItem('DanhSachSV', jsonDanhSachSinhVien);
}

function GetStorage() {
  //Lấy ra chuỗi json là mảng danhsachsinhvien thông qua tên DanhSachSV
  var jsonDanhSachSinhVien = localStorage.getItem('DanhSachSV');
  var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
  if (mangDSSV) {
    danhSachSinhVien.DSSV = mangDSSV;
    renderTableDSSV(danhSachSinhVien);
  }
}
