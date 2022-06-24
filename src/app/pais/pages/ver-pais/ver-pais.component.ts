import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  
})
export class VerPaisComponent implements OnInit {

  constructor(private activate : ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {
    this.activate.params.subscribe(({id}) => {
      console.log(id);
      this.PaisService.codigoPais(id).subscribe(pais =>{
        console.log(pais);
      });

    } )
  }

}
