import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

const app = express();

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
  } = req.query;

  let api_url = "";

  if (type === "isbn") {
    api_url = `https://openapi.naver.com/v1/search/book_adv?d_isbn=${encodeURIComponent(
      query
    )}&display=${display}&start=${start}&sort=${sort}`;
  } else {
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
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from Naver API:", error);
    res.status(500).json({ error: "Failed to fetch data from Naver API" });
  }
});

// Vercel의 서버리스 함수로 Express 앱을 내보냅니다.
export default app;
