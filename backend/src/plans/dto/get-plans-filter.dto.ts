import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlanStatus } from '../plan-status.enum';

export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(PlanStatus)
    status?: PlanStatus;

    @IsOptional()
    @IsString()
    search?: string;
}