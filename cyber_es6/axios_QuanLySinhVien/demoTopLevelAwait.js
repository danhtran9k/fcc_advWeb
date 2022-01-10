const main = async () => {
  try {
    return await axios({
      url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/005`,
      method: 'GET',
    });
  } catch (error) {
    console.log('error:', error);
  }
};

const topAwaitMain = await main();
console.log('>>> topAwaitMain >>> :', topAwaitMain);

/**
 * https://v8.dev/features/top-level-await
 * https://v8.dev/features/modules
 * https://v8.dev/features/modules#browser
 */

// thay vì .then(mainRes -> mainRes) thì viết tắt luôn hoặc bỏ then luôn và dùng với await ok
// const topAwaitPromise = main().then(mainRes);

const topAwaitPromise = main().then((mainRes) => mainRes.data);
console.log('>>>topAwaitPromise >>> : ', await topAwaitPromise);
