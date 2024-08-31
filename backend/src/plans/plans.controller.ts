import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { GetTasksFilterDto } from './dto/get-plans-filter.dto';
import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { PlansService } from './plans.service';
import { Plan } from './plan.model';
@Controller('plans')
export class PlansController {
    constructor(private plansService: PlansService) { }

    @Get()
    async getPlans(@Query() filterDto: GetTasksFilterDto) {
        return this.plansService.getPlans(filterDto);
    }

    @Get('/:id')
    getPlanById(@Param('id') id: string): Plan {
        return this.plansService.getPlanById(id);
    }

    @Post()
    createPlan(@Body()
    createPlanDto: CreatePlanDto): Plan {
        return this.plansService.createPlan(createPlanDto);
    }

    @Delete('/:id')
    deletePlanById(@Param('id') id: string): void {
        this.plansService.deletePlanById(id);
    }

    @Patch('/:id')
    updatePlan(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto): Plan {
        return this.plansService.updatePlan(id, updatePlanDto);
    }
}
