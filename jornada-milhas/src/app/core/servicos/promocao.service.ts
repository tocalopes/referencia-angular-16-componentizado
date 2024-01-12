import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promocao } from 'jornada-milhas-api-main/dist/src/core/types';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

const URI = environment.apiUrl;
const LISTAR_PROMOCOES = 'promocoes'
@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private http: HttpClient) { }
  
  listar(): Observable<Promocao[]>{
    return this.http.get<Promocao[]>(`${URI}/${LISTAR_PROMOCOES}`);
  }
}
