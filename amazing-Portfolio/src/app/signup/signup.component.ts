import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  reset() {
    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    var obj = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      username: this.f.username.value,
      password: this.f.password.value
    }

    console.log(obj)

    sessionStorage.setItem("currentuser", JSON.stringify(obj))
    this.registerForm.reset();
    this.router.navigate(['/login'])
  }

}
