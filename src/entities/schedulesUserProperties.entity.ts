import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Properties from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
class SchedulesUserProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties, (properties) => properties.schedules)
  properties: Properties;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export default SchedulesUserProperties;
