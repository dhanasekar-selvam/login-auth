// CommonJs
const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  fastify.register(require("fastify-mongodb"), {
    url: "mongodb://127.0.0.1:27017/test",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector);
