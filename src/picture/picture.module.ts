import { Module } from '@nestjs/common';
import {PictureController} from "./picture.controller";
import {PictureService} from "./picture.service";
import {Picture} from "./picture.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Picture])],
    controllers: [PictureController],
    providers: [PictureService],
})
export class PictureModule {}
