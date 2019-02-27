import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  hide: Boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
