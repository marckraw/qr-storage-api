import {Controller, Get} from '@nestjs/common';
import {PictureService} from "../picture/picture.service";
import {TagService} from "./tag.service";

@Controller('tag')
export class TagController {
    constructor(private tagService: TagService) {
    }

    @Get('')
    getAllTags() {
        return this.tagService.findAll()
    }
}
