function timSoLonNhat(a, b, c) {
  var tam = a;
  if (b > tam) {
    tam = b;
  }
  if (c > tam) {
    tam = c;
  }
  return tam;
}

function tong3So(a, b, c) {
  return a + b + c;
}

function onClick() {
  var big = timSoLonNhat(28, 15, 6);
  var tong = tong3So(10, 8, 2);
  console.log(big);
  console.log(tong);
}

onClick();
