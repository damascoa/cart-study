import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject: Subject<any> = new Subject();
  constructor() { }

  sendMessage(item) {
    this.subject.next(item);
  }

  getMessages() {
    return this.subject.asObservable();
  }
}
