import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', nullable: false, unique: true, length: 512 })
  name: string;
  @Column({ type: 'varchar', nullable: false, unique: true, length: 2048 })
  specificationFilePath: string;
}
