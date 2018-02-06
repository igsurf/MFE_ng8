import { Injectable } from "@angular/core";
import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";
import { Observable } from "rxjs";

@Injectable()

export class ContatoService {
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }
    getContato(id: number): Promise<Contato>{
        return this.getContatos()
        .then((contatos: Contato[]) => contatos.find(contato => contato.id === id))
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

    search(term: string): Observable<Contato[]>{
        return this.http
        .get(`${this.contatosUrl}/?nome=${term}`)
    }
}
