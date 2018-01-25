import { Component, OnInit } from '@angular/core';

import {Contato} from './contato.model';
import { ContatoService } from './contato.service';
import { error } from 'util';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'


})

export class ContatosListaComponent implements OnInit {


    contatos : Contato[];

    constructor(private contatoService: ContatoService) {
        
    }

    ngOnInit(): void {
      this.contatoService.getContatos()
      .then((contatos: Contato[]) => {
          this.contatos = contatos;
      }).catch(error => console.log(error))
    }

 }