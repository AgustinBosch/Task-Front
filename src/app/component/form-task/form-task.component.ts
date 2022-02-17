import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private eventService:EventService) { 
    this.form =this.formBuilder.group({
      text:["",[Validators.required,Validators.minLength(3)]],
      date:["",[Validators.required,Validators.minLength(3)]],
      reminder:[false,[]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.eventService.emitirTask(this.form.value);
    }else{
      console.log("form no valido");
    }
  }
  
}
