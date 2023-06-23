import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'canals'})
@ObjectType()
export class Canal {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    @Field(() => String)
    identificacion: string

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;
    
}