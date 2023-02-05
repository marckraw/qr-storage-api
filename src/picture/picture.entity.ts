import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Picture extends BaseEntity {
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
    url: string;

    @Column()
    base64?: string;

    // Relations
    // tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
}