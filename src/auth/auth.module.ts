import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthService} from "./auth/auth.service";
import {AuthController} from "./auth/auth.controller";
import {User} from "./user/user.entity";
import {UserService} from "./user/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [AuthService, UserService],
})
export class AuthModule {}
