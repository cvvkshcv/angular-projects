import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // FormControl
  // FormGroup
  // FormArray <-- later
  // FormBuilder 

  nameInput: any = null;
  emailInput: any = null;

  fg: any = null;

  fb = new FormBuilder();

  constructor() { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

    // this.fg = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl('', [Validators.required, Validators.email])
    // });

    this.fg.valueChanges.subscribe((data: any) => console.log(data));
    // this.nameInput = new FormControl('', [Validators.required, Validators.minLength(5)]);
    // this.emailInput = new FormControl('', [Validators.required, Validators.email]);
  }

  showNameInput() {
    console.log(this.nameInput.touched);
    console.log(this.nameInput.value);
    console.log(this.nameInput.errors);
  }

  get nameInp() {
    return this.fg.get('username');
  }

  onSubmit() {
    console.log(this.fg.errors)
    console.log(this.fg.valid)
    console.log(this.fg.value)
  }

}
