import {MiddlewareConsumer, Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from "./auth/auth.module";
import {UtilPublicModule} from "./util-public/util-public.module";
import {User} from "./auth/user/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LoggerMiddleware} from "./utils/logger.middleware";
import {Tag} from "./tag/tag.entity";
import {Storage} from "./storage/storage/storage.entity";
import {StorageItem} from "./storage/storage-item/storage-item.entity";
import {Picture} from "./picture/picture.entity";
import {PictureModule} from "./picture/picture.module";
import {TagModule} from "./tag/tag.module";
import {StorageModule} from "./storage/storage.module";

@Module({
    imports:
        [
            ConfigModule.forRoot({
                isGlobal: true
            }), // helps with getting envs into the project, also have ConfigService Globally available
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123',
                database: 'qr-storage',
                entities: [User, Tag, Storage, StorageItem, Picture],
                synchronize: true,
            }),
            AuthModule,
            UtilPublicModule,
            PictureModule,
            TagModule,
            StorageModule
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
