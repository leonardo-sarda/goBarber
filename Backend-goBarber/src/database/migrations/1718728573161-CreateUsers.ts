import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1718728573161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default: 'uuid_generate_v4()',  
                    },
                    {
                        name:'name',
                        type:'varchar',
                    
                    },
                    {
                        name:'password',
                        type:'varchar',

                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique:true,
                    },
                    {
                        name:'create_at',
                        type:'timestamp',
                        default: 'now()',
                    },
                    {
                        name:'update_at',
                        type:'timestamp',
                        default: 'now()',
                    }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
