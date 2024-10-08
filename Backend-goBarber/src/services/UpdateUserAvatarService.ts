import {getRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';


import AppError from '../erros/AppError';
import User from '../models/User'
import uploadConfig from '../config/upload';

interface Request{
    user_id: string;
    avatarFilename : string;

}
class UpdateUserAvatarService{
    public async execute({user_id, avatarFilename}:Request):Promise<User>{
        const userRepository = getRepository(User);
        
        const user = await userRepository.findOne(user_id);
        
        if(!user){
            throw new AppError('Only authenticated user can change avatar.', 401)   
        }
        if (user.avatar){
            //Deletar avatar anterior

            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
            
            if (userAvatarFileExists){
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await userRepository.save(user);

        return user;
    }

}

export default UpdateUserAvatarService;