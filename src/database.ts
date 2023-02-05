interface Database {
    storages: Storage[];
}

export interface Tag {
    _id: string;
    name: string;
    description: string;
}

export interface Account {
    _id: string;
    name: string;
    email: string;
    password: string;

    // Relations
    storages: Storage['_id'][]; // Link to Storages in db (this is just sketch of how this things will relate to each other)
    pictures: Picture['_id'][]; // Link to Pictures in db (this is just sketch of how this things will relate to each other)
    storageItems: StorageItem['_id'][]; // Link to StorageItems in db (this is just sketch of how this things will relate to each other)
}

export interface Picture {
    _id: string;
    name: string;
    description: string;
    url: string;
    base64?: string;

    // Relations
    tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
}

export interface Storage {
    _id: string;
    name: string;
    description: string;
    qrCode: string;


    // Relations
    owner: Account['_id']; // Link back to Account in db (this is just sketch of how this things will relate to each other)
    tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
    pictures: Picture['_id'][]; // Link to Pictures in db (this is just sketch of how this things will relate to each other)
    items: StorageItem['_id'][] | Storage['_id']; // Link to StorageItems in db (this is just sketch of how this things will relate to each other)
}


export interface StorageItem {
    _id: string;
    name: string;
    description: string;
    qrCode: string;

    // Relations
    owner: Account['_id']; // Link back to Account in db (this is just sketch of how this things will relate to each other)
    tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
    pictures: Picture['_id'][]; // StorageItem pictures, can be multiple, but probably better to have just one? no idea, // Link to Pictures in db (this is just sketch of how this things will relate to each other)
    storage: Storage['_id']; // Link back to Storage in db (this is just sketch of how this things will relate to each other)
}