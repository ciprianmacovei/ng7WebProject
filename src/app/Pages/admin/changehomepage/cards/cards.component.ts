import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';

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

  edit(showEdit:HTMLDivElement,index:number) {
    showEdit.style.visibility = 'visible';
    this.editModeDisabled = index;
  }

  cancelEdit(hideEdit) {
    hideEdit.style.visibility = 'hidden';
  }

}
