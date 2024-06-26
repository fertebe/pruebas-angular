import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { HeroComponent } from './heroes/hero/hero/hero.component';
import { ListComponent } from './heroes/list/list/list.component';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent, 
    CounterComponent,
    HeroComponent,
    ListComponent, 
  ],
  imports: [
    BrowserModule,
    DbzModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }