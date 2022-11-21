const remote = axios.create({
  baseURL: "tadesse-portfolio.herokuapp.com/api/v1/",
  timeout: 2000,
});

export const get = async (custom) => {
  console.log("custom is " + custom);
  return remote.get(custom);
};
