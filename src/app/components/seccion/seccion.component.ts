import { Component, OnInit, Input } from '@angular/core';
import { ListarDirectorioService } from 'src/app/services/listar-directorio.service';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss'],
  providers:[ListarDirectorioService]
})
export class SeccionComponent implements OnInit {

  @Input() seccion:string="";

  public listaPdf:any[]=[];
  
  constructor(private listaService:ListarDirectorioService) {
    console.log("sección");
   }

  ngOnInit() {
    this.listaService.listar().subscribe((resp:any)=>{
        this.listaPdf=resp;
    },error=>{
      console.log("error",error)
    });
  }

}
