const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

async function getData(url) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === API_URL) {
          resolve("성공");
        } else {
          reject("실패");
        }
      }, 3000);
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// 각각의 URL에 대해 getData 함수 호출
// getData(API_URL);
getData(WRONG_URL);
