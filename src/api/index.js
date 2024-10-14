import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

const handler = async (req, res) => {
  // CORS 설정
  cors()(req, res, async () => {
    const {
      query,
      display = 10,
      start = 1,
      sort = "sim",
      type = "general",
    } = req.query;

    let api_url =
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
};

// Vercel의 서버리스 함수로 핸들러를 내보냅니다.
export default handler;
