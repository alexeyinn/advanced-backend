import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Roles } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Roles, UserRoles])],
})
export class UsersModule {}
