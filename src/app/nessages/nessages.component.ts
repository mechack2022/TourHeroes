import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './nessages.component.html',
  styleUrls: ['./nessages.component.css']
})
export class NessagesComponent implements OnInit {

  constructor(public messagesService:MessagesService) { }

  ngOnInit(): void {
  }

}
