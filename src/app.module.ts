import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'graphql',
      username: 'postgres',
      password: 'toor'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
