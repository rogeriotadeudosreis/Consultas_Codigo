/**
 * no componente.ts
 * fazer os devidos imports
 * importar dentro do module responsável
 */

 import { debounceTime } from 'rsJs/operators';
 import { Component } from '@angular/core';
 import { Subject} from 'rxjs';
 
 @Component({
     selector: 'app-search',
     templateUrl: './search.component.html'
 })
 export class SearchComponent implements OnInit, OnDestroy {
 
    @output() onTyping = new EventEmitter<string>() // obs: importar do @angular/core
    @input() value: string = ''; // pegar o valor de outro componente
    debounce: Subject<string> = new Subject<string>();
 
     ngOnInit():void {
         this.debounce
         .pipe(debounceTime(300))
         .subscribe(filter => this.onTyping.emit(filter));
     }
 
     ngOnDestroy():void{
         this.debounce.unsubscribe();
     }
 }

 /**
  * no html podemos chamar o componente da seguinte forma:
  * 
  * <app-search (onTyping)="filter = $event" [value]="filter">
  * </app-search>  * 
  *  // aqui pegamos o valor digitado e enviamos
  * para dentro do componente.ts dentro do emit e enviar para o outro componente
  */

  <div class="text-center mt-3 mb-3">
    <form>
        <i aria-hidden="true" class="fa fa-search mr-1"></i>
        <input 
        class="rouded"
        type="search"
        placeholder="Search..."
        autofocus
        (keyup)="debounce.next($event.target.value)"
        [value]="value">
    </form>
  </div>