import { Column } from 'typeorm';
import { EntityRoot } from './entity-root.entity';

export abstract class NotificationEntity extends EntityRoot {
  @Column()
  protected from: string;
  @Column()
  protected to: string;
  @Column()
  protected title: string;
  @Column()
  protected subTitle: string;
  @Column()
  protected text: string;
  @Column()
  protected description: string;
}
