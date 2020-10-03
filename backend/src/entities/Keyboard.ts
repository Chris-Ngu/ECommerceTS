import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Keyboard extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column(() => Number)
    price: Number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column(() => Date)
    soldAt: Date;
}