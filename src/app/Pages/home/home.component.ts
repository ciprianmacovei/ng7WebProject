import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


// tslint:disable-next-line:class-name
interface shortCourses {
  name: string;
  children?: shortCourses[];
}

const shotCoursesList: shortCourses[] = [
  {
    name: 'Short Courses',
    children: [
      { name: 'Live Sound - 28.01.19 - Radu-Layer Dobra - 11:00 - 17:00' },
      { name: 'Animatie 3DsMax - 29.01.19 - Calin Cazan - 16:00 - 19:00' },
      { name: 'Secrets of Mixing - 04.02.19 - Cristian Dobrica - 17:00 - 20:00' }
    ]
  }
];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  treeControl = new NestedTreeControl<shortCourses>(node => node.children);
  dataSource = new MatTreeNestedDataSource<shortCourses>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = shotCoursesList;
  }

  ngOnInit() {

  }



  hasChild = (_: number, node: shortCourses) => !!node.children && node.children.length > 0;



}
