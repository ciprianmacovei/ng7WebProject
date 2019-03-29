import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { diplomas } from 'src/app/Pages/home/home.component';
import { CandeactivateGuardService } from 'src/app/Guards/candeactivate-guard.service';




@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.css']
})
export class DiplomasComponent implements OnInit,CandeactivateGuardService {

  private arrayOfDiplomas:diplomas[];
  editMode:number = null;

  constructor(private admin:AdminPanelService) { }

  ngOnInit() {
    this.admin.getItems('getDiplomas')
      .then( (res:diplomas[]) => {
        this.arrayOfDiplomas = res;
      })
  }

  addDisplomas(form: NgForm) {
    this.arrayOfDiplomas.push(form.value);
    this.admin.addItem(form.value,'addDiplomas');
  }

  edit(index:number){
   
   this.editMode === null ? this.editMode = index : this.editMode === index ? this.editMode = index : confirm('Save or cancel the information befor proceding!');  
  }

  cancel() {
    this.editMode = null;
  }

  canDeactivate() {
    return this.editMode === null ? true : this.confirmMessage();
  }

  confirmMessage() {
    confirm('Please save or cancel befor leaving the page');
    return false;
  }

}
