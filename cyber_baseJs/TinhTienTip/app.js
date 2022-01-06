//Hiển thị vùng div tiền tip
// Bóc ra trước, tùy tình hình code mà đưa vào trong hàm hoặc viết ra
function getEle(id) {
  return document.getElementById(id);
}

const eachText = getEle('each');
const totalTipText = getEle('totalTip');

// ko nên set display none động ở trong js vì sẽ flash khi web load
totalTipText.style.display = 'none';
eachText.style.display = 'none';

//   ===========================================

function calculateTip() {
  const tongBill = getEle('billamt').value;
  const haiLongVaTip = getEle('serviceQual').value;
  const soNguoiShare = getEle('peopleamt').value;

  //Validation
  if (tongBill === '' || haiLongVaTip == 0) {
    alert(' Vui lòng chọn giá trị');
    return;
  }

  //Kiểm tra có nhập vào số người share tip hay không
  if (soNguoiShare === '' || soNguoiShare <= 1) {
    soNguoiShare = 1;
    eachText.style.display = 'none';
  } else {
    eachText.style.display = 'block';
  }

  //====================
  //Tính toán
  let tongTip = (tongBill * haiLongVaTip) / soNguoiShare;
  // làm tròn đến phần thập phân có 2 chữ số
  tongTip = Math.round(tongTip * 100) / 100;
  //Đảm bảo lúc nào cũng có 2 chữ số ở phần thập phân
  tongTip = tongTip.toFixed(2);
  //====================

  //Hiển thị vùng div tiền tip
  getEle('tip').innerHTML = tongTip;
  totalTipText.style.display = 'block';
}

//   ===========================================

getEle('calculate').onclick = function () {
  calculateTip();
};
