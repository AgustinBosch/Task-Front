import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showForm:boolean=false;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  cerrarFormulario(b:boolean){
    this.showForm = b;
  }

}
