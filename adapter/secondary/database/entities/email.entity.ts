import { Entity } from 'typeorm';
import { NotificationEntity } from './notification.entity';

@Entity()
export class EmailEntity extends NotificationEntity {}
