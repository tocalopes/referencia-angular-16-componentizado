import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/servicos/depoimento.service';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaPromocao: Promocao[] = [];
  depoimentos: Depoimento[] = [];
  constructor(private servico: PromocaoService,private depoimentosService: DepoimentoService){

  }

  ngOnInit(): void {
    this.servico.listar().subscribe(promocoes => {
      this.listaPromocao = promocoes
    })
    this.depoimentosService.listar().subscribe(
      res => this.depoimentos = res
    )
  }

}
