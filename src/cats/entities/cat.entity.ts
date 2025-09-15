import { Breed } from 'src/breeds/entities/breed.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
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

  // eliminacion logica de la fila
  @DeleteDateColumn()
  deletedAt: Date;
}
