import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';



import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
    
  `]
  
})
export class PorRegionComponent   {


  regiones     : string[]= ['EU', 'EFTA' ,'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC', ];
  regionActiva : String = '';
  paises       : Country[] = [];

  constructor(private paisService: PaisService) { }

  getclasesCss(region : string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  Activarregion (region: string){

    if(  region === this.regionActiva ) {return;}

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises )
    // TODO: Hacer el llamado al servicio
  }
  

}
