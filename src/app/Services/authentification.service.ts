import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthentificationService implements OnInit {

  headers:HttpHeaders;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
  }

  setLocalStorage(obj:Object){
    if (obj !== null) {
      localStorage.setItem('admin','true');
    } else {
      localStorage.setItem('admin','false');
    }
  }

  adminLogin(username:String, password:String) {
    console.log(username,password);
    const promise = new Promise((rez,rej) => {
      this.http.post('http://localhost:8081/adminLogin',{username:username,password:password},{headers:this.headers})
        .subscribe( res => {
          this.setLocalStorage(res);
          rez(res);
        }, error => {
        
          console.log(error);
        })
    
    })
    return promise;
  }
}
