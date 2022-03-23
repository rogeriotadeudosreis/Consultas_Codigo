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

    debounce: Subject<string> = new Subject<string>();

    ngOnInit():void {
        this.debounce
        .pipe(debounceTime(300));
    }

    ngOnDestroy():void{
        this.debounce.unsubscribe();
    }
}

/**
 * no component.html
 * implementar o input search com bootstrap
 */

<div class="text-center mt-3 mb-3">
    <form>
        <i aria-hidden="true" class="fa fa-search mr-1"></i>
        <input 
        class="rouded"
        type="search"
        placeholder="Search..."
        autofocus
        (keyup)="debounce.next($event.target.value)">
    </form>
</div>