import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { CanalsModule } from './canal/canals.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
      plugins:[
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities:[],
      synchronize:true,
      autoLoadEntities:true,
    }),
    CanalsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
