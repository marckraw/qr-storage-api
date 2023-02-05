import {Controller, Get} from '@nestjs/common';
import {StorageItemService} from "./storage-item.service";

@Controller('storage-item')
export class StorageItemController {
    constructor(private storageItemService: StorageItemService) {
    }

    @Get('')
    getAllStorageItems() {
        return this.storageItemService.findAll()
    }
}
