import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Canal {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{ unique:true })
    identificacion:string;

    @Column('varchar',{ unique:true })
    nombre_de_canal:string;
}

