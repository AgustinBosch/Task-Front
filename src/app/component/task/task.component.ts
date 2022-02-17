import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:Task;
  @Output() delTask: EventEmitter<Task> = new EventEmitter<Task>();
  canToggle:boolean = true;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  toggleReminder(){
    if(this.canToggle){
      console.log("toggle");
      this.task.reminder = !this.task.reminder;
      this.taskService.updateTask(this.task).subscribe();  
    }
    }

  deleteTask(){
    this.canToggle = false;
    this.delTask.emit(this.task)
  }
}
