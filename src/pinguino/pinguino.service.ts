import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PinguinoDetail } from './pinguinoDetail';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {
  private baseUrl:string = environment.baseUrl
  private mayorEspecie: string = "";

constructor(private http:HttpClient) { }

getPinguinos():Observable<PinguinoDetail[]>{
  return this.http.get<PinguinoDetail[]>(this.baseUrl)
}

getMayorDistribucion(pinguinos: PinguinoDetail[]): string {
  let especieConMayorDistribucion: string = "";
  let maxDistribucion: number = 0;

  // Iterar sobre cada especie de pingüino
  pinguinos.forEach(pinguino => {
    // Obtener el número de países en la distribución mundial de la especie actual
    const distribucionActual: number = pinguino.global_distribution.length;
    
    // Verificar si la distribución actual es mayor que la máxima encontrada hasta ahora
    if (distribucionActual > maxDistribucion) {
      maxDistribucion = distribucionActual;
      especieConMayorDistribucion = pinguino.nombre;
    }
  });

  // Devolver el nombre de la especie con la mayor distribución mundial
  return especieConMayorDistribucion;
}

}

