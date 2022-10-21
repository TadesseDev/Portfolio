const remote = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
});

export const get = async (custom) => {
  return remote.get(custom);
};
