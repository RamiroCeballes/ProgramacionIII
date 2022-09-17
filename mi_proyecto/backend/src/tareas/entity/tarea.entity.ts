import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity ({
    name:'tarea'
})

export class Tarea {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column ('varchar',{
        length: 100,
        name: 'nombre',
    })
    nombre: string;
    @Column ('varchar',{
        length: 200,
        name: 'tiempo',
    })
    tiempo: string
    @Column ('boolean', {
        name: 'finalizado',
    })
    finalizado: boolean;
}