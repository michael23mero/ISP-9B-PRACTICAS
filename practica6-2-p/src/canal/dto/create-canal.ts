import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateCanalInput {
    @Field(() => String)
    @IsNotEmpty()
    identificacion: string;

    @Field(() => String)
    @IsNotEmpty()
    nombre: string;

    @Field(()=>Boolean )
    @IsOptional()
    estado:boolean;
}