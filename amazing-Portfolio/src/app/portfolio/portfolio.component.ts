import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  uname:string="";
  portfolioForm!: FormGroup;
  loading = false;
  submitted = false;

  public contactdetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    var currentuser = JSON.parse(sessionStorage.getItem("currentuser") || '{}') ;
    console.log(currentuser.username)
    this.uname= currentuser.username,
    this.portfolioForm = this.formBuilder.group({
      contactName: ['', Validators.required],
      phoneNo: ['', Validators.required]
    });

    this.populateData();
  }
  
  get f() { return this.portfolioForm.controls; }

  populateData() {
    var existingData = sessionStorage.getItem("contactData");
    this.contactdetails =  JSON.parse(existingData || '{}');
  }


  onSave() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.portfolioForm.invalid) {
      return;
    }

    var obj = {
      contactName: this.f.contactName.value,
      phoneNo: this.f.phoneNo.value
    }

    console.log(obj)
    var objArray = [];
    var existingData = sessionStorage.getItem("contactData");
    if (existingData) {
        objArray = JSON.parse(existingData);
        objArray.push(obj);
    }
    else {
        objArray.push(obj);
    }

    this.contactdetails =  objArray;
    sessionStorage.setItem("contactData", JSON.stringify(objArray));
    this.portfolioForm.reset();
    // for (let control in this.portfolioForm.controls) {
    //   this.portfolioForm.controls[control].setErrors(null);
    // }
  }
  

}
