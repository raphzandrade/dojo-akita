import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE COMPONENTS
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
