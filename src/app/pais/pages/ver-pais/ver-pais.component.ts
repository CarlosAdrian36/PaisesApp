import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  
})
export class VerPaisComponent implements OnInit {

  constructor(private activate : ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {
    this.activate.params.pipe(
      switchMap( (param) => this.PaisService.codigoPais(param['id']) )
  )
  .subscribe( resp =>{
    console.log(resp);
  } )
}

}
