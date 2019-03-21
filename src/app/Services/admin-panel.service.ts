import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService implements OnInit {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');

  }


  // REQUEST TO DB START

  getMenuItems() {
    const promise = new Promise((rez, rej) => {
      this.http.get('http://localhost:8081/getMenuItems', { headers: this.headers })
        .subscribe(res => {
          rez(res)
        },
          error => {
            console.log(error);
          })

    });

    return promise;
  }


  deleteButton(nume:string) {
    const promise = new Promise( (rez,rej) => {
      this.http.post('http://localhost:8081/deleteButton',{nume},{headers:this.headers})
        .subscribe( res => {
          rez(res);
        }, error => {
          console.log(error);
        })
    })

    return promise;
  }

  postMenuButtons(obj: Object) {
    const promise = new Promise((rez, rej) => {
      this.http.post('http://localhost:8081/addMenuButton', obj, { headers: this.headers })
        .subscribe((res) => {
          rez(res);
        },
          (error) => {
            console.log(error);
          })
    })

    return promise;
  }

  // REQUEST TO DB END




}
