import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  arrayCards:{title:string, imgUrl:string, content:string}[];
  editModeDisabled:number = null;

  constructor(private admin:AdminPanelService) { }

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
      .then( res => console.log(res));

  }

  cancelEdit() {
    this.editModeDisabled = null;
  }

  addCard(card:NgForm) {
    this.admin.addCard(card.value);
    this.arrayCards.push(card.value);
  }
}
