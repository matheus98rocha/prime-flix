import server from "../server";

export const userServices = {
  getUserById: async () => {
    return await server
      .get("user/63fff25194de7570f1498d3a")
      .then((e) => e.data);
  },
};
