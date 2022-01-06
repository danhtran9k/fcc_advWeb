var a = [3, -6, 8, -9, -4, 5, 12];
console.log(a);

///////Câu 1: Tính tổng các số trong mảng a
//1. Đầu vào : Cho sẵn mảng a
//2. Đầu ra : Tổng các số trong mảng
/*3. Giải thuật
   Bước 1: Khai báo biến tích lũy tổng
   Bước 2: Duyệt vòng lặp (for i, for of)
   Bước 3: Tích lũy cho biến tổng
*/
var tong = 0;
for (var item of a) {
  tong += item;
}
console.log(tong);

////////Câu 2: Tìm phần tử âm lớn nhất trong mảng a. Xuất giá trị và chỉ số tại vị trí đó
/**
 * TH1: Mảng toàn số dương: a = [4, 9, 1, 12, 12, 9, 2, 18]; // Mảng không có phần tử âm nào
 * TH2: Mảng toàn số âm a = [-4, -9, -1, -12, -12, -9, -2, -18];// Kỹ thuật tìm lớn nhất
 * TH3: Mảng vừa có số âm, vừa có số dương: a = [4,16,7,3, -6, 8, -9, -4, 5,12]
 * TH4: a = [4,16,7,3, -6, 8, -9, -4, 5,12, -4]
 * Giải thuật
 * 1. Đầu vào: Mảng các số
 * 2. Tìm chỉ số và giá trị của số âm lớn nhất trong mảng
 * 3. Giải thuật
 * Bước 1: Đặt biến chỉ số âm đầu tiên chiSoAmDauTien = -1; //chưa tìm số âm đầu tiên
 * Bước 2: Duyệt vòng lặp, nếu tìm thấy số âm, gán chiSoAmDauTien là chỉ số của số âm hiện tại đang duyệt. Dừng vòng lặp
 * Bước 3: Duyệt lại mảng từ chiSoAmDauTien + 1 trở đi
 * Bước 4: Nếu phần tử tiếp theo là số âm và số âm này lớn hơn giá trị tại phần tử chiSoAmDauTien, cập nhật lại chiSoAmDauTien là chỉ số hiện tại
 * Bước 5: Khai báo mảng chứa các phần tử âm lớn nhất bằng nhau
 * Bước 6: Duyệt lại mảng từ chiSoAmDauTien trở đi
 * Bước 7: Kiểm tra phần tử có giá trị bằng phần tử tại chiSoAmDauTien thì đưa vào mảng các giá trị âm lớn nhất
 */

//Bước 1:
var a = [4, 16, -4, 3, -6, 8, -9, -4, 5, 12, -4];
console.log(a);
var chiSoAmDauTien = -1;
for (var i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    chiSoAmDauTien = i;
    break;
  }
}

var chiSoAmMax = chiSoAmDauTien;
if (chiSoAmDauTien != -1) {
  for (var i = chiSoAmDauTien + 1; i < a.length; i++) {
    if (a[i] < 0 && a[i] > a[chiSoAmMax]) {
      chiSoAmMax = i;
    }
  }
  //console.log("Giá trị âm lớn nhất tại: " + chiSoAmMax + " giá trị là:" + a[chiSoAmMax])
  var mangAmLonNhat = [];
  for (var i = chiSoAmMax; i < a.length; i++) {
    if (a[i] === a[chiSoAmMax]) {
      mangAmLonNhat.push(i);
    }
  }

  //In ra tất cả chỉ số và phần tử có giá trị âm lớn nhất trong mảng
  for (var i = 0; i < mangAmLonNhat.length; i++) {
    var index = mangAmLonNhat[i];
    console.log('(' + index + ', ' + a[index] + ')');
  }

  for (var item of mangAmLonNhat) {
    console.log('(' + item + ', ' + a[item] + ')');
  }
} else {
  console.log('Mảng không có số âm');
}

///Câu 3 : Tính tổng các số lẻ trong mảng a
/**
 * Giải thuật:
 * B1: Tạo biến tích lũy tổng
 * B2: Duyệt danh sách
 * B3: kiểm tra nếu là số lẻ thì tích lũy cho tổng
 * B4. Xuất kết quả
 */
var b = [4, 16, -4, 3, 16, 8, -9, -4, 5, 12, 16];
var tongLe = 0;
for (var item of b) {
  if (item % 2 != 0) {
    tongLe += item;
  }
}

console.log(tongLe);

//Câu 4: Tìm số lớn nhất trong mảng a và xuất chỉ số tại đó.
/**
 * Bước 1: Cho số đầu tiên là số lớn
 * Bước 2: Duyệt mảng
 * Bước 3: Kỉem tra phần tử đang duyệt > phần tử max đang có, Cập nhật lại chỉ số max là chỉ số của phần tử hiện tại
 * Bước 4: Tạo mảng chứa các phần tử max bằng nhau
 * Bước 5: Duyệt từ chỉ số max đến cuối mảng, kiểm tra nếu có phần tử bằng với phần tử max --> thêm chỉ số vào mảng tại bước 4
 * Bước 5: Duyệt mảng chỉ số max -> xuất kết quả
 *
 */
console.log(b);
var indexMax = 0;
for (var i = 0; i < b.length; i++) {
  if (b[indexMax] < b[i]) {
    indexMax = i;
  }
}

var mangMax = [];
for (var i = indexMax; i < b.length; i++) {
  if (b[indexMax] === b[i]) {
    mangMax.push(i);
  }
}

for (var item of mangMax) {
  console.log(item);
}
console.log(a[mangMax[0]]);
