import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { NgForm } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/Guards/candeactivate-guard.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';


interface card {
  title: string;
  imgUrl: string;
  content: string;
}



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, CanComponentDeactivate {

  arrayCards:card[];
  editModeDisabled: number = null;

  constructor(private admin: AdminPanelService, public dialog: MatDialog, public snackbar:NotificationService) { }




  ngOnInit() {
    this.admin.getItems('getCards')
      .then((res: card[]) => {
        this.arrayCards = res;
      })
  }

  editCard(index: number) {
    this.editModeDisabled = index;
  }

  deleteCard(index: number) {
    console.log(this.arrayCards[index], 'asdsad');
    this.admin.deleteItem(this.arrayCards[index],'deleteCard')
      .then(res => console.log(res));
    this.arrayCards.splice(index, 1);
    this.snackbar.show('Deleted Card','danger');

  }

  saveEdit(index: number) {
    this.snackbar.show('Update Card','success');
    this.admin.updateItems(this.arrayCards[index],'updateCard')
      .then(res => this.editModeDisabled = null);


  }

  cancelEdit() {
    this.editModeDisabled = null;
  }

  addCard(card: NgForm) {
    this.admin.addItem(card.value,'addCards');
    this.snackbar.show('Add Card','success');
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
