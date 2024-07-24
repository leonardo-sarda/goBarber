/*import { isEqual } from "date-fns"; */  /**Aqui eu pego a variavel que crie no model e aqui eu faço as funções, de listar, de criar um novo agendamento, apagar, mudar, aqui é as funções */
import { EntityRepository, Repository} from 'typeorm';

import Appointment from "../models/Appointments";


//DTO  Data Transfer Object
/*interface CreateAppointmentDTO{
    provider: string;
    date: Date;

}*/

/* O parametro do @ decorator, passa o model como parametro, nome da class nos models  */ 
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{


    /*private appointments: Appointment[];

    constructor(){
        this.appointments = [];
   
    }*/



    /*   Funcção de verificar se tem horario iguais,*/
    public async findbyDate(date: Date): Promise<Appointment | null>{
        const findAppointment = await this.findOne({
            where: {date},
        });
        return findAppointment || null;
    }
    
            /*Funcçao de criar um novo agendamento*/
    /*public create({provider, date}: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({provider, date});

        this.appointments.push(appointment);

        return appointment;
    }*/

    /*public  Listar todos os agendamentos*/
    /*ublic listAppoitments(): Appointment[] {
        return this.appointments;
    }*/

}
export default AppointmentsRepository;