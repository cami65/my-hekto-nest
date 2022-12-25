import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
  };
  app.enableCors(options);
  await app.listen(10000);
}
bootstrap();
