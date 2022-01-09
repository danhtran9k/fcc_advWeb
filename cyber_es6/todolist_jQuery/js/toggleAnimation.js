const btnToggle = document.querySelector('.toggle-btn');
const menuToggle = document.querySelector('.filter-btn');
const childBtnToggle = document.querySelectorAll('.filter-btn a');

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 * -> return non-live node list
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 * -> live HTML collection
 */

// Click nút cha trung tâm thì toggle on-off
// truyền callBack
// click này ko viết hoa C

// =================================

// btnToggle.onclick = () => {
//   menuToggle.classList.toggle('open');
// };

// childBtnToggle.forEach((el) => {
//   el.addEventListener('click', () => {
//     menuToggle.classList.remove('open');
//   });
// });

// =================================

// Click các nút con trong sub-menu thì chỉ close đi
// Tuy nhiên thực tế các nút con bị ẩn, chỉ khi cha open mới hiện
// -> gom chung hàm ở đây ok do có css hỗ trợ
// Code ăn gian tí, thật ra arrow viết ko {} thì return
// nhưng hàm toggle ko return gì cả -> viết tắt

// const toggleMenu = () => menuToggle.classList.toggle('open');
// Nếu viết onclick như vậy sẽ đè lai hàm trong HTML
// Phải addEventListener
// btnToggle.onclick = toggleMenu;
// childBtnToggle.forEach((el) => (el.onclick = toggleMenu));

[btnToggle, ...childBtnToggle].forEach((el) =>
  el.addEventListener('click', () => menuToggle.classList.toggle('open'))
);
