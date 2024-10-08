import { Router} from 'express';
import { startOfHour, parseISO} from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();



appointmentsRouter.use(ensureAuthenticated);


/*const appointmentsRepository = new AppointmentsRepository();*/

/**Rota: Receber a requisição, chamar outro arquivo, e devolver com a resposta */
/*const appointments: Appointment[] = [];*/

appointmentsRouter.get('/', async (request, response) =>{
    console.log(request.user);
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
//try{
    const { provider_id , date } = request.body;
    
    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({provider_id, date: parseDate});

    return response.json(appointment);
/*} catch (err) {
    return response.status(err.statusCode).json({error: err.message});
}*/
});





export default appointmentsRouter;