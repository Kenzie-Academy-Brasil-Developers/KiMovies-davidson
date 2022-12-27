import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Properties from "./properties.entity";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, length: 150 })
  name: string;

  @OneToMany(() => Properties, (properties) => properties.category)
  properties: Properties[];
}

export default Categories;
