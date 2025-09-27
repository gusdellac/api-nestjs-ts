import { User } from '../../users/entities/user.entity';
import { Breed } from '../../breeds/entities/breed.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    eager: true, //para que traiga la raza al hacer un findOne
  })
  breed: Breed;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
  user: User;

  @Column()
  userEmail: string;

  // eliminacion logica de la fila
  @DeleteDateColumn()
  deletedAt: Date;
}
