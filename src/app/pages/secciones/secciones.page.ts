import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  public title:string="";
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(resp=>{
      
      this.title=resp.id;
    });
   }

  ngOnInit() {
  }

}
