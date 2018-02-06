import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        ContatosModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    
})

export class AppModule { }