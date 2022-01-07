//Khai báo các mảng giá và giá chờ cho các loại xe
const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_SUV = [9000, 14000, 12000];
const GIA_CHO_SUV = 3000;

const ARRAY_GIA_BLACK = [10000, 16000, 14000];
const GIA_CHO_BLACK = 4000;

function kiemTraLoaiXe() {
  const uberX = document.getElementById('uberX');
  const uberSUV = document.getElementById('uberSUV');
  const uberBlack = document.getElementById('uberBlack');

  if (uberX.checked) {
    return 'uberX';
  } else if (uberSUV.checked) {
    return 'uberSUV';
  } else if (uberBlack.checked) {
    return 'uberBlack';
  }
}

//Trên 3 phút mỗi tính tiền chờ, cứ 3 phút tính một lần -> chia cho 3 và làm tròn
const tinhTienCho = (thoiGianCho, giaCho) =>
  thoiGianCho >= 3 ? Math.round(thoiGianCho / 3.0) * giaCho : 0;

function tinhTien(soKm, thoiGianCho, arrayPrice, giaCho) {
  const tienCho = tinhTienCho(thoiGianCho, giaCho);
  if (soKm <= 1) {
    return arrayPrice[0] + tienCho;
  } else if (soKm > 1 && soKm <= 20) {
    return arrayPrice[0] + (soKm - 1) * arrayPrice[1] + tienCho;
  } else if (soKm > 20) {
    return (
      arrayPrice[0] + 19 * arrayPrice[1] + (soKm - 20) * arrayPrice[2] + tienCho
    );
  }
}

function tinhTongTien() {
  //   var soKM = document.getElementById('soKM').value;
  //   var thoiGianCho = document.getElementById('thoiGianCho').value;

  //   soKM = parseFloat(soKM);
  //   thoiGianCho = parseFloat(thoiGianCho);

  const soKM = +document.getElementById('soKM').value;
  const thoiGianCho = +document.getElementById('thoiGianCho').value;

  var tongTien = 0;
  const loaiXe = kiemTraLoaiXe();
  switch (loaiXe) {
    case 'uberX':
      tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_UBER_X, GIA_CHO_UBER_X);
      break;
    case 'uberSUV':
      tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_SUV, GIA_CHO_SUV);
      break;
    case 'uberBlack':
      tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_BLACK, GIA_CHO_BLACK);
      break;
    default:
      alert('Vui lòng chọn loại xe');
  }
  return tongTien;
}

// ====================================================================
// Event Handle

document.getElementById('btnTinhTien').onclick = function () {
  //   var tongTien = tinhTongTien();
  document.getElementById('divThanhTien').style.display = 'block';
  document.getElementById('xuatTien').innerHTML = tinhTongTien();
};

// ====================================================================
// RENDER hóa đơn

function renderRowChiTietKm(loaiXe, arrayKm, arrayPrice, tblBody) {
  for (var i = 0; i < arrayKm.length; i++) {
    const tr = document.createElement('tr');

    const tdLoaiXe = document.createElement('td');
    const tdSuDung = document.createElement('td');
    const tdDongGia = document.createElement('td');
    const tdThanhTien = document.createElement('td');

    tdLoaiXe.innerHTML = loaiXe;
    tdSuDung.innerHTML = arrayKm[i] + ' km';
    tdDongGia.innerHTML = arrayPrice[i];
    tdThanhTien.innerHTML = arrayKm[i] * arrayPrice[i];

    tr.appendChild(tdLoaiXe);
    tr.appendChild(tdSuDung);
    tr.appendChild(tdDongGia);
    tr.appendChild(tdThanhTien);

    tblBody.appendChild(tr);
  }
}

function renderRowThoiGianCho(thoiGianCho, giaCho, tblBody) {
  const tienCho = tinhTienCho(thoiGianCho, giaCho);
  const trThoiGianCho = document.createElement('tr');

  const tdPhutTitle = document.createElement('td');
  const tdPhut = document.createElement('td');
  const tdDongGia = document.createElement('td');
  const tdThanhTien = document.createElement('td');

  tdPhutTitle.innerHTML = ' Thời gian chờ';
  tdPhutTitle.innerHTML = thoiGianCho + ' phút';
  tdDongGia.innerHTML = giaCho;
  tdThanhTien.innerHTML = tienCho;

  trThoiGianCho.appendChild(tdPhutTitle);
  trThoiGianCho.appendChild(tdPhut);
  trThoiGianCho.appendChild(tdDongGia);
  trThoiGianCho.appendChild(tdThanhTien);

  tblBody.appendChild(trThoiGianCho);
}

function renderRowTongCong(tongTien, tblBody) {
  const trTotal = document.createElement('tr');
  trTotal.className = 'alert alert-success';

  const tdTotalTile = document.createElement('td');
  tdTotalTile.setAttribute('colspan', 3);
  const tdTotal = document.createElement('td');

  tdTotalTile.innerHTML = ' Tổng tiền phải trả';
  tdTotal.innerHTML = tongTien;

  trTotal.appendChild(tdTotalTile);
  trTotal.appendChild(tdTotal);

  tblBody.appendChild(trTotal);
}

// ====================================================================

function inHoaDon(loaiXe, soKm, thoiGianCho, giaCho, arrayPrice, tongTien) {
  const tblBody = document.getElementById('tblBody');
  tblBody.innerHTML = ''; // reset lại tbody

  if (soKm <= 1) {
    renderRowChiTietKm(loaiXe, [1], arrayPrice, tblBody);
  } else if (soKm > 1 && soKm <= 20) {
    renderRowChiTietKm(loaiXe, [1, soKm - 1], arrayPrice, tblBody);
  } else if (soKm > 20) {
    renderRowChiTietKm(loaiXe, [1, 19, soKm - 20], arrayPrice, tblBody);
  }

  /**
   * Thời gian chờ
   */
  if (thoiGianCho > 2) {
    renderRowThoiGianCho(thoiGianCho, giaCho, tblBody);
  }

  /**
   * Tổng tiền
   */
  renderRowTongCong(tongTien, tblBody);
}

// ====================================================================
// Event Handle

document.getElementById('btnInHD').onclick = function () {
  var kq = getData();
  var tongTien = tinhTongTien();
  var loaiXe = kiemTraLoaiXe();
  switch (loaiXe) {
    case 'uberX':
      inHoaDon(
        loaiXe,
        kq[0],
        kq[1],
        GIA_CHO_UBER_X,
        ARRAY_GIA_UBER_X,
        tongTien
      );
      break;
    case 'uberSUV':
      inHoaDon(loaiXe, kq[0], kq[1], GIA_CHO_SUV, ARRAY_GIA_SUV, tongTien);
      break;
    case 'uberBlack':
      inHoaDon(loaiXe, kq[0], kq[1], GIA_CHO_BLACK, ARRAY_GIA_BLACK, tongTien);
      break;
    default:
      alert('Vui lòng chọn loại xe');
  }
};

// ====================================================================
// ko hay, add vô rồi lại bóc riêng ra, thà get global luôn
function getData() {
  const kq = [];
  const soKm = +document.getElementById('soKM').value;
  //   soKm = parseFloat(soKm);
  const thoiGianCho = +document.getElementById('thoiGianCho').value;
  //   thoiGianCho = parseFloat(thoiGianCho);

  return kq.concat(soKm, thoiGianCho);
}
