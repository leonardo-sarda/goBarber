import { startOfHour } from "date-fns";
import {getCustomRepository } from 'typeorm';

import Appointment from "../models/Appointments";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import AppError from "../erros/AppError";
import { uuid } from "uuidv4";

/** 3 problemas para resolver
 * [x] Recebimento das informações
 * [/] Tratativa de erro e execossões
 * [x] Acesso ao repositorio
 */

interface Request {
    provider_id: string;
    date: Date;
}

/**Dependecy Inversion (SOLID) */

class CreateAppointmentService {
    /*private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
        
    }*/
    public async execute({provider_id, date}:Request): Promise<Appointment>{
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date);

        const findAppointmentInSamDate = await appointmentsRepository.findbyDate(appointmentDate);

        if (findAppointmentInSamDate){
            throw new AppError('This appointment is already booked',);
        }

        const appointment = appointmentsRepository.create({provider_id , date: appointmentDate});

        await appointmentsRepository.save(appointment);

        return appointment;
    }

}

export default CreateAppointmentService;