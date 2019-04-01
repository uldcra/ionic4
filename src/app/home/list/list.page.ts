import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit{


  constructor(
       private router:Router 
    ){
    
  }

  ngOnInit(): void {
    
  }
  public navegar(url){
      this.router.navigate(['secciones',url]);
  }

}
