import { getRepository } from "typeorm";
import {compare, hash} from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { JsonWebTokenError } from "jsonwebtoken";


import authConfig from '../config/auth'
import User from "../models/User";
import AppError from "../erros/AppError";


interface Request{
    email: string;
    password: string;
}

interface Response{
    user : User;
    token: string;
}


class AuthenticateUserService {
    public async execute({email, password}: Request): Promise<Response>{
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({where: {email}});

        if(!user){
            throw new AppError('Incorrect email/password combination', 401);
        }

        // user.password - senha Criptografada 
        // password - senha não  Criptografada 

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            throw new AppError('Incorrect email/password combination', 401);
        }

        const {secret, expiresIn} = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn 

        });
        return{
            user,
            token,
        }
        
    }
}

export default AuthenticateUserService;