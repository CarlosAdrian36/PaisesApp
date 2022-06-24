import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { environment } from '../../../../../../base/src/environments/environment.prod';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit  {
  

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() ondebounce: EventEmitter<string> = new EventEmitter();
  
@Input() placeholder  : string = '';

  debouncer : Subject<string> = new Subject();


  termino:string = " ";


  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.ondebounce.emit( valor );
    })
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( ){
    this.debouncer.next( this.termino );
    
  }

}
