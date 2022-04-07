import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
 messages :string[]=[]
  constructor() { }

  addMessages(message:string){
    this.messages.push(message)
  }
  clearMessges(){
    this.messages = []
  }
}
