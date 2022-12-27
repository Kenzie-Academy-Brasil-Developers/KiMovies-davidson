import {
  Column,
  Entity,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeRemove,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import SchedulesUserProperties from "./schedulesUserProperties.entity";

@Entity("users")
class User {
  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
    unique: true,
  })
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  isAdm: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeRemove()
  @Column({
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => SchedulesUserProperties, (schedules) => schedules.user)
  schedules: SchedulesUserProperties[];
}

export { User };
