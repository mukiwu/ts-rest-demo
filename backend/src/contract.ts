import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const Schema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});

const ErrorSchema = z.object({
  message: z.string(),
});

// 定義 API 合約
export const apiContract = c.router({
  getUser: {
    method: "GET",
    path: "/user/:id",
    responses: {
      200: Schema,
      404: ErrorSchema,
    },
  },
});
