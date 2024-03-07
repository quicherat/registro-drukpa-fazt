import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import { getTasks } from '../controllers/task.controller.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)

export default router