let questionList = [];

// ====================================================
// func1: fetch data câu hỏi từ db / json server / mongo ...

const fetchQuestion = async () => {
  const url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions';
  // Bản thân axios đã xử lý hỗ trợ phía sau rất nhiều rồi
  // try {
  //   const res = await axios({
  //     url,
  //     method: 'GET',
  //   });
  //   console.log('res:', res)
  //   return res.data;
  // } catch (error) {
  //   console.log(error);
  // }

  // ---------------
  // fetch của js trả về data chưa process -> phải .json()
  //
  // const dataRes = await fetch(url);
  // const dataJson = await dataRes.json();
  // console.log('dataRes:', dataRes);
  // console.log('dataJson:', dataJson);

  // ---------------
  // Có thể viết gọn lại
  //
  // const dataRes = await (await fetch(url)).json();
  // console.log('dataRes:', dataRes);
  // ---------------
  return await (await fetch(url)).json();
};

// render HTML qua DOM ứng với mỗi ele (tách hàm)
const renderQuestion = () => {
  let htmlContent = '';
  // Nếu xử lý thuần jsson - arr obj thì xài if else check DK để chọn cách render phù hợp -> Tuy nhiên khi map vẫn phải check type để map thành class obj
  // Nếu dùng class thì ko cần nhưng phải tạo lại obj từ data json trước
  //  -> hàm mapData
  // Chỗ này xử lý STT câu hỏi hơi rườm rà , kể cả trong class

  for (let i in questionList) {
    // phải chuyển i thành number trước -> dùng toán tử +
    htmlContent += questionList[i].render(+i + 1);
  }

  document.getElementById('questionsContainer').innerHTML = htmlContent;
};

// ====================================================
// data fetch từ server chỉ là json chuyển thành obj với class ĐN ở FE
// tạo obj tương ứng trong FE, push vào list arr local

const mapData = (data = []) => {
  questionList = data.map((item) => {
    const { questionType, id, content, answers } = item;

    if (questionType === 1) {
      return new MultipleChoice(questionType, id, content, answers);
    } else {
      return new FillInBank(questionType, id, content, answers);
    }
  });
};

// Submit kết quả, chấm điểm
const submit = () => {
  let result = 0;

  for (let item of questionList) {
    item.checkExact();
    if (item.checkExact()) {
      result++;
    }
  }
  alert('Kết quả: ' + result + '/' + questionList.length);
};

// =============================================================
// Vì ở đây là top level ko dùng await được
// Nếu dùng phải đổi về type = module trong html

fetchQuestion().then((data) => {
  //code khi question list đã có
  mapData(data);
  renderQuestion();
});
