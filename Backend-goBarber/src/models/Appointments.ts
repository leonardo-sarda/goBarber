import {uuid} from 'uuidv4'; /*Aqui faz a variavel Appointment que cria a variavel para criar os agendamentos*/
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import User from './User';


@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'provider_id'})
    provider: User;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    /*constructor({provider, date}: Omit< Appointment, 'id'> ){
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }*/
}

export default Appointment;

