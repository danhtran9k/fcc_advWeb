const main = () => {
  axios({
    url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
    method: 'GET',
  })
    .then((res) => {
      console.log('Lay DanhSach res', res);
    })
    .catch((err) => {
      console.log('Lay DanhSach err', err);
    });

  axios({
    url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/555`,
    method: 'GET',
  })
    .then((res) => {
      console.log('Lay ThongTin res', res);
    })
    .catch((err) => {
      console.log('Lay ThongTin err', err);
    });
};
// Chú ý là với code gốc như vậy thì cả 2 axois sẽ được gởi lên và ko xác định được KQ Promise nào trả về trước
main();
