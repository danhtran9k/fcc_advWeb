var pattern = /cyberlearn/gi;

document.querySelector('#btnVerify').onclick = function () {
  //Lấy thông tin người dùng nhập vào từ input
  var txtInput = document.querySelector('#text');
  var spanTB = document.querySelector('#tb');
  var text = txtInput.value;

  //Kiểm tra thông tin hợp lệ với pattern hay không
  if (pattern.test(text)) {
    spanTB.innerHTML = 'Dữ liệu hợp lệ!';
    spanTB.className = 'alert alert-success';
  } else {
    spanTB.innerHTML = 'Dữ liệu không hợp lệ!';
    spanTB.className = 'alert alert-danger';
  }
};

document.getElementById('btnCheckPattern').onclick = function () {
  // var regex = /n*/;

  // if(regex.test('xxx')){
  //     console.log('hợp lệ')
  // } else {
  //     console.log('không hợp lệ')
  // }

  var input = 'HỌ0C javascript tại cyberlearn ?';
  var regex = /[học]/gi;
  console.log(regex.test(input));
};
//https://xuanthulab.net/bieu-thuc-chinh-quy-regexp.html
