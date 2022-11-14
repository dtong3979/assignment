import { Router } from 'express'
const router = Router()

router.get('/', function (req, res, next) {
  res.send({ status: 'OK' })
})

export default router
