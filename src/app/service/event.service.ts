import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private subject = new Subject<Task>();
  
  constructor() { }

  emitirTask(task:Task){
    console.log("hola")
    this.subject.next(task)
  }

  escucharTask():Observable<Task>{
    return this.subject.asObservable();
  }
}
