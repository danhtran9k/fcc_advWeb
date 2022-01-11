// Thực ra đây là class single choice Question
// Nếu là multiple choice thì phải là checkbox và có thể chọn nhiều giá trị
class MultipleChoice extends Question {
  constructor(type, id, content, answers) {
    // Kế thừa bằng keyword super -> truyền đúng thứ tự trong class cha
    super(type, id, content, answers);
  }

  // vì STT của câu hỏi sẽ lệch so với index nên hơi rườm rà,
  // ko xài id vì thực tế ko đảm bảo id = index

  render(index) {
    let answersHTML = '';
    for (let item of this.answers) {
      answersHTML += `<div>
        <input type="radio" 
          value="${item.id}" 
          class="answer-${this.id}" 
          name="answer-${this.id}"  
        />
        <label class="lead">${item.content}</label> 
      </div>`;
    }

    return `
      <div>
        <p class="lead font-italic" style="font-size: 30px;">
          Câu ${index}: ${this.content}
        </p>
        ${answersHTML}
      </div>
    `;
  }

  /**
   * 1 obj Multiple Choice sẽ có nhiều option trong radio
   * đầu tiên phải duyệt qua hết các option answer gắn với id multple
   * get answer value, nếu bỏ trống thì false luôn
   * Sau đó lại duyệt qua thuộc tính answer lấy kèm obj từ BE
   * Tìm đến ans có id trùng với id lấy re -> trả về id answer
   */
  checkExact() {
    // Do ở đây là single choice nên thật ra chỉ tìm 1 phần tử được check là ok
    // đáp án đúng là biến trong JS chứ ko hiện trong HTMl nên ok, chỉ bị truy cập khi inspect code ra đúng biến
    const inputList = document.getElementsByClassName(`answer-${this.id}`);
    // ==========================
    // Cách 1
    // let answerId;

    // for (let input of inputList) {
    //   if (input.checked) {
    //     answerId = input.value;
    //   }
    // }

    // if (!answerId) {
    //   return false;
    // }

    // for (let answer of this.answers) {
    //   if (answerId === answer.id) {
    //     return answer.exact;
    //   }
    // }

    // ==========================
    const answerChoice = [...inputList].find((el) => el.checked);
    if (!answerChoice) {
      return false;
    }
    const answerInfo = this.answers.find((el) => el.id === answerChoice.value);
    return answerInfo ? answerInfo.exact : false;
  }
}

// https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
// HTML collection, nodeList đều ko có Array.find
// check bằng console.log -> tìm vào prototype của đối tượng đó
