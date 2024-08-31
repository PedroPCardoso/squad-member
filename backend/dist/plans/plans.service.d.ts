import { UpdatePlanDto } from './dto/update-plan.dto';
import { CreatePlanDto } from './dto/create-plan.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Plan } from './plan.model';
export declare class PlansService {
    private plans;
    getPlans(filterDto: GetTasksFilterDto): Plan[];
    getPlanById(id: string): Plan;
    createPlan(createPlanDto: CreatePlanDto): Plan;
    deletePlanById(id: string): void;
    updatePlan(id: string, updatePlanDto: UpdatePlanDto): Plan;
}
