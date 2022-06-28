import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    
    `
  ]
  
})
export class PorPaisComponent  {

  termino : string = ' ';
  hayError: boolean = false;
  paises  : Country [] = []

  paisesSugeridos    : Country [] = []
  mostrarsugerencias : boolean = false;

  constructor(private paisService: PaisService) { }
  

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarsugerencias = false
    
    
      this.paisService.buscarPais(this.termino)
      .subscribe
      ({
        next: (paises) => {
          console.log(paises);
          if (paises.length == undefined) {
            this.hayError = true;
          }
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        },
      });
  }
  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarsugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice( 0, 5 ),
      (err) => this.paisesSugeridos = []
      );
  }

  BuscarSugerido(termino: string){
    this.buscar(termino);
  }
}
