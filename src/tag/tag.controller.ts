import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {TagService} from "./tag.service";
import {CreateTagDto} from "./dto/create-tag.dto";

@Controller('tag')
export class TagController {
    constructor(private tagService: TagService) {
    }

    @Get('')
    getAllTags() {
        return this.tagService.findAll()
    }

    @Post('')
    async createTag(@Body() body: CreateTagDto) {
        const response = await this.tagService.createTag(body)
        console.log("This is response from db: ")
        console.log(response)

        return response
    }
}
