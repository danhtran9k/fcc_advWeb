/**
 * Hàm ready của jQuery giúp chờ page load xong
 * -> nhờ đó có thể đặt thẻ script này lên trên header ok, nhưng ko nên
 *
 * Tương đương trong js:
 * document.addEventListener('DOMContentLoaded', callback)"
 *
 */
$(document).ready(function () {
  var js_simpleContentById = document.getElementById('myId').innerHTML;
  console.log('js_simpleContentById:', js_simpleContentById);
  var js_inputValue = document.getElementById('txtInput').value;
  console.log('js_inputValue:', js_inputValue);

  //   ==============================================
  var simpleContentById = $('#myId').html();
  console.log('simpleContentById:', simpleContentById);
  var simpleContentByClass = $('.myClass').html();
  console.log('simpleContentByClass:', simpleContentByClass);

  //   =============================================
  var inputValue = $('#txtInput').val();
  console.log('inputValue:', inputValue);

  // Đối với js thuần khi getByClass phải loop qua, rồi AddEventListener cho từng phần từ trong Array KQ
  $('.btnClick').click(function () {
    console.log('inputValue:', $('#txtInput').val());
    console.log('js_inputValue:', document.getElementById('txtInput').value);
  });
  
  //   =============================================
  $('#btnShow').click(function () {
    //   js là style.display = "block"
    // Ngoài ra cũng có thể dùng hàm show() của jQuery
    $('#divShow').css({ display: 'block' });
    $('#divImg').css({
      'background-image':
        'url("https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/320px-JQuery_logo.svg.png")',
      height: '100px',
      width: '400px',
    });
  });
  $('#btnHide').click(function () {
    //   js là style.display
    $('#divShow').hide();
  });
});

/**
 * https://github.com/DonJayamanne/jquerysnippets/
 * -> 100+ jQuery snippet
 * https://github.com/kspearrin/Visual-Studio-jQuery-Code-Snippets
 *
 * ================
 * BAD
 * https://github.com/hridoy/jquery-snippets-vscode
 * -> simple, hard to read, un-formatted
 * ===============
 * ES6 equivalent
 * https://github.com/Nkzq/no-jQuery-snippets
 * -> Tuy nhiên vấn đề selector ko được giải quyết
 */
