import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

const CustValidators = {
  isReq: (control: any) => control.value.length > 0
}
@Component({
  selector: 'app-learning-service',
  templateUrl: './learning-service.component.html',
  styleUrls: ['./learning-service.component.css']
})
export class LearningServiceComponent implements OnInit {
  
  text: string = '';

  loginForm: any;

  constructor(public jsonService: JsonPlaceholderService,private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username: ['', [CustValidators.isReq]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // console.log(this.jsonService.someDataToShare);
    // this.textField = new FormControl('', [Validators.required, Validators.minLength(5)]);
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])
    // })
    // console.log(this.loginForm.valueChanges);
    // this.loginForm.valueChanges.subscribe((data: any) => console.log(data));
    this.loginForm.controls['password'].valueChanges.subscribe((data: any) => console.log(data));
  }

  showFormControl() {
    console.log(this.loginForm.valid);
    // if (this.loginForm.invalid) return;
    // const username = this.loginForm.controls['username'].value;
    // console.log(this.loginForm.controls['password'].setValue(username + ' abc'));
    // console.log(this.loginForm);
  }

}
