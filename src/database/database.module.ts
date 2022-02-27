import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, name, host, password, port } = configService.database;
        return Object.assign({
          type: 'postgres',
          host,
          port,
          username,
          database: name,
          password,
        });
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
