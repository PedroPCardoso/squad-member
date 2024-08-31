import { PlanStatus } from './plan-status.enum';
export interface Plan {
    id: string;
    title: string;
    description: string;
    status: PlanStatus;
}
