import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const refreshToken = async (req, res) => {
    let token;

    const authorization = req.headers?.authorization;
    if (authorization) token = authorization.split(' ')[1];

    if(!token) return res.status(401).json({
        error: 'Usuário não autorizado',
        code: 'token-not-found'
    })
    jwt.verify(tken, SECRET_KEY, (error, decoded) => {
        if (error) return res.status(401).json({
            error: 'Usuário não autorizado.',
            message: error.message,
            code: 'invalid-token'
        })
        req.userLogged = { id: decoded.id, name: decoded.name }
    })

    const userFound = await userModel.getById(decoded.id);
    const sessionFound = await prisma.session.findUnique({
        where: {
            token: token,
            user_id: userFound.id
        }
    })

    
    const accesToken = jwt.sign(
        {id: userFound.id, name: userFound.name},
        SECRET_KEY,
        {expiresIn: '10m'}
    )

    prisma.session.update({
        where: {
            user_id: userFound.id,
            token: token
        },
        data: refreshToken
    })
    next();
}