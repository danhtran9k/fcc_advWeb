const main = async () => {
  // Đưa toàn bộ code ban đầu vào trong try catch
  // -> để xử lý TH catch error của promise
  // await trước es2022 phải đặt bên trong 1 hàm async
  try {
    const studentList = await axios({
      url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
      method: 'GET',
    })
    // .then((res) => {
    //   console.log('Lay DanhSach res', res);
    // })
    // .catch((err) => {
    //   console.log('Lay DanhSach err', err);
    // });
    console.log('studentList:', studentList);

    const student = await axios({
      url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/005`,
      method: 'GET',
    })
    // .then((res) => {
    //   console.log('success get sv info')
    //   console.log('Lay ThongTin res', res);
    // })
    // .catch((err) => {
    //   console.log('Lay ThongTin err', err);
    // });
    console.log('student:', student);
    console.log('success get sv info');
  } catch (error) {
    /**
     * Nếu bất cứ error nào xảy ra sẽ nhảy vào catch ngay
     * ko xác định được error của axios nào ?
     */
    console.log('error bất kỳ: ', error);
  }
};
// Chú ý là với code gốc như vậy thì cả 2 axois sẽ được gởi lên và ko xác định được KQ Promise nào trả về trước
/**
 * Khi sử dụng async await vào thì code trở thành đồng bộ -> phải chờ axios trước có await chạy xong mới tới axios thứ 2 
 */
main();
console.log('log after get info');
// Bị log phía sau
/**
 * Bản chất main khi trở thành async function thì luôn return về 1 promise
 * Nếu muốn main chạy xong, có kết quả rồi mới log dòng sau ra
 * Hoặc muốn kết quả của main ko phải là promise nữa (đã resolve xong)
 * Thì phải đứa 2 dòng code này vào trong 1 async func khác trước khi dùng await cho main
 * -> top level await problem
 */