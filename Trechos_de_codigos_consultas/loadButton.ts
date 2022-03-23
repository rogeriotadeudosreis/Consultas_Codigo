/**
 * Exemplo do botão load more (carregar mais em português)
 * 
 * Motivação: carregar aos poucos os dados conforme paginação
 */

/**
 * criar o componente load-button 
 * 
 * no component.ts declarar a variável para receber um valor boolean
 * 
 * @input() hasMore: boolean = false; 
 */

// no componente template
<div class="text-center" *ngIf="hasMore; else messageTemplate">
    <button class="button">Load more</button>
</div>

<ng-template #messageTemplate>
    <p class="text-center text-muted">No more data to load</p>
</ng-template>

/**
 * no componente template da lista onde faremos o data binding o valor boolean
 * <app-lead-button
 * (click)="load()" 
 * [hasMore]="hasMore">
 * </app-lead-button>
 */

/**
 * no componente.ts da lista também devemos declarar a variável para enviar o valor boolean
 * 
 * hasMore: boolean = true;
 * 
 * declaramos o service dentro do constructor e criaremos um método para o botão load more
 * 
 * declarar uma propriedade:
 * currentPage: number = 1;
 * userName: string = '';
 * 
 * dentro do ngOnInit: this.userName = this.activatedRoute.snapshot.params.userName;
 * 
 * criando o método:
 * 
 * load(){
 *  this.service
 * .listFromUserPaginated(this.userName, ++ this.currentePage)
 * .subscribe(users => {
 *     this.filter = ''; // limpando o filtro
 *     this.users = this.users.concat(users);
 *      if(users.length) this.hasMore = false;
 * })
 * 
 * 
 * 
 * }
 */
