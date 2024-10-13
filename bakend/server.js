const express = require("express");
const cors = require("cors"); // CORS 미들웨어 추가
const axios = require("axios"); // axios 사용
const app = express();
const dotenv = require("dotenv"); // dotenv 사용
dotenv.config(); // 환경 변수 로드

// CORS 설정 추가
app.use(cors());

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;

app.get("/search/book", async function (req, res) {
  const {
    query,
    display = 10,
    start = 1,
    sort = "sim",
    type = "general",
  } = req.query; // type 추가

  let api_url = "";

  // type에 따라 일반 검색 또는 ISBN 검색 결정
  if (type === "isbn") {
    // ISBN 검색인 경우
    api_url = `https://openapi.naver.com/v1/search/book_adv?d_isbn=${encodeURIComponent(
      query
    )}&display=${display}&start=${start}&sort=${sort}`;
  } else {
    // 일반 검색인 경우
    api_url = `https://openapi.naver.com/v1/search/book?query=${encodeURIComponent(
      query
    )}&display=${display}&start=${start}&sort=${sort}`;
  }

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
