"use strict";

const Hapi = require("@hapi/hapi");

const server = new Hapi.Server({
  host: "localhost",
  port: 3001,
  routes: {
    cors: true,
  },
});

server.route(require("./routes"));

const init = async () => {
  try {
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${server.info.uri}`);
};

init();
