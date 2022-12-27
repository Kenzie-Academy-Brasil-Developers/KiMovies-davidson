import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Properties from "./properties.entity";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 150, nullable: true })
  number?: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Addresses;
