import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "mail@mail.ru", description: "Электронная почта" })
  readonly email: string;
  @ApiProperty({ example: "*****", description: "Пароль" })
  readonly password: string;
}
