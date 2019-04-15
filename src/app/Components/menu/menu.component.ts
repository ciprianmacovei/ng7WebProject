import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuComponent implements OnInit {

  @Input() menuButton: any;
  expanded: boolean = false;

  constructor(private route: Router, private activeR: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeR);
  }

  moveTo(link: string, button: any) {
    this.route.navigate([link]);
    this.expanded = !this.expanded;
  }

  moveToSubmenu(link: string) {
    this.route.navigate([link], { relativeTo: this.activeR });
  }

}
