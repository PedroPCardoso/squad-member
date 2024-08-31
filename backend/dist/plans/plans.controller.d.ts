import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { PlansService } from './plans.service';
import { Plan } from './plan.model';
export declare class PlansController {
    private plansService;
    constructor(plansService: PlansService);
    getPlans(filterDto: GetTasksFilterDto): Promise<Plan[]>;
    getPlanById(id: string): Plan;
    createPlan(createPlanDto: CreatePlanDto): Plan;
    deletePlanById(id: string): void;
    updatePlan(id: string, updatePlanDto: UpdatePlanDto): Plan;
}
