import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'


const router = Router()

router.get('/pagos', authRequired, (req,res) => res.send("pagos"))

export default router