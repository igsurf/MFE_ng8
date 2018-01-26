import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Params } from '@angular/router';
import { Contato } from './contato.model';


@Component({

    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})



export class ContatoDetalheComponent implements OnInit {

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        console.log('ng oninit');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(typeof id);
            this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    console.log(contato)
                })
        })
    }

}