import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() Codigo: any = 0;
  @Input() DescricaoProduto: string = "";
  @Input() OcultarLink: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
