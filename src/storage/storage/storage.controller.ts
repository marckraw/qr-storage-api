import {Controller, Get} from '@nestjs/common';

@Controller('storage')
export class StorageController {
    @Get('')
    getData() {
        return {
            data: "storage data"
        }
    }
}
