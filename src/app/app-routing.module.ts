import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { HomeComponent } from './pages/guest/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'dashboard',
    component:IndexComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
