const root = {
  method: "GET",
  path: "/",
  handler: (request, reply) => ({
    version: "0.0.5",
    title: "API do Bullet Jornal"
  })
};

export default root;
