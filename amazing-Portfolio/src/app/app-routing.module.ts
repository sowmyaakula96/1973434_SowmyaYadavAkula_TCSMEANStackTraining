import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'register', 
    component: SignupComponent
  },
  {
    path:'login',
    component: SigninComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
