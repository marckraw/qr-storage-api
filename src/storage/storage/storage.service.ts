import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Storage} from "../storage/storage.entity";

@Injectable()
export class StorageService {
    constructor(@InjectRepository(Storage) private storageRepository: Repository<Storage>) {
    }

    findAll(): Promise<Storage[]> {
        return this.storageRepository.find();
    }

    findOne(id: string): Promise<Storage> {
        return this.storageRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.storageRepository.delete(id);
    }
}
