$(document).ready(function () {
  var callData = new CallData();
  renderHMTL();
  function renderHMTL() {
    // Dùng then và catch vẫn được nhưng ở đây sẽ làm thuần jQuery
    // Đọc thêm bên file callData
    callData
      .getListData()
      .done(function (result) {
        console.log(result);
      })
      .fail(function (err) {
        console.log(err);
      });
  }
  console.log('end...');
});
