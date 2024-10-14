import { createExpressEndpoints, initServer } from "@ts-rest/express";
import express from "express";
import bodyParser from "body-parser";
import { apiContract } from "./src/contract";

// 模擬資料庫的資料
const users = [
  { id: "1", name: "MUKI", age: 18 },
  { id: "2", name: "Apple", age: 25 },
];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const s = initServer();

// 定義 API handler
const handlers = {
  getUser: async ({ params }: { params: { id: string } }) => {
    const user = users.find((u) => u.id === params.id);
    if (!user) {
      return {
        status: 404 as const,
        body: { message: "User not found" },
      };
    } else {
      return { status: 200 as const, body: user };
    }
  },
};

// 連結 API 合約與 Express 的端點
createExpressEndpoints(apiContract, handlers, app);

// 啟動伺服器
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
