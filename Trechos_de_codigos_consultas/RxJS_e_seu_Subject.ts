/**
 * Motivação para ser implementado: melhorar a performace da aplicação
 * Patther debouce, ex: esperar digitar a palavra inteira primeiro no search, 
 * para somente depois fazer a requisição com a busca
 */

// no componente da lista

// import { debounceTime } from 'rsJs/operators';

users: User[] = [];
filter: string = '';
debounce: Subject<string> = new Subject<string>(); // import do subject (rxJs)

// no template
Ex: 

<input class:"blabla" type="search" placeholder="Search....." 
(keyup)="debounce.next($event.target.value)">

// dentro do ngOnInit
this.debounce.
.pipe(debounceTime(300))
.subscribe(filter => this.filter = filter);

/**
 * o subject, usando a propriedade debounceTime(300), a sacada é ele aguardar o usuário
 * terminar de digitar para fazer a buscar, não fazendo uma busca a cada tecla pressionada.
 * 
 */