import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ListService } from 'src/app/services/list-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit{
 
 
  
  public title:string="";

  public appPages=[
    {url:"dashboard",icon:"home",title:"Home"},
    {url:"dashboard/list",icon:"list",title:"List"},
    {url:"dashboard/listados",icon:"list",title:"Listados"},
    /* {url:"lista",icon:"list",title:"Lista"} */
  ];
  public logueado:boolean=false;
  public session:boolean=false;

  constructor(private menu: MenuController,private router:Router,private loginService:LoginService,private listService:ListService) {
   
    
   
 
   }
   ngOnInit() {
   this.title=this.listService.title;
  }
 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  menuToggle(){
    this.menu.toggle();
  }
  
  navegacion(url){
    
    this.router.navigate([url]);
  }

  logout(){

    this.logueado=false;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
