import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/state/product.service';
import { ActionEvent } from 'src/app/state/product.state';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
counter:number=0;
  constructor(private eventDriverServer:EventDriverService) { }
//on utilise events si les traitement exitte au iveau de composant parent
  ngOnInit(): void {

    //écouter des évenement
    this.eventDriverServer.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
this.counter++;
console.log(this.counter);
    });
  }

}
