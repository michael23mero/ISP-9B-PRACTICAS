import { PartialType } from '@nestjs/mapped-types';
import { CreateCanalDto } from './create-canal.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateCanalDto extends PartialType(CreateCanalDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}

