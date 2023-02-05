import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Picture} from "../../picture/picture.entity";

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

    @OneToMany(type => Picture, picture => picture.user)
    pictures: Picture[];

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