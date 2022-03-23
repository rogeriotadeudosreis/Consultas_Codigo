
// criando o class diretiva
@Directive({
    selector: '[appTitulo]'
})
export class TituloDirective {

    @input() brightness = '70%';

    constructor (
        private el: ElementRef, // fazer o import
        private render: Renderer // fazer o import
    ){}

    @HostListener('mouseover')
    darkOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }
    
    @HostListener('mouseleave')
    darkOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness 100%)');
    }

    // para usar somente apneas declarar o nome da diretiva nos componentes






}





// criando o module
@NgModule({
    declarations: [ TituloDirective],
    exports: [ TituloDirective],
    imports: []
})
export class TituloModule {
}