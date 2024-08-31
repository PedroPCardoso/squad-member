import { Controller, Get } from '@nestjs/common';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
    constructor(private plansService: PlansService) { }

    @Get()
    async getClients() {
        return this.plansService.getAllPlans();
    }
}
