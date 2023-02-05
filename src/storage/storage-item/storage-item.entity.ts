import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class StorageItem extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    qrCode: string;


    // Relations
    // owner: Account['_id']; // Link back to Account in db (this is just sketch of how this things will relate to each other)
    // tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
    // pictures: Picture['_id'][]; // StorageItem pictures, can be multiple, but probably better to have just one? no idea, // Link to Pictures in db (this is just sketch of how this things will relate to each other)
    // storage: Storage['_id']; // Link back to Storage in db (this is just sketch of how this things will relate to each other)
}