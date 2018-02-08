import { Injectable } from "@angular/core";

import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";
import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response } from "@angular/http";

@Injectable()

export class ContatoService {

    /**
     Função de retorno para realizar CRUD do Contato.
     */

    private contato_url: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }
    
    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contato_url)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
    }
    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id))
    }
    create(contato: Contato): Promise<Contato>{
        return this.http.post(this.contato_url, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            console.log(response.json().data);
            return response.json().data as Contato
        })
        .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        })
            .then(() => {
                console.log('teste');
            })
            .then(() => {
                new Promise((resolve2, reject2) => {
                    setTimeout(() => {
                        resolve2()
                    }, 200);
                })
            })
            .then(() => {
                console.log("Bla bla")
                return this.getContatos();
            })
    }

    // search(term: string): Observable<Contato[]> {
    //     return this.http
    //         .get(`${this.contato_url}/?nome=${term}`)
    // }
}
