import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export abstract class EntityBoilerplate extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity()
export class User extends EntityBoilerplate {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    /*
    *
    * relations
    *
    * */
    // @ManyToOne((type) => Category, (category) => category.children)
    // parent: Category
    //
    // @OneToMany((type) => Category, (category) => category.parent)
    // children: Category[]
}