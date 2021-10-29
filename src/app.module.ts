import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
      SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST_BANCO_DADOS,
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria',
      autoLoadModels: true, //reconhece automaticamente os modelos criados no projeto
      synchronize: true, //importa automaticamente os módulos e sincroniza com o bd (cria a tabala caso não exista)
    }),
    SequelizeModule.forFeature([Livro])
],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
