import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { NgModule } from '@angular/core';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "lista", component: ProdutoListaComponent },
  { path: "add", component: ProdutoAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule { }
