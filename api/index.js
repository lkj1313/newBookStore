import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

// 환경 변수 로드
dotenv.config(); // .env 파일을 현재 디렉토리에서 로드합니다.

const app = express();

// CORS 설정
app.use(
  cors({
    origin: "*", // 또는 'https://new-book-store-7m3b-2ta16db80-lkj1313s-projects.vercel.app' 같은 특정 도메인
  })
);

// 환경 변수 확인 (로그)
console.log("Client ID:", process.env.NAVER_CLIENT_ID);
console.log("Client Secret:", process.env.NAVER_CLIENT_SECRET);

// API 엔드포인트
app.get("/search/book", async (req, res) => {
  const {
    query,
    display = 10,
    start = 1,
    sort = "sim",
    type = "general",
  } = req.query;

  // Naver API URL 설정
  const api_url =
    type === "isbn"
      ? `https://openapi.naver.com/v1/search/book_adv?d_isbn=${encodeURIComponent(
          query
        )}&display=${display}&start=${start}&sort=${sort}`
      : `https://openapi.naver.com/v1/search/book?query=${encodeURIComponent(
          query
        )}&display=${display}&start=${start}&sort=${sort}`;

  try {
    // Naver API로 요청
    const response = await axios.get(api_url, {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    });

    // 응답 데이터 전송
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching data from Naver API:",
      error.response ? error.response.data : error.message
    );
    res
      .status(error.response ? error.response.status : 500)
      .send(error.response ? error.response.data : "Internal Server Error");
  }
});

// Vercel의 서버리스 함수로 Express 앱을 사용
export default app;
