"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const plan_status_enum_1 = require("./plan-status.enum");
const uuid_1 = require("uuid");
let PlansService = class PlansService {
    constructor() {
        this.plans = [];
    }
    getPlans(filterDto) {
        return this.plans;
    }
    getPlanById(id) {
        return this.plans.find(plan => plan.id === id);
    }
    createPlan(createPlanDto) {
        const { title, description } = createPlanDto;
        const plan = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            status: plan_status_enum_1.PlanStatus.ACTIVE
        };
        this.plans.push(plan);
        return plan;
    }
    deletePlanById(id) {
        this.plans = this.plans.filter(plan => plan.id !== id);
    }
    updatePlan(id, updatePlanDto) {
        return this.getPlanById(id);
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)()
], PlansService);
//# sourceMappingURL=plans.service.js.map