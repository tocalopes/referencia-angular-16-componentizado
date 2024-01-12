import { Component, OnInit } from '@angular/core';
import { Promocao } from 'jornada-milhas-api-main/dist/src/promocoes/entities/promocao.entity';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaPromocao: Promocao[] = [];
  constructor(private servico: PromocaoService){

  }

  ngOnInit(): void {
    this.servico.listar().subscribe(promocoes => {
      this.listaPromocao = promocoes
    })
  }

}
