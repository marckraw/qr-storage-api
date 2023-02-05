import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe, VersioningType} from "@nestjs/common";

const corsWhitelist = ['http://localhost:3000', 'https://web.hyzone.app', /(https:\/\/web-hyzone-)(.+)(-hyzone.vercel.app)/, 'https://hyzone.app'];
const corsOptions = {
  origin: corsWhitelist,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // strip out, stuff that are not defined in our DTO
      }),
  );

  const config = new DocumentBuilder()
      .setTitle('QR Storage API')
      .setDescription('The QR Storage API description')
      .setVersion('0.1')
      .addTag('qr-storage')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
