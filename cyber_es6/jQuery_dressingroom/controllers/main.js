$(document).ready(function () {
  var callData = new CallData();
  var listChosen = new ListChosen();
  renderInitialHMTL();

  // ============================================
  
  function renderInitialHMTL() {
    // Dùng then và catch vẫn được nhưng ở đây sẽ làm thuần jQuery
    // Đọc thêm bên file callData
    callData
      .getListData()
      .done(function (result) {
        var contentPill = '';
        var contentTabPane = '';
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

  function findIndex(type) {
    var index = -1;
    if (listChosen.arr && listChosen.arr.length > 0) {
      listChosen.arr.forEach(function (_item, i) {
        if (_item.type === type) {
          index = i;
        }
      });
    }
    return index;
  }

  // ============================================

  /**
   * https://stackoverflow.com/questions/25248286/native-js-equivalent-to-jquery-delegation
   * https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation
   * https://api.jquery.com/delegate/
   * https://api.jquery.com/on/
   *
   * Bởi vì button render sau khi page load và sau khi load data
   * -> Ko gắn onClick kiểu js bình thường được
   */

  // $("body").delegate(".changStyle", "click", function() {
  $('body').on('click', '.changStyle', function () {
    // $(this) chính là event.target

    var id = $(this).data('id');
    var type = $(this).data('type');
    var name = $(this).data('name');
    var desc = $(this).data('desc');
    var imgsrc_jpg = $(this).data('imgsrcjpg');
    var imgSrc_png = $(this).data('imgsrcpng');

    var choseItem = new ChoseItem(id, type, name, desc, imgsrc_jpg, imgSrc_png);

    var index = findIndex(choseItem.type);

    index !== -1
      ? (listChosen.arr[index] = choseItem)
      : listChosen.addAddItem(choseItem);
    renderContain(listChosen.arr);
  });

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
    // data-imgsrcjpg phần sau - viết liền, ?? ko có _, ko camel
    // https://api.jquery.com/data/
    // rule naming có đề cập
  }, '');
}

// =======================================

function renderContain(chosenItems) {
  if (chosenItems && chosenItems.length > 0) {
    chosenItems.forEach(function (item) {
      if (item.type === 'topclothes') {
        renderBikiniTop(item.imgsrc_png);
      }
      if (item.type === 'botclothes') {
        renderBikiniBottom(item.imgsrc_png);
      }
      if (item.type === 'shoes') {
        renderFeet(item.imgsrc_png);
      }
      if (item.type === 'handbags') {
        renderHandbags(item.imgsrc_png);
      }
      if (item.type === 'necklaces') {
        renderNecklace(item.imgsrc_png);
      }
      if (item.type === 'hairstyle') {
        renderHairstyle(item.imgsrc_png);
      }
      if (item.type === 'background') {
        renderBackground(item.imgsrc_png);
      }
    });
  }
}

// Có thể tạo ra 1 mảng obj tĩnh trước và map vô, gọn hơn 1 tí
// Bớt khai báo hàm lại và khỏi switch case
// -> Thật ra chỉ có giá trị background bị thay đổi, dùng JS thuần
// .style.background mới là đủ -> code tệ

function renderBikiniTop(img) {
  $('.bikinitop').css({
    width: '500px',
    height: '500px',
    background: `url(${img})`,
    position: 'absolute',
    top: '-9%',
    left: '-5%',
    zIndex: '3',
    transform: 'scale(0.5)',
  });
}

function renderBikiniBottom(img) {
  $('.bikinibottom').css({
    width: '500px',
    height: '1000px',
    background: `url(${img})`,
    position: 'absolute',
    top: '-30%',
    left: '-5%',
    zIndex: '2',
    transform: 'scale(0.5)',
  });
}

function renderFeet(img) {
  $('.feet').css({
    width: '500px',
    height: '1000px',
    background: `url(${img})`,
    position: 'absolute',
    bottom: '-37%',
    right: '-3.5%',
    transform: 'scale(0.5)',
    zIndex: '1',
  });
}

function renderHandbags(img) {
  $('.handbag').css({
    width: '500px',
    height: '1000px',
    background: `url(${img})`,
    position: 'absolute',
    bottom: '-40%',
    right: '-3.5%',
    transform: 'scale(0.5)',
    zIndex: '4',
  });
}

function renderNecklace(img) {
  $('.necklace').css({
    width: '500px',
    height: '1000px',
    background: `url(${img})`,
    position: 'absolute',
    bottom: '-40%',
    right: '-3.5%',
    transform: 'scale(0.5)',
    zIndex: '4',
  });
}

function renderHairstyle(img) {
  $('.hairstyle').css({
    width: '1000px',
    height: '1000px',
    background: `url(${img})`,
    position: 'absolute',
    top: '-75%',
    right: '-57%',
    transform: 'scale(0.15)',
    zIndex: '4',
  });
}

function renderBackground(img) {
  $('.background').css({
    backgroundImage: `url(${img})`,
  });
}
