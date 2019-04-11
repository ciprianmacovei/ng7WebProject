import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { NotificationService } from 'src/app/Services/notification.service';

export interface buttonMenu {
  name: string;
  icon: string;
  link: string;
  submenu?: {name:string,link:string}[];
}



@Component({
  selector: 'app-changemenu',
  templateUrl: './changemenu.component.html',
  styleUrls: ['./changemenu.component.css']
})
export class ChangemenuComponent implements OnInit {

  arrayOfMenuButtons: buttonMenu[];
  selectedEditButton: number = null;

  constructor(private admin: AdminPanelService, private snackBar: NotificationService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  updateButton(name: string, icon: string, link: string, updateName: string, index: number) {
    let obj = { name, icon, link, updateName };
    this.arrayOfMenuButtons[index] = { name, icon, link };
    this.snackBar.show('Update Button', 'success')
    this.admin.updateItems(obj,'updateButton');
    this.selectedEditButton = null;

  }

  deleteButton(name: string, index: number) {
    this.arrayOfMenuButtons.splice(index, 1);
    this.snackBar.show('Deleted Button', 'danger');
    this.admin.deleteItem({nume:name},'deleteButton')
      .then((res: boolean) => {
        console.log(res);
      })
  }

  getMenuItems() {
    this.admin.getItems('getMenuItems')
      .then((res: buttonMenu[]) => {
        this.arrayOfMenuButtons = res;
      })
  }

  edit(i: number) {
    this.selectedEditButton = i;
  }

  saveButton(name: string, icon: string, link: string) {
    this.arrayOfMenuButtons.push({ name, icon, link })
    this.snackBar.show('Succesfuly added button', 'success');
    this.admin.addItem({ name, icon, link },'addMenuButton');
  }
}
