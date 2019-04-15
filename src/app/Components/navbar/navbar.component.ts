import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';
import { saemenus } from '../../Shared/dataBase.models';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  arrayOfMenuButtons: any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  constructor(private route: Router, private breakpointObserver: BreakpointObserver, private admin: AdminPanelService, private activeR: ActivatedRoute) { }

  ngOnInit() {

    this.getMenuItems();
  }

  getMenuItems() {
    this.admin.getItems('getMenuItems')
      .then((res: saemenus[]) => {
        this.arrayOfMenuButtons = res.reverse();
        console.log(this.arrayOfMenuButtons);
      })
  }

  
  





}
