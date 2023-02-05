import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Tag} from "./tag.entity";
import {CreateTagDto} from "./dto/create-tag.dto";

@Injectable()
export class TagService {
    constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {
    }

    findAll(): Promise<Tag[]> {
        return this.tagRepository.find();
    }

    findOne(id: string): Promise<Tag> {
        return this.tagRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.tagRepository.delete(id);
    }

    async createTag(dto: CreateTagDto) {

        console.log("###")
        console.log(dto)
        console.log("###")

        return this.tagRepository.save(dto)
    }
}
