import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule, PagesModule],
})
export class TodosModule {}
