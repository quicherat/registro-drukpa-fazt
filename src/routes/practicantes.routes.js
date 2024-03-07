import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'

const router = Router()

router.get('/pacticantes', authRequired, (req, res)=> res.send('practicantes'))


export default router