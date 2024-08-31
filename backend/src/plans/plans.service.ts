import { UpdatePlanDto } from './dto/update-plan.dto';
import { CreatePlanDto } from './dto/create-plan.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Injectable } from '@nestjs/common';
import { Plan } from './plan.model';
import { PlanStatus } from './plan-status.enum';
import { v4 as uuid } from 'uuid';
@Injectable()
export class PlansService {
    private plans: Plan[] = []

    getPlans(filterDto: GetTasksFilterDto): Plan[] {
        return this.plans;
    }

    getPlanById(id: string): Plan {
        return this.plans.find(plan => plan.id === id);
    }

    createPlan(createPlanDto: CreatePlanDto): Plan {
        const { title, description } = createPlanDto;
        const plan: Plan = {
            id: uuid(),
            title,
            description,
            status: PlanStatus.ACTIVE
        }
        this.plans.push(plan);
        return plan;
    }

    deletePlanById(id: string): void {
        this.plans = this.plans.filter(plan => plan.id !== id);
    }

    updatePlan(id: string, updatePlanDto: UpdatePlanDto): Plan {
        return this.getPlanById(id);
    }

}
