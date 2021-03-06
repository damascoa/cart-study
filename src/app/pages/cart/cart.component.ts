import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: string[] = [];

  constructor(private _msg: MessageService) { }

  ngOnInit(): void {
    this._msg.getMessages().subscribe(data => {
      console.log(data);
      this.cart.push(data);
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    });
    if (sessionStorage.getItem('cart') != null) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    }

  }

}
