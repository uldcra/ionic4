import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public title="Menu";

  constructor() { }

  public changeTitle(titulo:string){
    this.title=titulo;
    console.log(this.title);
  }


}
