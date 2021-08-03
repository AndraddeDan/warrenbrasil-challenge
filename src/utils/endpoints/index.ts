import env from "@/configs/env";
import { Transactions } from "./Transactions";

interface QueryParamUrl {
  [key: string]: string | number;
}

export const ApiUrls = {
  ...Transactions,
};

const buildQueryParams = (queryParams: QueryParamUrl[]) =>
  queryParams.reduce((acc, cur, index) => {
    const key = Object.keys(cur).join();
    const value = Object.values(cur).join();

    const isLastParam = queryParams.length - 1 === index;
    const hasAmpersand = isLastParam ? "" : "&";

    return (acc += `${key}=${value}${hasAmpersand}`);
  }, "?");

export const buildApiUrl = (
  ApiUrl: string,
  queryParams?: QueryParamUrl[]
): string =>
  `${env.apiURL}/${ApiUrl}${queryParams ? buildQueryParams(queryParams) : ""}`;
