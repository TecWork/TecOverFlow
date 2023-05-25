import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler(req, res){

    const {displayName, email, photoURL, uid} = req.body
    /* if (email === 'agalvanrojas05@gmail.com' && password === 'qwerty'){ */
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            Email: email,
            NomCompleto: displayName,
            Foto: photoURL,
            Id: uid
        }, 'secretkey') // el secretkey debe ser una variable de entorno

        const serializedToken = serialize('TecOverFlowT', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/',
        })

        res.setHeader('Set-Cookie', serializedToken)
        return res.status(200).json(displayName)

    return res.status(401).json({error:'login failed'})

}