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

  // Tại sao log ra bị toggle true - false ??
  // Nếu ko có bước kiểm tra thì true false xen kẽ ở mỗi lần bấm
  //   NẾu có 2 giá trị thì giá trị đầu true và phía sau false
  console.log('pattern.test(text) 2:', pattern.test(text));
  console.log('pattern.test(text) 3:', pattern.test(text));
  console.log('pattern.test(text) 4:', pattern.test(text));
//   https://stackoverflow.com/questions/2851308/why-does-my-javascript-regex-test-give-alternating-results
// https://stackoverflow.com/questions/2630418/javascript-regex-returning-true-then-false-then-true-etc 
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
