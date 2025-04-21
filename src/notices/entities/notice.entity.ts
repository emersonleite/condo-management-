import { Resident } from 'src/residents/entities/resident.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 250 })
  description: string;

  // Adaptar para ENUM
  @Column({ type: 'varchar' })
  priority: string;

  // Adaptar para ENUM
  @Column({ type: 'varchar' })
  status: string;

  @CreateDateColumn()
  createdAt?: Date;

  //Criar relacionamento com Resident
  // Relação de muitos para um, pois um residente pode criar vários avisos
  @ManyToOne(() => Resident)
  @JoinColumn({ name: 'createdBy' })
  createdBy: Resident;

  @UpdateDateColumn()
  updatedAt?: Date;
}
