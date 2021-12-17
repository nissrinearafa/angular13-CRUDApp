import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./product.state";
//gérer la communication entre les composants
@Injectable({providedIn:"root"})
export class EventDriverService{
//observable est un design pattern pour
sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

// a chaquoi fois j'appelle publishEvent je vais publier un évenement dans ce sujet sourceEventSubject,tous les composants qui font un subscribe à sourceEventSubjectObservable,il vont recevoir l'évenement

publishEvent(event:ActionEvent){
  this.sourceEventSubject.next(event);
}
}
