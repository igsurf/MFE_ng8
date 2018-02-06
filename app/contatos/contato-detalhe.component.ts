import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Params } from '@angular/router';
import { Contato } from './contato.model';


@Component({

    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styles: [`
        .ng-valid[required] {
            border: 2px solid green;
        }
        .ng-invalid:not(form) {
            border: 2px solid red;
        }
    `]
})



export class ContatoDetalheComponent implements OnInit {
    public contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');
        console.log('ng oninit');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(typeof id);
            this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                    console.log(contato);
                })
        })
    }

<<<<<<< HEAD
    testeContato(form): void{
        console.log(form)
=======
    testeContato(form): void {
        console.log('entrou');  
         console.log(form);
>>>>>>> 98241fe21d7f27f2810a7d115fdd2a70ac312b97
    }

}