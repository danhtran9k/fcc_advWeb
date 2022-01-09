export class ToDoList {
  constructor() {
    this.tdList = [];
  }

  addToDo(todo) {
    this.tdList.push(todo);
  }

  removeToDo(index) {
    this.tdList.splice(index, 1);
  }

  renderToDo() {
    let content = '';
    //Duyệt mảng từ phải qua trái (bắt đầu ở phần tử cuối mảng)
    // Mục đích để hiển thị phần tử mới nhất đầu tiên và cũ nhất ở cuối
    // Nếu reduce thì phần tử mới nhất luôn ở cuối cùng -> ngược lại
    content = this.tdList.reduceRight((tdContent, item, index) => {
      //tdContent = tdContent(noi dung cũ) + `nội dung mới`;
      tdContent += `
        <li>
            <span>${item.textTodo}</span>
            <div class="buttons">
                <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="completeToDo(event)" >
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>
        `;
      // Ở đây có 2 icon complete khác nhau:
      // 1 cái fill -> complete và 1 cái ko fill -> incomplete
      return tdContent;
    }, '');
    return content;
  }

  sortToDoList(isDES) {
    this.tdList.sort((todo, nextToDo) => {
      const textA = todo.textTodo.toLowerCase();
      const textB = nextToDo.textTodo.toLowerCase();
      //ASC
      return textB.localeCompare(textA);
    });
    if (isDES) {
      this.tdList.reverse();
    }
  }
}
