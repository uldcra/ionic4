import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-secciones',
  templateUrl: './menu-secciones.component.html',
  styleUrls: ['./menu-secciones.component.scss'],
})
export class MenuSeccionesComponent implements OnInit {

  @Input() public title:string="";
  /* public title:string="secciones"; */
  
  constructor() { }

  ngOnInit() {}

}
