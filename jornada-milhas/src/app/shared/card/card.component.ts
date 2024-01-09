import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input()
  variant:  'primary' | 'secondary' = 'primary'; //o pipe é usado para travar o valor da variável em opções pré definidas
}
