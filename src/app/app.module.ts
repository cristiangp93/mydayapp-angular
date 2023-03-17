import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {StoreModule} from "@ngrx/store";
import {ROOT_REDUCER} from "./store/app.state";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./store/tasks/todos.effects";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCER),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
