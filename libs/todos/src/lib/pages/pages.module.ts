import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// PAGES
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [HomeComponent, PokemonComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    ReactiveFormsModule,

  ]
})
export class PagesModule { }
