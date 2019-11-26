const router = require("express").Router()

router.post("/notgoing", (req, res, next) => {
  const user = req.body
  res.json(user)
})

router.get("/notgoing", (req, res, next) => {
  res.json(going)
})

module.exports = router
