import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { ProdutosModel } from '../../models/produtos-model/produtos-model'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpService: HttpService<ProdutosModel>) { }

  GetLista(caminho: string) {
    return this.httpService.GetListarTodos(caminho)
    .pipe(map(x => {
      return x;
    }));
  }
  
  Inserir(objeto: ProdutosModel) {
    return this.httpService.Post("Produto", objeto);
  }
}
