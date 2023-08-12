import axios from "axios";
import { CHARGE_URL } from "../constants";
import { ChargeResult } from "../search/search-types";

export async function searchForChargePoints(postcode: string, speed: number) {
  const result = await axios.get<ChargeResult>(
    CHARGE_URL + getParams(postcode, speed),
    {
      withCredentials: false,
      // headers: {
      //   "Access-Control-Allow-Origin": "http://localhost:5173",
      //   "Content-Type": "application/json",
      // },
    }
  );

  return result.data;
}

function getParams(postcode: string, speed: number) {
  return `/postcode/${postcode}/rated-output-kw/${speed}`;
}
