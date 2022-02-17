import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
  @Output() cerrarForm:EventEmitter<boolean> = new EventEmitter();
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
      this.cerrarForm.emit(false);
      this.eventService.emitirTask(this.form.value);
      this.form.reset();
    }else{
      console.log("form no valido");
    }
  }
  
}
