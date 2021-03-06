import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';


// tslint:disable-next-line:class-name
export interface shortCourses {
  name: string;
  children?: shortCourses[];
}

export interface card {
  title: string;
  imgUrl: string;
  content: string;
}

export interface diplomas {
  titleButton:string;
  iconButton:string;
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

  cardArray: card[];
  diplomasArray: diplomas[];


  constructor(private breakpointObserver: BreakpointObserver, private admin: AdminPanelService) {
    this.dataSource.data = shotCoursesList;
  }

  ngOnInit() {

    this.admin.getItems('getCards')
      .then((res: card[]) => {
        this.cardArray = res;
      })

    this.admin.getItems('getDiplomas')
      .then( (res:diplomas[]) => {
        this.diplomasArray = res;
        console.log(res);
      })
    
  }



  hasChild = (_: number, node: shortCourses) => !!node.children && node.children.length > 0;



}
