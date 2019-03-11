import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { getRenderedText } from '@angular/core/src/render3';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

interface Gender {
  value: String;
  viewValue: String;
}


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  formGroupSubmit: FormGroup;
  EnrollGender: Gender[] = [
    { value: 'Mr', viewValue: 'Mr' },
    { value: 'Mrs', viewValue: 'Mrs' },
  ];
  courseSelected: String = '';
  courses: Array<String> = [
    'Diploma in Audio Engineering',
    'Diploma in 3D Animation & Game Design',
    'Electronic Music Production',
    'Live Sound Engineering',
    'Secrets of Mixing',
    'Autodesk Maya',
    '3D Graphics & Animation',
    'Drawing the human form',
    'Human anatomy - 3D'
    , 'Introduction to Zbrush'
  ]



  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.formGroupSubmit = new FormGroup({
      genderControll: new FormControl(null, [Validators.required]),
      enrollControllFirstName: new FormControl(null, Validators.required),
      enrollControllLastName: new FormControl(null, Validators.required),
      enrollControllCellPhone: new FormControl(null, Validators.compose([Validators.required,Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')])),
      enrollControllEmail: new FormControl(null, [Validators.required, Validators.email]),
      enrollCourses: new FormControl(null, Validators.required)
    });

  }

  submitForm(){
    console.log(this.formGroupSubmit)
  }
 
}
