import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "1", description: "Id пользователя из БД" })
  readonly userId: number;
  @ApiProperty({ example: "За оскорбления", description: "Причина бана" })
  readonly banReason: string;
}
