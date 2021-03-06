import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";
// 1:34:50
async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Advanced backend")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("@alexeyinn")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);
  // Доступ ко всем эндпоинтам, только для авторизованных пользователей
  // app.useGlobalGuards(JwtAuthGuard)

  //app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
}

start();
