import {Controller, Get} from '@nestjs/common';
import {StorageItemItemService} from "./storage-item.service";

@Controller('storage-item')
export class StorageItemController {
    constructor(private storageItemService: StorageItemItemService) {
    }

    @Get('')
    getAllStorageItems() {
        return this.storageItemService.findAll()
    }
}
