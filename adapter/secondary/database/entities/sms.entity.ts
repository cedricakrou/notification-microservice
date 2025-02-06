import { Entity } from 'typeorm';
import { NotificationEntity } from './notification.entity';

@Entity()
export class SmsEntity extends NotificationEntity {}
