require("dotenv").config();

module.exports = {
  env: {
    SERVERS: process.env.SERVERS,
  },
  experimental: {
    publicDirectory: true
  }
};
