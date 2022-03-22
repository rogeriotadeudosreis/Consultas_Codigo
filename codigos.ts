 // Curso de Angular
 //Event binding (exemplo)

 // exemplo de input 
<input type="search" formControlName="propriedade_qualquer" placeholder="Pesquisar..." autofocus
oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
[maxlength]="_maxLength" // binding do component para o template informando o tamanho definido de caracteres para input
(keyup)="filter = $event.target.value">

// --> capturar cada dígito do teclado quando pressionado a tecla pra cima
(keyup)="bloquearDigitos($event.target.value)"

// --> limitar um número de dígitos no input do tipo number
// --> fonte: https://www.codegrepper.com/code-examples/javascript/input+type+number+min+and+max+length+angular+8
oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Criando método para pegar o valor de um radiobox, apresentar ou não um campo, e validar este
/* campo ou não conforme apresentado ou não. */

get numeroDeCarregamentos() {
        return this.formTratamentoTermico.get('numeroDeCarregamentos');
    }

	this.isCampoNumDeCarregamento = true;
     
     campoCapacidadeNominal(): void {
         this.formTratamentoTermico.get('formaDeAlimentacao').valueChanges
         .subscribe(selectedValue => {
             const numeroDeCarregamentos = this.formTratamentoTermico.get('numeroDeCarregamentos');
             if (selectedValue === 'continua') {
                 this.tituloCampoCapacidadeNominal = 'Capacidade Nominal - Kg/h'
                 this.isCampoNumDeCarregamento = false;
                 numeroDeCarregamentos.clearValidators();
                }else {
                    this.isCampoNumDeCarregamento = true;
                    this.tituloCampoCapacidadeNominal = 'Capacidade Nominal - Kg/ciclo'
                    numeroDeCarregamentos.setValidators([Validators.required,Validators.max(99999999999999999999)]);
               }
               numeroDeCarregamentos.updateValueAndValidity();
             })
     }

// Obs: usando diretivas para permitir somente números no input do tipo number
//      usando min="0" para impedir números negativos.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Pegando evento de um checkbox em angular mat-checkbox
*/
// no HTML
<mat-checkbox (change)="onChange($event)"> PQR </mat-checkbox>

// no componente ts
onChange(ob: MatCheckboxChange) {
  console.log("PQR checked: " + ob.checked);
  //aqui dentro podemos usar condicionais para criar a lógica necessária, de acordo com o ob, se está checado ou não.
}

//import no componente ts e import do module no modulo principal da aplicação
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
function buscarDivisivel(array, num) {
    for (var i = 0; i < array.length; i++){
        if (array[i] % num == 0 && array[i] != 0){
            return array[i];
        }
    }
    // se chegou aqui, é porque nenhum número foi encontrado
    return "Nenhum número foi encontrado!";
}

var array = [10, 4, 7, 128, 42, -1, 0, 300, -5];
var num = 400;
console.log(buscarDivisivel(array, num)); // Nenhum número foi encontrado!
console.log(buscarDivisivel(array, 100)); // 300
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Criando um pipe no angular com JavaScript

import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({ name: 'filterByName' }) // aqui pode ser qualquer nome de acordo com sua regra
export class FilterByName implements PipeTransform {
 transform (users: User[], nameQuery: string) {
	nameQuery = nameQuery.trim().toLowerCase();
	
	if(nameQuery) {
		return users.filter( user => 
		user.name.toLowerCase().includes(nameQuery)
		);
	} else {
		return users
	}
 }	 
	
	// usando no tamplate
	<ap-users [users]="users | filterByName: filter"></ap-users>
------------------------------------------------------------------------------------------------------------------------------------------


	
	
	
}