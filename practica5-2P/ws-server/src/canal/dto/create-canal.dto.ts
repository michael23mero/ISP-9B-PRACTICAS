import { IsNotEmpty, IsString, } from "class-validator";

export class CreateCanalDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre_de_canal:string;
}
