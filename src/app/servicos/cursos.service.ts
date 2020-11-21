import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from './../app.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private listCursos = null;

  constructor(private http: HttpClient) {
   };

  carregarCursos(callback){
    this.http.get('./assets/dados/cursos.json').subscribe(listCursos => this.listCursos = listCursos).add(callback);
  };

  todosCursos(): Array<Curso>{
    return this.listCursos
  };
}
