import server from "../server";

export const userServices = {
  getUserById: async () => {
    return await server
      .get("user/641b03b286833afa1c4e3d67")
      .then((e) => e.data);
  },
};
