import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  
})
export class VerPaisComponent implements OnInit {
  
  pais!: Country;

  constructor(
    private activate : ActivatedRoute,
    private PaisService: PaisService
    ) {}

  ngOnInit(): void {
    this.activate.params.pipe(
      switchMap( ({id}) => this.PaisService.codigoPais(id) )
  )
  .subscribe( pais =>{
    console.log(pais);
  } );
}

}
