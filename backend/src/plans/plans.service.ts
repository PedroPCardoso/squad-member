import { Injectable } from '@nestjs/common';

@Injectable()
export class PlansService {
    private plans = []

    getAllPlans() {
        return this.plans;
    }
}
