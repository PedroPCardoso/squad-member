import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PlanStatus } from './plan-status.enum';

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: PlanStatus;
}