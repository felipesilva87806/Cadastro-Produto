import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { observable, take } from 'rxjs';
import { ProdutosModel } from '../models/produtos-model/produtos-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  headers = new HttpHeaders().append('senha', '235HPIUh');

  constructor(private http: HttpClient) { }

  GetListarTodos(caminho: string) {
    return this.http.get<ProdutosModel[]>(`${environment.apiUrl}${caminho}`, { headers: this.headers }).pipe(take(1));
  }

  
  Post(caminho: string, corpo: object) {
    // Aqui passamos o valor do BODY depois os valores do HEADERS
    return this.http.post<T>(`${environment.apiUrl}${caminho}`, corpo, { headers: this.headers } ).pipe(take(1));
  }

}
