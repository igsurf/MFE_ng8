import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';   

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contatos : Contato[] = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@gmail.com', telefone: '(11) 9805-7805' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@gmail.com', telefone: '(11) 9805-7805' },
            { id: 3, nome: 'Escatamacquio', email: 'escatamacquio@gmail.com', telefone: '(11) 9805-7805' },
            { id: 4, nome: 'Bob Esponja', email: 'bobesponja@gmail.com', telefone: '(11) 9805-7805' },
            { id: 5, nome: 'Seu Madruga', email: 'seumadruga@gmail.com', telefone: '(11) 9805-7805' },
        ]

        return (contatos);  
    }
}