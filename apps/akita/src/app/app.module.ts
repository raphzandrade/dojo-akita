import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// AKITA
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// ENVIRONMENT
import { environment} from '../environments/environment';

// MODULES
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, environment.production ? [] : AkitaNgDevtools.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
