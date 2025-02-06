import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class EntityRoot {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
