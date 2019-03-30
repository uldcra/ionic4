import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService  } from 'src/app/services/authLogin.service';



const routes: Routes = [
  { 
    path: 'login', loadChildren: './pages/login/login.module#LoginPageModule',
    
 },
  { 
    path: 'dashboard',
    
    loadChildren: './home/home.module#HomePageModule',
    canActivate:[AuthGuardService]
  },
   { 
  path: 'lista', 

  loadChildren: './pages/lista/lista.module#ListaPageModule' ,
  canActivate:[AuthGuardService]
  }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
