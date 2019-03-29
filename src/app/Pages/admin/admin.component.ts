import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthentificationService, private route: Router, private snackBar: NotificationService, private thisroute: ActivatedRoute) { }

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
          this.snackBar.show('Succesfuly Logged In','success');
          this.route.navigate(['/adminPanel']);

        } else {
          this.snackBar.show('Login Incorect','danger');
        }
      })
  }
}
