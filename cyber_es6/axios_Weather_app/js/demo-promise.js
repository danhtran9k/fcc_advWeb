const sum = 10;

const promiseA = new Promise((resolve, reject) => {
  //thực thi tác vụ bất đồng bộ
  setTimeout(() => {
    if (sum < 10) {
      // obj trong reject sẽ là err trong catch
      reject('promise fail');
    }
    // obj trong resolve sẽ là res trong then
    resolve('promise success');
  }, 2000);
});

promiseA
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
