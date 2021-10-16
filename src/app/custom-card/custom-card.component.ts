import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() about: string = 'I am learning the angular version 12';

  private aPrivateVar = 'Private var';
  public aPublicVar = 'Public var';
  unknownVar = 'unknownVar var';

  constructor() {
    // console.log('I am inside constructor');
  }

  showSomeRandomMessage () {
    console.log(`${Math.floor(Math.random() * 100)} this is some random message`);
  }

  ngAfterContentChecked(): void {
    // console.log('I am inside ngAfterContentChecked.');
  }
  ngAfterContentInit(): void {
    // console.log('I am inside ngAfterContentInit.');
  }

  ngDoCheck(): void {
    // console.log('I am inside Docheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('I am inside onChanges', changes);
  }

  ngAfterViewInit(): void {
    // console.log('I am inside ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('I am inside ngAfterViewChecked');
  }

  ngOnInit(): void {
    // console.log('I am inside ngOnInit');
  }
  ngOnDestroy(): void {
    // console.log('I am inside onDestroy  ');
  }

}
