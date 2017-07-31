import {platformBrowserDynamic} from '@angular/plataform-browser-dynamic';
import {AppModule} from './app.module';


const plataform = platformBrowserDynamic();
plataform.bootstrapModule(AppModule);
