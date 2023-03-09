import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Notification Microservice APIs')
    .setDescription(
      'Documentation of notification microservice APIs. It includes email and sms endpoint.',
    )
    .setVersion('0.0.1')
    .setContact('Cedric Akrou', '', 'cedricakrou@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
