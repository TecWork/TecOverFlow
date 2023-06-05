import { verify } from 'jsonwebtoken'


export default function profileHandler(req, res) {

    const { TecOverFlowT } = req.cookies

    if (!TecOverFlowT) {
        return res.status(401).json({ error: 'unauthorized' })
    }

    try {
        const user = verify(TecOverFlowT, 'secretkey')
        console.log(user, 'user')
        return res.json({email: user.Email, name: user.NomCompleto, photo: user.Foto})
    } catch (err) {
        return res.status(401).json({ error: 'unauthorized' })
    }

};