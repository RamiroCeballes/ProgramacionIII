import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './entity/tarea.entity';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea])],
  controllers: [TareasController],
  providers: [TareasService]
})
export class TareasModule {}
