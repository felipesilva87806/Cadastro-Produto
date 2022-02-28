import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", loadChildren: () => import("./views/account/account.module").then(m => m.AccountModule) },
  { path: "", loadChildren: () => import("./views/produto/produto.module").then(m => m.ProdutoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
