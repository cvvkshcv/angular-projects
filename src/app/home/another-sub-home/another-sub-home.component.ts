import { Component, OnInit } from '@angular/core';
import { bgBlue } from '../../util/Console';
const log = bgBlue('Another-sub-child');

@Component({
  selector: 'app-another-sub-home',
  templateUrl: './another-sub-home.component.html',
  styleUrls: ['./another-sub-home.component.css']
})
export class AnotherSubHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    log('OnInit');
  }

  ngDoCheck() {
    log('Checking...')
  }
}
