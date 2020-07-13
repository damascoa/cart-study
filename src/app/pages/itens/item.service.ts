import { Injectable } from '@angular/core';

import { MessageService } from './../../shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itens: string[] = [];
  constructor() {
    this.itens.push('Item 1');
    this.itens.push('Item 2');
    this.itens.push('Item 3');
    this.itens.push('Item 4');
  }

  getItens() {
    return this.itens;
  }
}
