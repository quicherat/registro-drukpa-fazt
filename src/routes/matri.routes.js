import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'


const router = Router()

router.get('/matri', authRequired, (req, res) => res.send('Matriculas'))

export default router