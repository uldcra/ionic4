import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeccionesPage } from './secciones.page';
import { MenuSeccionesComponent } from 'src/app/components/menu-secciones/menu-secciones.component';
import { SeccionComponent } from 'src/app/components/seccion/seccion.component';


const routes: Routes = [
  {
    path: '',
    component: SeccionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SeccionesPage,
    MenuSeccionesComponent,
    SeccionComponent
  
  ],
  exports:[
    
    MenuSeccionesComponent,
    SeccionComponent
  ]
})
export class SeccionesPageModule {}
