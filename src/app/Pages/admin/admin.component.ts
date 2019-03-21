import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthentificationService, private route: Router, private snackBar: MatSnackBar, private thisroute: ActivatedRoute) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  login() {
    this.auth.adminLogin(this.loginForm.value.username, this.loginForm.value.password)
      .then(res => {
        if (res !== null) {
          this.snackBar.open('Login Succefully', 'Login', {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'pannelSuccess'
          });

          this.route.navigate(['/adminPanel']);

        } else {
          this.snackBar.open('Login Error', 'Login', {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'pannelError'
          });
        }
      })
  }
}
