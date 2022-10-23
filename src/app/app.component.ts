import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChildTwoComponent } from './child-two/child-two.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  name = '-Vikash-';

  @ViewChild('abc', { static: true }) inputDom: any;

  @ViewChildren(ChildTwoComponent) childTwoInstance: ChildTwoComponent | null = null;

  ngOnInit() {
    // console.clear();
    // console.log(document.getElementById('abc'));
    console.log(`On init `, this.childTwoInstance);
    // this.childTwoInstance?.showMyName();
  }

  ngAfterViewInit() {
    console.log(`On afterview init `, this.childTwoInstance);
    // console.log(this.inputDom.nativeElement);
  }

  handleClick(e: any) {
    console.log(e);
    console.log('Button clicked');
  }

  handleVikash(e: any) {
    console.log('Handling custom event ', e);
  }
}
