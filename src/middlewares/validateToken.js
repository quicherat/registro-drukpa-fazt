import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    
    if(!token) res.status(401).json({ message: "No token, authorization denied"})

    jwt.verify(token, process.env.SECRETORPRIVATEKEY, (err, user) => {
        if(err) return res.status(403).json({ message: "Invalid token"})

        req.user = user
        
        next()
    })

}