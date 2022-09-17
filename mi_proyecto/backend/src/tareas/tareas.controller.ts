import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'https';
import { TareasService } from './tareas.service';

@Controller('tareas')
export class TareasController {
    constructor(private tareasService: TareasService){}
    @Get()
    recibirTareas(){
        return this.tareasService.getTareas();
    }
    @Get('/:id')
    recibirTarea(@Param('id') id){
        return this.tareasService.getTarea(parseInt(id));
    }
    @Post('/crear')
    insertarTarea(@Body() body){
        return this.tareasService.insertTarea(body);
    }
    @Put('/editar/:id')
    editTarea(@Param('id') id, @Body() body){
        return this.tareasService.editTarea(id, body);
    }
    @Delete('/eliminar/:id')
    eliminarTarea(@Param('id') id) {
        return this.tareasService.deleteTarea(id);
    }
}