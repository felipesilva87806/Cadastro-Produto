import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { take } from 'rxjs';
import { ProdutosModel } from '../models/produtos-model/produtos-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  constructor(private http: HttpClient) { }

  GetListarTodos(caminho: string) {
    return this.http.get<ProdutosModel>(`${environment.apiUrl}${caminho}`).pipe(take(1));
  }
}
