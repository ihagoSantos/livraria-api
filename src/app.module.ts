import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
      SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
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
