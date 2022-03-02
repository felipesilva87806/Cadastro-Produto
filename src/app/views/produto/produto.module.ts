import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoListaComponent,
    ProdutoAddComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
