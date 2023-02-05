import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Storage extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    name: string;

    @Column({ nullable: true, type: 'text' })
    description?: string;

    @Column({ nullable: true, type: 'text' })
    qrCode?: string;


    // Relations
    // owner: Account['_id']; // Link back to Account in db (this is just sketch of how this things will relate to each other)
    // tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
    // pictures: Picture['_id'][]; // Link to Pictures in db (this is just sketch of how this things will relate to each other)
    // items: StorageItem['_id'][] | Storage['_id']; // Link to StorageItems in db (this is just sketch of how this things will relate to each other)
}