import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';
import { FormsModule} from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports: [
        ContatosListaComponent
    ],
    providers: [ContatoService]

})

export class ContatosModule { }