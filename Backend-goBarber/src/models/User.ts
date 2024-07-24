import {uuid} from 'uuidv4'; /*Aqui faz a variavel Appointment que cria a variavel para criar os agendamentos*/
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()   
    email: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    
}

export default User;

