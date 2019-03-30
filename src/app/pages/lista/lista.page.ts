import { Component, OnInit } from '@angular/core';
import { ListarDirectorioService } from 'src/app/services/listar-directorio.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  providers:[ListarDirectorioService]
})
export class ListaPage implements OnInit {
  
  public url="https://mispracticasangular.000webhostapp.com/pdf/";
  public listaPdf:any=[];
  public buscador:string="";
  public items: any=[];
  public isItemAvailable: boolean=false;;


  constructor(private listar:ListarDirectorioService) { }

  ngOnInit() {

    this.listar.listar().subscribe(data=>{
      console.log("data",data);
      this.listaPdf=data;
      this.items=data;
    },error=>{
      console.log("data",error);
    });

   
  }
  initializeItems(){ 
    this.items = ["Ram","gopi", "dravid"]; 
}

getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
