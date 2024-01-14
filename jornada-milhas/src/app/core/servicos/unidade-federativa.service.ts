import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Estado } from '../types';
import { shareReplay } from 'rxjs/operators';


const API = environment.apiUrl;
const ESTADOS = 'estados';
const CACHE_HABILITADO = true;
const CACHE_QTD = 2;

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  constructor(private http:HttpClient) { }

  listar(): Observable<Estado[]> {
  
   return (CACHE_HABILITADO) 
      ? this.getEstados().pipe(shareReplay(2))
      : this.getEstados()
  }

  getEstados(): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${API}/${ESTADOS}`)
  }
}
