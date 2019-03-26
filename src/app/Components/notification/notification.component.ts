import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

private show:boolean = false;
private message:string = "This is snackbar";
private type:string = 'success';

  constructor() { }

  ngOnInit() {
  }

 

  
}
