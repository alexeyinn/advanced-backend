import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostsCreationAttrs {
  title: string;
  content: string;
  image: string;
}

@Table({ tableName: "posts", createdAt: false, updatedAt: false })
export class Posts extends Model<Posts, PostsCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Заголовок", description: "Заголовок сообщения" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: "Текст сообщения и закрепы",
    description: "Текст сообщения и закрепы",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "pic.jpg", description: "Файл" })
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: false })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
