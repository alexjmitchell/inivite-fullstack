const router = require("express").Router()

const users = []

router.get("/", (req, res, next) => {
  res.json(users)
})

// router.get("https://randomuser.me/api/?results=1", (req, res, next) => {
//   res.json(users)
//   console.log(data)
// })

module.exports = router
