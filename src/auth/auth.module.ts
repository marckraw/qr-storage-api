import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthService} from "./auth/auth.service";
import {AuthController} from "./auth/auth.controller";
import {User} from "./user/user.entity";
import {UserService} from "./user/user.service";
import {UserController} from "./user/user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController, UserController],
    providers: [AuthService, UserService],
})
export class AuthModule {}
