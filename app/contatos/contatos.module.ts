import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ContatoBuscaComponent } from './contato-busca.component';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent,
        ContatoBuscaComponent
    ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers: [ContatoService]

})

export class ContatosModule { }