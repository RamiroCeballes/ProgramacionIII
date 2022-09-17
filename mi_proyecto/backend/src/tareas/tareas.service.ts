import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, EntityManager, getManager, Repository } from 'typeorm';
import { Tarea } from './entity/tarea.entity';

@Injectable()
export class TareasService {
    constructor(
        @InjectRepository (Tarea)
        private tareaRepository : Repository<Tarea>,
        )
        {}
//    private EntityManager = getManager();
    public async getTareas(){
        return await this.tareaRepository
        .createQueryBuilder('tarea')
        .select()
        .getMany();
    }
    public async getTarea(id){
//        return tareas.find((tarea) => tarea.id === id);
    }
    public async insertTarea(body){
        const crearTarea = new Tarea();
        crearTarea.nombre = body.nombre;
        crearTarea.tiempo = body.tiempo;
        crearTarea.finalizado = false;
        try {
            const TareaGuardada = await this.tareaRepository.save(crearTarea);
            return {
                statusCode:200,
                msg: 'Se realizó con éxito la inserción correctamente.',
            };
        } catch (error) {
            return new BadRequestException(error);
        }
    }
    public async editTarea(id_tarea, body: Tarea){
        try {
            const tareaAEditar = await this.tareaRepository.findOne({
                where: {
                    id : id_tarea
                },
            });
            tareaAEditar.nombre = body.nombre;
            tareaAEditar.tiempo = body.tiempo;
            tareaAEditar.finalizado = true;
            await this.tareaRepository.save(tareaAEditar);
            return {
                statusCode:200,
                msg:'Tarea editada correctamente.',
            };
            }
         catch (error) {
            return new BadRequestException(error);
        }
    }
    public async deleteTarea(id_tarea) {
        try {
            await this.tareaRepository.delete({
                id : id_tarea,
            });
            return{
                statusCode:200,
                msg:'Tarea eliminada correctamente.',                
            }
        } catch (error) {
            return new BadRequestException(error);
        }
    }
}