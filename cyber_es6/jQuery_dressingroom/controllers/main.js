$(document).ready(function () {
  var callData = new CallData();
  renderInitialHMTL();
  function renderInitialHMTL() {
    // Dùng then và catch vẫn được nhưng ở đây sẽ làm thuần jQuery
    // Đọc thêm bên file callData
    callData
      .getListData()
      .done(function (result) {
        var contentPill = '';
        var contentTabPane = "";
        result.navPills.forEach(function (item) {
          // Class cho nav pill cha
          var activeClass = item.tabName === 'tabTopClothes' ? 'active' : '';
          // Class cho từng panel
          var fadeClass = item.tabName === 'tabTopClothes' ? '' : 'fade';

          contentPill += getElmTabPills(item, activeClass);

          // Trong Tab Pane cấu trúc HTMl đòi hỏi phải loop qua data JSON gốc 1 lần nữa
          // Refactor phải truyền quá nhiều tham số, tạm code như source gốc
          contentTabPane += `
            <div id="${item.tabName}"
              class="tab-pane container ${fadeClass} ${activeClass}" 
            >
              <div class="row">
                  ${renderTabPane(item.type, result.tabPanes)}
              </div>
            </div>`;
        });

        $('.nav-pills').html(contentPill);
        $('.tab-content').html(contentTabPane);
      })
      .fail(function (err) {
        console.log(err);
      });
  }

  console.log('end...');
});

function getElmTabPills(nav, activeClass) {
  return `<li class="nav-item">
      <a
        class="nav-link btn-default ${activeClass}"
        data-toggle="pill"
        href="#${nav.tabName}"
      >
        ${nav.showName}
      </a>
    </li>`;
}

function renderTabPane(type, paneData) {
  return paneData.reduce((pre, cur) => {
    return (pre +=
      cur.type === type
        ? `
        <div class="col-md-3">
          <div class="card text-center">
            <img src="${cur.imgSrc_jpg}" />
            <h4>
              <b>${cur.name}</b>
            </h4>
            <button 
              data-id="${cur.id}" 
              data-type="${cur.type}" 
              data-name="${cur.name}" 
              data-desc="${cur.desc}" 
              data-imgsrcjpg="${cur.imgSrc_jpg}"  
              data-imgsrcpng="${cur.imgSrc_png}" 
              class="changStyle"
            >
              Thử đồ
            </button>
          </div>
        </div>
        `
        : '');
  }, '');
}
