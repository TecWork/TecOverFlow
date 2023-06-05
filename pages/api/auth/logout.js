import { verify } from "jsonwebtoken"
import {serialize} from "cookie"

export default function logoutHandler(req, res){

    const { TecOverFlowT } = req.cookies

    if (!TecOverFlowT) {
        return res.status(401).json({ error: 'no token' })
    }

    try {
        verify(TecOverFlowT, 'secretkey')
        const serialized = serialize('TecOverFlowT', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/',
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json({message: 'logout success'})
    } catch (error) {
        return res.status(401).json({ error: 'o tekn' })
    }

}