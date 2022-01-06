// ==========================================
// shorthand DOM
function getEle(id) {
  return document.getElementById(id);
}

function $(id) {
  return document.querySelector(id);
}
// ==========================================
// Unknown func
// Ẩn thẻ
function anThe(id) {
  var the = getEle(id);
  the.style.display = 'none';
}

// ==========================================
// nhấn nút 1

function thayDoiStyle(id) {
  var the = getEle(id);
  the.style.fontSize = '30px';
  the.style.color = '#00ef12';
}

// ==========================================
function nhanNut1() {
  //thayDoiNoiDung("theP"," thay đổi đi");
  thayDoiStyle('theP');
}

function nhanNut2() {
  changeDiv('theDiv');
  // theDiv bị thay đổi width và màu trước
  // Sau đó được lấy kích thước đưa vào thẻ content1 ở trên
  thayDoiNoiDung('content1', getStyleInfo('theDiv'));
  // Cuối cùng create button được spam ra
  createButton();
}

// ==========================================
// nhấn nút 2

function changeDiv(id) {
  var the = getEle(id);
  the.style.backgroundColor = 'green';
  the.style.width = '100px';
}

function thayDoiNoiDung(id, noiDung) {
  var theP = getEle(id);
  theP.innerHTML = noiDung;
}

function createButton() {
  var btn = document.createElement('button');
  btn.innerHTML = ' CyberLearn button';

  var theP = document.createElement('p');
  theP.innerHTML = 'Thẻ p tạo tự động trong the div';
  theP.style.color = 'red';
  document.body.appendChild(btn);
  var theDiv = getEle('theDiv');
  theDiv.appendChild(theP);
}

// ==========================================
// Helper func

function getStyleInfo(id) {
  var the = getEle(id);
  return the.style.width;
}
