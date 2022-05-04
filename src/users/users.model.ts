import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
import { Roles } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "mail@mail.ru", description: "Электронная почта" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "******", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "false", description: "Бан?" })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: "За оскорбления", description: "Причина бана" })
  @Column({ type: DataType.STRING })
  banReason: string;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];

  @HasMany(() => Posts)
  posts: Posts[];
}
