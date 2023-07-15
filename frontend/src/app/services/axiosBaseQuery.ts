import axios, { AxiosRequestConfig, AxiosError } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

type ReturnData = unknown;
type Url = string;
type BaseUrl = {
  baseUrl: Url;
};

type Props = {
  url: string;
  method: AxiosRequestConfig["method"];
  headers?: AxiosRequestConfig["headers"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

export const axiosBaseQuery =
  ({ baseUrl }: BaseUrl): BaseQueryFn<Props, ReturnData, ReturnData> =>
  async ({ url, headers, method, data, params }: Props) => {
    try {
      const result = await axios({
        url: `${baseUrl}${url}`,
        headers,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (axiosError) {
      //
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
