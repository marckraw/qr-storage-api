import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StorageItem} from "./storage-item.entity";

@Injectable()
export class StorageItemItemService {
    constructor(@InjectRepository(StorageItem) private storageRepository: Repository<StorageItem>) {
    }

    findAll(): Promise<StorageItem[]> {
        return this.storageRepository.find();
    }

    findOne(id: string): Promise<StorageItem> {
        return this.storageRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.storageRepository.delete(id);
    }
}
