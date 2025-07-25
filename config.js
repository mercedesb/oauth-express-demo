const fs = require("fs")
const path = require("path")

const SCHEME = process.env.SCHEME || "https"
const HOST = process.env.HOST || "localhost"
const PORT = Number.parseInt(process.env.PORT || "8080")

module.exports = {
  SCHEME,
  HOST,
  PORT,
}
