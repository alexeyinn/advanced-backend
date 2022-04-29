import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Обозначение роли" })
  readonly value: string;
  @ApiProperty({ example: "1", description: "Id пользователя из базы" })
  readonly userId: number;
}
