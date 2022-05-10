import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
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


  

  getsTasks():Observable<Task[]>{
    const url = `${this.apiUrl}/todos`
    return this.http.get<Task[]>(url).pipe(catchError(this.handleError));
  }


  getssTasks():Observable<HttpResponse<Task[]>>{
    const url = `${this.apiUrl}/todos`
    return this.http.get<Task[]>(url, {observe:"response"});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}
