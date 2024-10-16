import express from "express";
import axios from "axios";
import cors from "cors"; // CORS 모듈 사용
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

const app = express();

// CORS 설정: 모든 출처에서의 요청 허용
app.use(
  cors({
    origin: "*",
  })
);

app.get("/search/book", async (req, res) => {
  const {
    query,
    display = 10,
    start = 1,
    sort = "sim",
    type = "general",
  } = req.query;

  const api_url =
    type === "isbn"
      ? `https://openapi.naver.com/v1/search/book_adv?d_isbn=${encodeURIComponent(
          query
        )}&display=${display}&start=${start}&sort=${sort}`
      : `https://openapi.naver.com/v1/search/book?query=${encodeURIComponent(
          query
        )}&display=${display}&start=${start}&sort=${sort}`;

  try {
    const response = await axios.get(api_url, {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from Naver API:", error);
    res.status(500).json({ error: "Failed to fetch data from Naver API" });
  }
});

// Vercel 서버리스 함수로 Express 앱 사용
export default app;
