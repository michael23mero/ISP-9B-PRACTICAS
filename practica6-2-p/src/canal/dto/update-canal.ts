import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";
import { CreateCanalInput } from "./create-canal";

@InputType()
export class UpdateCanalInput extends PartialType(CreateCanalInput) {
    @Field(() => ID)    
    @IsUUID()
    id: string;
}