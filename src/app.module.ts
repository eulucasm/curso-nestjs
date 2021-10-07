import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lucaspoletislinux:ZaK6K2LjQsV5uo6e@cluster0.obba6.mongodb.net/smartranking?retryWrites=true&w=majority'),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
