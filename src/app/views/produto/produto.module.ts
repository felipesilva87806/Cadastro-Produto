import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule
  ]
})
export class ProdutoModule { }
