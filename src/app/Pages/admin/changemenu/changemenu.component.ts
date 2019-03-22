import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';

@Component({
  selector: 'app-changemenu',
  templateUrl: './changemenu.component.html',
  styleUrls: ['./changemenu.component.css']
})
export class ChangemenuComponent implements OnInit {

  arrayOfMenuButtons: { name: string, icon: string, link: string }[];
  selectedEditButton: number = null;

  constructor(private admin: AdminPanelService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  updateButton(name:string, icon:string, link:string, updateName:string, index:number){
    let obj = { name, icon, link, updateName };
    this.arrayOfMenuButtons[index] = { name, icon, link };
    this.admin.updateButton(obj);
    this.selectedEditButton = null;
     
  }

  deleteButton(name:string,index:number){
    this.arrayOfMenuButtons.splice(index,1);
    this.admin.deleteButton(name)
      .then( (res:boolean) => {
        console.log(res);
      })
  }

  getMenuItems() {
    this.admin.getMenuItems()
      .then((res: { name: string, icon: string, link: string }[]) => {
        this.arrayOfMenuButtons = res;
      })
  }

  edit(i: number) {
    this.selectedEditButton = i;
  }

  saveButton(name: string, icon: string, link: string) {
    this.arrayOfMenuButtons.push({ name, icon, link })
    this.admin.postMenuButtons({ name, icon, link })
  }
}
