import { ProdutosModel } from './../../../models/produtos-model/produtos-model';
import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styles: [
  ]
})
export class ProdutoListaComponent implements OnInit {

  lista: ProdutosModel[] = [];

  constructor(private formBuilder: FormBuilder,
              private service: ProdutoService) { }

  GetLista(pagina: string) {
    return this.service.GetLista(pagina)
    .pipe(first())
      .subscribe((x) => {        
        this.lista = x;
      });
  }

  ngOnInit(): void {
    this.GetLista('Produto/listar');
  }

}
