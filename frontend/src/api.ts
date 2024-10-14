import { initClient } from "@ts-rest/core";
import { apiContract } from "../../backend/src/contract";

export const api = initClient(apiContract, {
  baseUrl: "https://r2rp4h-3000.csb.app",
});
