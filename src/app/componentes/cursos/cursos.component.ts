import { CursosService } from './../../servicos/cursos.service';

import { Component, OnInit } from '@angular/core';

import { Curso } from './../../app.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listCursos: Curso[];

  constructor(private cursosService: CursosService) {
    this.cursosService.carregarCursos(
      () => this.listCursos = this.cursosService.todosCursos()
    );
  }

  getCursoObject(cursoId: number){
    for(let i=0; i < this.listCursos.length; i++){
      if (this.listCursos[i].cursoId == cursoId){
        return this.listCursos[i]
      }
    };
  }

  getCursoTitulo(cursoId: number){
    return this.getCursoObject(cursoId).titulo
  }

  getCursoCategoria(cursoId: number){
    return this.getCursoObject(cursoId).categoria
  }

  getCursoDescricao(cursoId: number){
    return this.getCursoObject(cursoId).descricao
  }

  ngOnInit(): void {
  }

}
