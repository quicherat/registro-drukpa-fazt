import {Router} from 'express'

const router = Router()

router.get('/even', (req, res) => res.send("eventos"))

export default router