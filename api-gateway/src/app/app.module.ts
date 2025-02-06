import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationEntity } from '../../../adapter/secondary/database/entities/push-notification.entity';
import { SmsEntity } from '../../../adapter/secondary/database/entities/sms.entity';
import { EmailEntity } from '../../../adapter/secondary/database/entities/email.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'notification-service',
      entities: [PushNotificationEntity, SmsEntity, EmailEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
