import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { bgYello } from 'src/app/util/Console';
const log = bgYello('Sub-Child');

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit, OnDestroy, OnChanges {

  @Input() count: any = 0;
  constructor() {
    log('Constructor ' + this.count);
  }

  ngOnChanges(arg: any) {
    console.log(arg.count.previousValue);
    console.log(arg.count.currentValue);
  }

  ngOnInit(): void {
    log('OnInit ' + this.count);
  }

  ngDoCheck() {
    log('There is a change detection')
  }


  ngOnDestroy() {
    log('Destroying subhome');
  }

}
