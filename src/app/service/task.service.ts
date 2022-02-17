import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = "http://localhost:8080/task"

  constructor(private http:HttpClient) { }


  getTasks():Observable<Task[]>{
    const url = `${this.apiUrl}/todos`
    return this.http.get<Task[]>(url);
  }

  updateTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/editar/${task.id}`
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task):Observable<any> {
    const url = `${this.apiUrl}/borrar/${task.id}`
    return this.http.delete(url,{responseType: 'text'});
  }

  newTask(task:Task):Observable<Task> {
    console.log("llegue al service")
    const url = `${this.apiUrl}/crear`
    return this.http.post<Task>(url,task)
  }
  
}
