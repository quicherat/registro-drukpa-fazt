import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'

const router = Router()

router.get('/practi', authRequired, (req,res) => res.send('practicantes'))

export default router