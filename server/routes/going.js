const router = require("express").Router()

router.post("/going", (req, res, next) => {
  const user = req.body
  res.json(user)
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

module.exports = router
