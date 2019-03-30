import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListarDirectorioService {

  public url="https://mispracticasangular.000webhostapp.com/php/"
  public urllafast="http://asociados.lafast.org/server.documentos.php?cod_tdocumento=P&cod_tsubtipo=P&_search=false&nd=1553762692629&rows=60&page=1&sidx=fecha&sord=desc&codigo=";

  constructor(private http:HttpClient) { }

  listar(){
      return this.http.get(this.url+"scandir.php").pipe(map(res=>{
        return res;
      }))
  }

  lafast(){
    return this.http.get(this.urllafast).pipe(map(res=>{
      return res;
    }))
  }
}
