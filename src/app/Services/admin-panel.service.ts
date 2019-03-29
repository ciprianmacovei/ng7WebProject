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

  addItem(obj,endPoint) {
    const promise = new Promise( (rez,rej) => {
      this.http.post('http://localhost:8081/'+endPoint,obj,{headers:this.headers})
        .subscribe( res => {
          rez(res);
        }, error => {
          console.log(error);
        })
    })

    return promise;
  }
  


  getItems(endPoint) {
    const promise = new Promise( (rez,rej) => {
      this.http.get('http://localhost:8081/'+endPoint,{headers:this.headers})
        .subscribe( res => {
          rez(res);
        }, error => {
          console.log(error);
        })
    })
    return promise;
  }


  updateItems(obj,endPoint) {
    const promise = new Promise( (rez,rej) => {
      this.http.post('http://localhost:8081/'+endPoint,obj,{headers:this.headers})
        .subscribe( res => {
          rez(res);
        }, error => {
          console.log(error);
        })
    })

    return promise;
  }



  deleteItem(obj,endPoint){
    const promise = new Promise( (rez,rej) => {
      this.http.post('http://localhost:8081/'+endPoint,obj,{headers:this.headers})
        .subscribe( res => {
          rez(res);
        }, error => {
          console.log(error);
        })
    })

    return promise;
  }


  // REQUEST TO DB END




}
