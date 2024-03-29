import bcrypt from 'bcrypt';
import userModel from '../../models/userModel';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const login = async (req, res) => {
    const { email, pass } = req.body;
    const userFound = await userModel.getByEmail();

    if (!userFound) return res.status(401).json({
        error:"Email ou senha inválida!"
    })

    const isValid = await compare(pass, userFound.pass);

    if (!isValid) return res.status(401).json({
    error: "Email ou senha inválida!"
    })
    
    return res.json({
        success: 'Usuário do login!',
        user: userFound
    })  

    prisma.session.create({
        data: {
            user_id: userFound.id,client: "API DOG",
            token: refreshToken
        }

    })
}

