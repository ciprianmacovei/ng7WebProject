import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  arrayOfMenuButtons:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  constructor(private route: Router, private breakpointObserver: BreakpointObserver, private admin:AdminPanelService) { }

  ngOnInit() {
    this.admin.getMenuItems()
      .then( res => {
        this.arrayOfMenuButtons = res;
        console.log(this.arrayOfMenuButtons);
      })
  }

  moveTo(link) {
    this.route.navigate([link]);
  }

}
