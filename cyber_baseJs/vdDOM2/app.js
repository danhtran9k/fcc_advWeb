function myFunction() {
  var list = document.getElementsByTagName('ul');
  var ulDauTien = list[0];
  var listLI = ulDauTien.getElementsByTagName('li');
  var liDauTien = listLI[0];
  liDauTien.innerHTML = 'Xin chào đã đổi!';
  liDauTien.style.color = 'red';
  liDauTien.style.fontSize = '20px';

  //Test get(*)
  var theDiv = document.getElementById('testDiv');
  var listTag = theDiv.getElementsByTagName('*');
  listTag[3].innerHTML = 'thay đổi nội dung';
  listTag[3].style.color = 'red';

  changeByClass();
  // testQuerySelector();
  testQueryAll();
}

function changeByClass() {
  var list = document.getElementsByClassName('test');
  for (var item of list) {
    item.style.color = 'red';
    item.style.fontSize = '30px';
  }
}

function testQuerySelector() {
  var theP = document.querySelector('p');
  theP.innerHTML = 'Thay đổi sử dụng Query Selector';
  theP.style.color = 'green';
}

function testQueryAll() {
  var list = document.querySelectorAll('.test');
  for (var item of list) {
    item.style.color = 'green';
    item.style.fontSize = '80px';
  }
}
