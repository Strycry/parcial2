import { Component, OnInit } from '@angular/core';
import { PinguinoService } from '../pinguino.service';
import { PinguinoDetail } from '../pinguinoDetail';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<PinguinoDetail>=[]
  select: boolean = false;
  pinguino! :PinguinoDetail
  mayorEspecie:string="";

  getPinguinos(){
    this.service.getPinguinos().subscribe((allPinguinos)=>{
      this.pinguinos = allPinguinos;
      this.mayorEspecie = this.service.getMayorDistribucion(this.pinguinos);
      
    })
  }

  selected(pinguino:PinguinoDetail){
    this.select = true;
    this.pinguino= pinguino;
  }

  constructor(private service:PinguinoService) { }

  ngOnInit() {
    this.getPinguinos()
  }

}
