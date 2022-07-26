import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BagsComponent } from './componentes/bags/bags.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'bags',component:BagsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
