//Import lớp đối tượng
import { ToDo } from './todo.js';
import { ToDoList } from './todoList.js';

const todoList = new ToDoList();
const completeList = new ToDoList();
//Hàm rút gọn cú pháp getElementById
const getELE = (id) => {
  return document.getElementById(id);
};

// ==============================================
//Hàm thêm todo
const addToDo = () => {
  let txtToDo = getELE('newTask').value;
  const ulToDo = getELE('todo');

  if (txtToDo != '') {
    const td = new ToDo(txtToDo, 'todo');
    todoList.addToDo(td);
  }
  //gọi hàm
  renderToDoList(ulToDo);
  // reset field input
  getELE('newTask').value = '';
};

// Nếu gán qua addEventListenr thì ko cần add vào obj window như ở dưới
getELE('addItem').addEventListener('click', () => {
  addToDo();
});

// ==============================================
//Hàm hiển thị todo
//Khai báo hàm
const renderToDoList = (ulToDo) => {
  ulToDo.innerHTML = todoList.renderToDo();
};

const renderCompleteList = (ulCompleted) => {
  ulCompleted.innerHTML = completeList.renderToDo();
};

// ==============================================
//Hàm delete todo
const deleteToDo = (e) => {
  let tdIndex = e.currentTarget.getAttribute('data-index');
  let status = e.currentTarget.getAttribute('data-status');
  // delete tương ứng list nên chỉ getEle khi check dk xong
  if (status == 'todo') {
    const ulToDo = getELE('todo');
    todoList.removeToDo(tdIndex);
    renderToDoList(ulToDo);
  } else if (status == 'completed') {
    const ulCompleted = getELE('completed');
    completeList.removeToDo(tdIndex);
    renderCompleteList(ulCompleted);
  } else {
    alert('Cannot delete todo!');
  }
};

window.deleteToDo = deleteToDo;

// ==============================================
// Hàm check complete
/**
 * THực tế là  toggle complete status
 * Tuy nhiên bài toán đang ch9o5n cấu trúc dữ liệu hơi dở
 * mỗi obj đều có status sẵn
 * Lại tạo ra 2 list riêng, mỗi list chứ obj chỉ cùng 1 status -> dở
 * ===
 * Khi click vào onj thì đầu tiêng get obj ra nhưng chưa modified
 * Đồng thời get index, status được gán tĩnh vào HTML -> tệ
 * Bóc ele trong array slice ra, get props value và create obj mới -> tệ
 * remove arr cũ thông qua index và add obj mới tạo vào arr đích -> tệ
 *
 */
const completeToDo = (e) => {
  let tdIndex = e.currentTarget.getAttribute('data-index');
  let status = e.currentTarget.getAttribute('data-status');
  const ulToDo = getELE('todo');
  const ulCompleted = getELE('completed');

  if (status == 'todo') {
    // slice: start <=index <end
    const completedItem = todoList.tdList.slice(tdIndex, tdIndex + 1);
    const objToDo = new ToDo(completedItem[0].textTodo, 'completed');

    // =====================
    // Chú ý slice trả về 1 array con !!
    console.log('objToDo:', objToDo);

    const tempItemToDo = todoList.tdList[tdIndex];
    console.log('completedItem:', completedItem);
    console.log('==========================');
    console.log('tempItemToDo:', tempItemToDo);
    console.log('typeof(tempItemToDo):', typeof tempItemToDo);
    console.log('tempItemToDo.constructor:', tempItemToDo.constructor);
    console.log('[tempItemToDo.constructor]:', [tempItemToDo.constructor]);
    tempItemToDo.constructor.name;
    console.log(
      'tempItemToDo.constructor.name :',
      tempItemToDo.constructor.name
    );
    // ko đọc constructor vậy được
    // console.log(
    //   'tempItemToDo.prototype.constructor.name:',
    //   tempItemToDo.prototype.constructor.name
    // );
    // Also note that if you are minifying your code, it's not safe to compare against hard-coded type strings. For example instead of checking if obj.constructor.name == "MyType", instead check obj.constructor.name == MyType.name. Or just compare the constructors themselves, however this won't work across DOM boundaries as there are different instances of the constructor function on each DOM, thus doing an object comparison on their constructors won't work.
    // https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class
    /**
     *
     * Typeof
     * instanceof
     * obj.constructor
     * func.prototype, proto.isPrototypeOf
     * Note: if you are compiling your code with Uglify it will change non-global class names. To prevent this, Uglify has a --mangle param that you can set to false is using gulp or grunt.
     * https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
     */

    // =====================

    moveToDo(todoList, completeList, objToDo, tdIndex);
    renderToDoList(ulToDo);
    renderCompleteList(ulCompleted);
  } else if (status == 'completed') {
    const undoItem = completeList.tdList.slice(tdIndex, tdIndex + 1);
    const objToDo = new ToDo(undoItem[0].textTodo, 'todo');
    moveToDo(completeList, todoList, objToDo, tdIndex);
    renderToDoList(ulToDo);
    renderCompleteList(ulCompleted);
  } else {
    alert('Cannot move todo !');
  }
};

window.completeToDo = completeToDo;

// helper check complete
const moveToDo = (depart, arrival, obj, tdIndex) => {
  //Remove todo from depart
  depart.removeToDo(tdIndex);

  //Add todo to arrival
  arrival.addToDo(obj);
};

// ==============================================
// Hàm sort
const sortASC = () => {
  const ulToDo = getELE('todo');
  todoList.sortToDoList(false);
  renderToDoList(ulToDo);
};

window.sortASC = sortASC;

const sortDES = () => {
  const ulToDo = getELE('todo');
  todoList.sortToDoList(true);
  renderToDoList(ulToDo);
};

window.sortDES = sortDES;
