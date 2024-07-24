import { Router} from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

import { getCustomRepository } from 'typeorm';



const sessionsRouter = Router();

/*sessionsRouter.get('/', async (request, response) =>{
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});*/

sessionsRouter.post('/', async (request, response) => {
    
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService;

    const { user, token } = await authenticateUser.execute({
        email,
        password,
    });

    delete user.password;
    
    return response.json({ user, token});
    
});

export default sessionsRouter;