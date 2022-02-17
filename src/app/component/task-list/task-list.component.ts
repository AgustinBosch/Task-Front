import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task.model';
import { EventService } from 'src/app/service/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Task[] = [];
  sub:Subscription;
  constructor(private taskService:TaskService, private eventService:EventService) { 
    this.sub = this.eventService.escucharTask().subscribe(
      (val)=> this.taskService.newTask(val).subscribe(
        (task)=> this.tasks.push(task)));
  }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks)=>{
        this.tasks = tasks;
      })
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(t=> t.id !== task.id)
    })
  }



}
