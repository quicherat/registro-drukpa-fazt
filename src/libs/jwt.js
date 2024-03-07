import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const createAccessToken = (payload) => {

    return new Promise ( (resolve, reject) => {

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );

    })
}