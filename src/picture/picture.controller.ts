import {Controller, Get} from '@nestjs/common';
import {PictureService} from "./picture.service";

@Controller('picture')
export class PictureController {
    constructor(private pictureService: PictureService) {
    }
    @Get('')
    getAllPictures() {
        return this.pictureService.findAll()
    }
}
