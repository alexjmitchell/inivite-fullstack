const routes = require("express").Router()
const request = require("request")

routes.get("/users", (req, res) => {
  request("https://randomuser.me/api/?results=1", function(
    error,
    response,
    body
  ) {
    res.send(body)
  })
})

module.exports = routes
