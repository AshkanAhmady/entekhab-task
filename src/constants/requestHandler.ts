import http from "./config";

const requestHandler = (method: string, query: string) => {
  return http({
    method,
    data: {
      query,
    },
  });
};

export default requestHandler;
