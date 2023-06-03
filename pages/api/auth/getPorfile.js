import { verify } from 'jsonwebtoken'


export default function profileHandler(req, res) {

    const { TecOverFlowT } = req.cookies

    if (!TecOverFlowT) {
        return res.status(401).json({ error: 'unauthorized' })
    }

    try {
        const user = verify(TecOverFlowT, 'secretkey')
        return res.json({email: user.Email, name: user.NomCompleto})
    } catch (err) {
        return res.status(401).json({ error: 'unauthorized' })
    }

};