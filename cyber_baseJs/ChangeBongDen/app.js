function getEle(id) {
  return document.getElementById(id);
}

// Có thể viết dạng fake jQuery
// Tuy nhiên performance của querySelector thua getById nhiều
// Cũng có thể định nghĩa sqitch case phức tạp nhưng ko nên
function $(id) {
  return document.querySelector(id);
}

function batDen() {
  var den = getEle('theDen');
  den.src = 'imgs/pic_bulbon.gif';
}

function tatDen() {
  var den = getEle('theDen');
  den.src = 'imgs/pic_bulboff.gif';
}

function dangNhap() {
  var userName = getEle('username');
  var pass = getEle('password');
  var sectionThongBao = getEle('sectionThongBao');
  var thePThongBao = getEle('thePThongBao');
  if (userName.value == 'CyberSoft' && pass.value == 'CyberSoft') {
    sectionThongBao.style.backgroundColor = 'green';
    thePThongBao.innerHTML = 'Đăng nhập thành công';
  }
}
