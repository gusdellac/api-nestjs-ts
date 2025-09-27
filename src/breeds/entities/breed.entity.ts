import { Cat } from '../../cats/entities/cat.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Cat, (cat) => cat.breed)
  cats: [];

  @DeleteDateColumn()
  deletedAt: Date;
}
