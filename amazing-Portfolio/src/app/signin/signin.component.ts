import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  route: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    var username = this.f.username.value;
    var password = this.f.password.value;
    console.log(username)
    console.log(password)


    var currentuser = JSON.parse(sessionStorage.getItem("currentuser") || '{}') ;
    console.log('currentuser',currentuser)
    if( username==currentuser.username && password==currentuser.password)
    {
      console.log("match");
      sessionStorage.setItem('login','true')
         this.router.navigate(['/portfolio'])
    }
    else
    {
      console.log("not match")
    }
  }
}
