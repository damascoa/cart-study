import { ItemService } from './item.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: string[] = [];
  item : any;

  constructor(private _service: ItemService, private msg: MessageService) { }

  ngOnInit(): void {
    this.itens = this._service.getItens();
  }

  handle(item){
    this.msg.sendMessage(item);
  }

}
