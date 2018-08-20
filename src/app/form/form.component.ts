import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { FormService } from '../form.service';

 

@Component({

  selector: 'app-form',

  templateUrl: './form.component.html',

  styleUrls: ['./form.component.css'],

  providers: [FormService]

})

export class FormComponent {

  @Output() sharedDataEvent = new EventEmitter()
 
  userForm: FormGroup;

  showStatus : boolean = false;

  constructor(private formService: FormService, private fb: FormBuilder) {

      this.createForm();

   }

 

  createForm() {

    this.userForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', Validators.required],

      amount: ['', Validators.required]

    });

  }

 

  onSubmit() {

    const response:any = this.formService.saveDetails(this.userForm.value)
    response.then(result => {

      if(result.status === 201){
        this.showStatus = true;
        this.userForm.reset();
        this.sharedDataEvent.emit('update')
      }
    })
  }

 

}

 