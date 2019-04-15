import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith,map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchControl: FormControl;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge)
    .pipe(
      map(result => result.matches)
    );


  filteredResults$: Observable<string[]>;

   results = ['aici tr sa fie array-ul din baza de date'];
  
  constructor(private breakpointObserver:BreakpointObserver) { 
    this.searchControl = new FormControl('');
    this.filteredResults$ = this.searchControl.valueChanges
      .pipe(startWith(''))
      .pipe(map(val => this.filterResults(val)))
      .pipe(map(val => val.slice(0, 4)));
  }

  ngOnInit() {
  }




  private filterResults(val: string): string[] {
    return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
  }

}
