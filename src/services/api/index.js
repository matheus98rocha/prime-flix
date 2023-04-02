import server from "../server";

export const userServices = {
  getUserById: async () => {
    return await server
      .get("user/641b03b286833afa1c4e3d67")
      .then((e) => e.data);
  },
  createUser: async (name, userName, password, email) => {
    return await server
      .post("user/", {
        name: "Fabienne",
        userName: "FabienneUser",
        password: "550143@CMA",
        email: "fabi.teste@gmail.com",
      })
      .then((e) => e.data);
  },
  login: async (email, password) => {
    return await server.post("user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    });
  },
};
