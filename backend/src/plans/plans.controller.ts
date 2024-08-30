import { Controller } from '@nestjs/common';
import { PlansService } from './plans.service';
@Controller('plans')
export class PlansController {
    constructor(private plansService: PlansService) { }
    a
    async getClients() {
        return this.plansService.getAllPlans();
    }
}
