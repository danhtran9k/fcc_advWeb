const main = () => {
  const address = document.getElementById('txtAddress').value;
  getGeoCode(address)
    .then((res) => {
      console.log('res getGeoCode:', res);
      // vẫn bị lồng then trong then
      return getWeather(res.lat, res.lng);
      // Thay vì .then trong phần return, ta có thể .then cho getWeather ở ngoài
    })
    // Promise chain
    // khi return về promise có thể tiếp tục chain ở ngoài
    .then((weatherRes) => {
      console.log('weatherRes:', weatherRes);
      document.getElementById('summaryText').innerHTML = weatherRes.summary;
      document.getElementById('temperatureText').innerHTML =
        weatherRes.temperature;
    })
    // Nếu bất cứ Promise nào có lỗi sẽ skip toàn bộ then còn lại
    // Nhảy xuống catch
    .catch((err) => {
      console.log(err);
    });
};

const getGeoCode = (address) => {
  return new Promise((resolve, reject) => {
    superagent
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`
      )
      .end((err, res) => {
        if (err) {
          console.log('err:', err);
          reject(err);
        }

        console.log('res ggMap API:', res);
        const { lat, lng } = res.body.results[0].geometry.location;
        const data = { lat, lng };
        resolve(data);
      });
  });
};

// End là err, res ngược với Promise là res, err !!
const getWeather = (lat, lng) => {
  return new Promise((resolve, reject) => {
    //dùng superagent call api của darksky, lấy thời tiết của địa chỉ người dùng nhập
    // darkSky chặn gửi API từ nguồn lạ nên herokuapp kiểu trung gian
    // -> cheat fix CORS

    // lồng callback trong callback -> callback hell
    superagent
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`
      )
      .end((err, res) => {
        if (err) {
          console.log('err:', err);
          reject(err);
        }
        console.log('res darksky:', res);
        const { summary, temperature } = res.body.currently;
        const data = { summary, temperature };
        resolve(data);
        // ko set trong đây nữa
        // document.getElementById('summaryText').innerHTML = summary;
        // document.getElementById('temperatureText').innerHTML = temperature;
      });
  });
};
