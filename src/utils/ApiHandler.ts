import axios from "axios";
import Global from "./api";

export const GetRequest = async (link: string) => {
  let headers = { "Content-Type": "application/json" };

  let response = await axios.get(link, {
    headers: headers,
    withCredentials: true,
    timeout: 1000 * 60,
  });

  return response;
};

export const PostRequest = async ({
  link,
  requestData,
}: {
  link: string;
  requestData: any;
}) => {
  let headers = {
    "Content-Type": "application/json",
  };

  let response = await axios.post(link, requestData, {
    headers: headers,
    withCredentials: true,

    timeout: 2000 * 60,
  });

  return response;
};
