/**
 * Exemplo de implementar um card, componetizá-lo utilizando ng-content
 * 
 * Motivação: poder compartilhar esse componente em qualquer parte da aplicação.
 */

// Criando o card-component.ts

/**
 * import { Component, Input } from '@angular/core';
 * 
 * @Component({
 *  selector: 'app-card',
 * templateUrl: './card.component.html'
 * })
 * export class CardComponent {
 * @input() title: string = ''; // aqui usando imbound property para receber a informação
 * de outro componente
 * }
 */

// Criando o card-componente.html com bootstrap 4

/**
 * <div class="card border-light text-center">
 *      <h4 class="card-header" *ngIg="title"> {{ title }}</h4> 
 *      <div class="card-block text-justify">
 *      </div>
 * 
 *      <ng-content></ng-content> // aqui é renderizado o conteúdo do outro componente
 * 
 * </div>
 */