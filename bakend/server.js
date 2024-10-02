const express = require("express");
const cors = require("cors"); // CORS 미들웨어 추가
const axios = require("axios"); // axios 사용
const app = express();
const client_id = "12N7s5caCx4M60sHs_KJ";
const client_secret = "ynrfN9WeSh";
// CORS 설정 추가
app.use(cors());
app.get("/search/book", async function (req, res) {
  const api_url =
    "https://openapi.naver.com/v1/search/book?query=" +
    encodeURIComponent(req.query.query);

  try {
    const response = await axios.get(api_url, {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    });
    res.status(200).json(response.data); // 성공적으로 데이터를 반환
  } catch (error) {
    console.error("Error fetching data from Naver API:", error);
    res.status(500).json({ error: "Failed to fetch data from Naver API" });
  }
});

app.listen(3000, function () {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
