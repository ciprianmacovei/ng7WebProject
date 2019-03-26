import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { NgForm } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/Guards/candeactivate-guard.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, CanComponentDeactivate {

  arrayCards:{title:string, imgUrl:string, content:string}[];
  editModeDisabled:number = null;

  constructor(private admin:AdminPanelService,public dialog: MatDialog) { }


  

  ngOnInit() {
    this.admin.getCards()
      .then( (res:{title:string, imgUrl:string, content:string}[]) => {
        this.arrayCards = res;
      })
  }

  editCard(index:number) {
    this.editModeDisabled = index;
  }

  deleteCard(index:number) {
    console.log(this.arrayCards[index],'asdsad');
    this.admin.deleteCard(this.arrayCards[index])
      .then( res => console.log(res));
    this.arrayCards.splice(index,1);
    
  }

  saveEdit(index:number) {
  
    this.admin.updateCard(this.arrayCards[index])
      .then( res => this.editModeDisabled = null);


  }

  cancelEdit() {
    this.editModeDisabled = null;
  }

  addCard(card:NgForm) {
    this.admin.addCard(card.value);
    this.arrayCards.push(card.value);
  }

  canDeactivate() {
    console.log('intru aici', !!this.editModeDisabled);
    return !!this.editModeDisabled ? this.confirmDialog() : true;
  }

  confirmDialog() {
    
    confirm("Please check if you saved the changes");
    return false;

  }

}
