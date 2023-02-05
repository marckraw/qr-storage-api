import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Picture} from "./picture.entity";

@Injectable()
export class PictureService {
    constructor(@InjectRepository(Picture) private pictureRepository: Repository<Picture>) {
    }

    findAll(): Promise<Picture[]> {
        return this.pictureRepository.find();
    }

    findOne(id: string): Promise<Picture> {
        return this.pictureRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.pictureRepository.delete(id);
    }
}
