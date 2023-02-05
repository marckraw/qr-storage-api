import { Module } from '@nestjs/common';
import {StorageController} from "./storage/storage.controller";
import {StorageItemController} from "./storage-item/storage-item.controller";
import {StorageService} from "./storage/storage.service";
import {StorageItemService} from "./storage-item/storage-item.service";
import {Storage} from "./storage/storage.entity";
import {StorageItem} from "./storage-item/storage-item.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Storage, StorageItem])],
    controllers: [StorageController, StorageItemController],
    providers: [StorageService, StorageItemService],
})
export class StorageModule {}
