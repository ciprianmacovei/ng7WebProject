import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService implements OnInit{

  headers:HttpHeaders;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
  }



  getMenuItems() {
    const promise = new Promise( (rez,rej) => {
      this.http.get('http://localhost:8081/getMenuItems',{headers:this.headers})
        .subscribe( res => {
          rez(res)
        },
        error => {
          console.log(error);
        })

    });

    return promise;
  }


}
