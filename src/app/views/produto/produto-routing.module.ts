import { NgModule } from '@angular/core';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: ProdutoListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule { }
