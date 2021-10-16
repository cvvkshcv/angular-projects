import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomCardComponent } from '../custom-card/custom-card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChildren('para') para: any;
  @ViewChild('input', { static: true }) input: any;
  @ViewChild('customCard', { static: true })
  customCard!: CustomCardComponent;
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      arr: this.fb.array([]),
    });
  }

  get getFormArr () {
    return this.form.get('arr') as FormArray;
  }

  addToForm () {
    this.getFormArr.push(this.generateRow());
  }

  generateRow () {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  getFormValue () {
    console.log(this.form.value)
  }

  addForm (i: number) {
    const group: any = this.getFormArr.controls[i];
    group.addControl('something', new FormControl(''));
  }

  removeForm(i:number) {
    const group: any = this.getFormArr.controls[i];
    group.removeControl('something');
  }


  ngOnInit () {
    // this.input.nativeElement.focus();
  }

  showRandom() {
    this.customCard.showSomeRandomMessage()
  }

  ngAfterViewInit(): void {
    console.log(this.para.toArray());
  }



  clickMe() {
    console.log('Click me fun exected');
  }

}
