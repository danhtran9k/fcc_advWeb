/**
 *
 * Gen func có dấu * ở giữa function và ()
 * ko dùng arrow function được
 *
 * Mỗi lần chạy có thể return về các giá trị khác nhau
 *
 */

const arrSv = [{ ma: 1, ten: 'Anakin' }];
// function* ()
function* themSinhVien(sv) {
  //   return [...arrSv, sv];
  yield [...arrSv, sv];

  // Giống 1 kiểu return nhưng có lưu lại đã chạy tới đâu
  yield 'Thêm SV thành công';
  
  return 'Thành công';
  yield 'yield sau return sẽ ko chạy';
}

function main() {
  const sinhVien = { ma: 1, ten: 'Obiwan' };
  /**
   * Khi gọi 1 generator func thì ko trả về KQ liền
   * Trả vế 1 iterator
   */

  const iterator = themSinhVien(sinhVien);
  console.log('iterator:', iterator);
  console.log('1 iterator.next():', iterator.next());
  console.log('2 iterator.next().value:', iterator.next().value);
  console.log('3 iterator.next():', iterator.next());
  console.log('4 iterator.next():', iterator.next());
  console.log('5 iterator.next():', iterator.next());
}

main();
