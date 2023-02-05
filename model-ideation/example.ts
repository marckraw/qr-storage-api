import {Account, Picture, Storage, StorageItem, Tag} from "./database";
import { v4 as uuidv4 } from 'uuid';


const tag1: Tag = {
    _id: uuidv4(),
    name: 'tag1',
    description: 'tag1 description',
}

const picture1: Picture = {
    _id: uuidv4(),
    name: 'Tshirt 1 for item 1',
    description: 'Tshirt 1 for item 1 description',
    base64: 'base64',
    url: 'https://qr-storage.com/picture1.jpg',
    tags: [tag1._id, 'tag2._id', '...'],
}

const item1: StorageItem = {
    _id: uuidv4(),
    name: 'TShirt 1',
    description: 'TShirt 1 description',
    qrCode: "not implemented",
    owner: 'marcin._id',
    pictures: [picture1._id],
    tags: [tag1._id],
    storage: 'piwnica._id',
}


const marcin: Account = {
    _id: uuidv4(),
    name: "Marcin",
    email: "marckraw@icloud.com",
    password: 'some-random-thing',

    storages: ['piwnica._id'],
    pictures: [picture1._id, 'picture2._id', '...'],
    storageItems: ['item1._id', 'item2._id', '...'],
}






const box1: Storage = {
    _id: uuidv4(),
    name: "Pudelko nr 1",
    description: "Pudelko nr 1 w piwnicy",
    qrCode: "not implemented",

    owner: marcin._id,
    pictures: [picture1._id, 'picture2._id', '...'],
    items: [item1._id, 'item2._id', '...'], // this guy can be of type StorageItem['_id'] or Storage['_id']
    tags: [tag1._id, 'tag2._id', '...'],
}

const piwnica: Storage = {
    _id: uuidv4(),
    name: "Piwnica",
    description: "Piwnica w domu",
    qrCode: "not implemented",

    owner: marcin._id,
    pictures: [picture1._id, 'picture2._id', '...'],
    items: [box1._id, 'item2._id', '...'], // this guy can be of type StorageItem['_id'] or Storage['_id']
    tags: [tag1._id, 'tag2._id', '...'],
}

console.log(piwnica)


