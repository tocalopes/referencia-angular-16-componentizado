import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/servicos/unidade-federativa.service';
import { Estado } from 'src/app/core/types';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{

  @Input() label = '';
  @Input() placeholder = '';
  @Input() matPrefix = '';
  @Input() control!:FormControl;

  unidadesFederativas: Estado[] = [];

  filteredOptions$?: Observable<Estado[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService){

  }

  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
      });
      this.filteredOptions$ = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this.filtrarUfs(value))
      )
  }

  filtrarUfs(value: string): Estado[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome? estado.nome.toLowerCase().includes(valorFiltrado) : ''
    )
    return result
  }
}
